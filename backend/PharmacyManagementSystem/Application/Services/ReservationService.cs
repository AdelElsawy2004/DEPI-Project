using Microsoft.AspNetCore.Identity;
using PharmacyManagementSystem.Application.DTOs.Reservation.Patient;
using PharmacyManagementSystem.Application.DTOs.Reservation.Pharmacist;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Application.Mappers;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Services
{
    public class ReservationService : IReservationService
    {
        private readonly IReservationRepository _reservationRepo ;
        private readonly UserManager<ApplicationUser> _userManager ;
        private readonly IMedicineStockRepository _stockRepo ;

        public ReservationService(IReservationRepository reservationRepo,
            UserManager<ApplicationUser> userManager,
            IMedicineStockRepository stockRepo)
        {
            _reservationRepo = reservationRepo;
            _userManager = userManager;
            _stockRepo = stockRepo ;
        }

        #region PHARMACY ADMIN
        public async Task<List<PharmacistReservationResponseDto>> GetPharmacyReservationsAsync(int pharmacyId)
        {
            var reservations = await _reservationRepo.GetReservationsByPharmacyIdAsync(pharmacyId);
            var dtos = new List<PharmacistReservationResponseDto>();

            foreach(var res in reservations)
            {
                // Find user by PatientId string format mapping
                var user = await _userManager.FindByIdAsync(res.PatientId.ToString());
                string patientName = user?.FullName ?? $"Patient #{res.PatientId}";

                dtos.Add(res.ToPharmacyAdminResponseDto(patientName));
            }

            return dtos;
        }

        public async Task<bool> ConfirmReservationAsync(int reservationId, int pharmacyId)
        {
            var reservation = await _reservationRepo.GetReservationByIdWithDetailsAsync(reservationId);
            if (reservation == null)
                throw new KeyNotFoundException("Reservation not found");

            if (reservation.PharmacyId != pharmacyId)
                throw new UnauthorizedAccessException("You do not have permission to update this reservation");

            if (reservation.Status != ReservationStatus.Pending)
                throw new InvalidOperationException("Only pending reservations can be confirmed");

            reservation.Status = ReservationStatus.Confirmed;
            _reservationRepo.Update(reservation);
            await _reservationRepo.SaveAsync();

            return true;
        }

        public async Task<bool> RejectReservationAsync(int reservationId, int pharmacyId)
        {
            var reservation = await _reservationRepo.GetReservationByIdWithDetailsAsync(reservationId);
            if (reservation == null)
                throw new KeyNotFoundException("Reservation not found");

            if (reservation.PharmacyId != pharmacyId)
                throw new UnauthorizedAccessException("You do not have permission to update this reservation");

            if (reservation.Status != ReservationStatus.Pending)
                throw new InvalidOperationException("Only pending reservations can be rejected");

            reservation.Status = ReservationStatus.Rejected;
            _reservationRepo.Update(reservation);
            await _reservationRepo.SaveAsync();

            return true;
        }
        #endregion

        #region PATIENT
        public async Task<PatientReservationResponseDto> CreateReservationAsync(
            string patientId,
            CreateReservationRequestDto request)
        {
            var stock = await _stockRepo.GetStockWithDetailsAsync(request.PharmacyId,request.MedicineId);
            if(stock == null)
                throw new InvalidOperationException("This medicine is not available at this pharmacy");

            if(stock.QuantityAvailable <= 0)
                throw new InvalidOperationException("This medicine is currently out of stock");

            if(request.Quantity > stock.QuantityAvailable)
                throw new InvalidOperationException($"Only {stock.QuantityAvailable} units available");

            var reservation = new Reservation
            {
                PatientId = patientId,
                PharmacyId = request.PharmacyId,
                MedicineId = request.MedicineId,
                Quantity = request.Quantity,
                Status = ReservationStatus.Pending,
                CreatedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddDays(7), // Expires after 7 days
                Notes = string.Empty
            };

            await _reservationRepo.AddAsync(reservation);
            await _reservationRepo.SaveAsync();

            var savedReservation = await _reservationRepo.GetReservationByIdWithDetailsAsync(reservation.Id);

            return savedReservation.ToPatientResponseDto();
        }

        public async Task<MyReservationsResponseDto> GetMyReservationsAsync(string patientId)
        {
            var reservations = await _reservationRepo.GetReservationsByPatientIdAsync(patientId);

            var dtos = reservations
                .Select(r => r.ToPatientResponseDto())
                .ToList();

            return new MyReservationsResponseDto
            {
                Reservations = dtos
            };
        }

        public async Task<bool> CancelReservationAsync(int reservationId,string patientId)
        {
            var reservation = await _reservationRepo.GetReservationByIdWithDetailsAsync(reservationId);
            if(reservation == null)
                return false;

            if(reservation.PatientId != patientId)
                return false;

            if(reservation.Status == ReservationStatus.Cancelled)
                return true; // Already cancelled

            reservation.Status = ReservationStatus.Cancelled;

            _reservationRepo.Update(reservation);
            await _reservationRepo.SaveAsync();

            return true;
        }
        #endregion
    }
}
