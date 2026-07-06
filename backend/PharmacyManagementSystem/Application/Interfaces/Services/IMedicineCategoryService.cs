using PharmacyManagementSystem.Application.DTOs;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface IMedicineCategoryService
    {
        Task<List<MedicineCategoryResponseDto>> GetAllCategoriesAsync();
        Task<MedicineCategoryResponseDto?> GetCategoryByIdAsync(int id);
        Task<MedicineCategoryResponseDto> CreateCategoryAsync(MedicineCategoryRequestDto dto);
        Task<bool> UpdateCategoryAsync(int id,MedicineCategoryRequestDto dto);
        Task<bool> DeleteCategoryAsync(int id);
    }
}
