using PharmacyManagementSystem.Application.DTOs;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface IPharmacyService
    {
        Task<List<PharmacyResponseDto>> GetAllPharmaciesAsync();
        Task<PharmacyResponseDto?> GetPharmacyByIdAsync(int id);
        Task<PharmacyResponseDto> CreatePharmacyAsync(PharmacyRequestDto dto);
        Task<bool> UpdatePharmacyAsync(int id,PharmacyRequestDto dto);
        Task<bool> DeletePharmacyAsync(int id);
    }
}
