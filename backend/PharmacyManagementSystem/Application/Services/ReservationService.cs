using Microsoft.AspNetCore.Identity;
using PharmacyManagementSystem.Application.DTOs;
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

        public ReservationService(IReservationRepository reservationRepo, UserManager<ApplicationUser> userManager)
        {
            _reservationRepo = reservationRepo;
            _userManager = userManager;
        }

        public async Task<List<ReservationResponseDto>> GetPharmacyReservationsAsync(int pharmacyId)
        {
            var reservations = await _reservationRepo.GetReservationsByPharmacyIdAsync(pharmacyId);
            var dtos = new List<ReservationResponseDto>();

            foreach(var res in reservations)
            {
                // Find user by PatientId string format mapping
                var user = await _userManager.FindByIdAsync(res.PatientId.ToString());
                string patientName = user?.FullName ?? $"Patient #{res.PatientId}";

                dtos.Add(res.ToResponseDto(patientName));
            }

            return dtos;
        }
    }
}
