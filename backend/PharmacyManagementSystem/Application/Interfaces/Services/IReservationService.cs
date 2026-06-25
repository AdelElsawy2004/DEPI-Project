using PharmacyManagementSystem.Application.DTOs;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface IReservationService
    {
        Task<List<ReservationResponseDto>> GetPharmacyReservationsAsync(int pharmacyId);
    }
}
