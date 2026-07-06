using PharmacyManagementSystem.Application.DTOs.Reservation.Patient;
using PharmacyManagementSystem.Application.DTOs.Reservation.Pharmacist;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface IReservationService
    {
        // PHARMACY ADMIN
        Task<List<PharmacistReservationResponseDto>> GetPharmacyReservationsAsync(int pharmacyId);
        Task<bool> ConfirmReservationAsync(int reservationId, int pharmacyId);
        Task<bool> RejectReservationAsync(int reservationId, int pharmacyId);

        // PATIENT
        Task<PatientReservationResponseDto> CreateReservationAsync(string patientId,CreateReservationRequestDto request);
        Task<MyReservationsResponseDto> GetMyReservationsAsync(string patientId);
        Task<bool> CancelReservationAsync(int reservationId,string patientId);
    }
}
