using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Application.Mappers;

namespace PharmacyManagementSystem.Application.Services
{
    public class MedicineCategoryService : IMedicineCategoryService
    {
        private readonly IMedicineCategoryRepository _categoryRepo ;

        public MedicineCategoryService(IMedicineCategoryRepository categoryRepo)
        {
            _categoryRepo = categoryRepo ;
        }

        public async Task<List<MedicineCategoryResponseDto>> GetAllCategoriesAsync()
        {
            var categories = await _categoryRepo.GetAllAsync() ;
            return categories.Select(c => c.ToResponseDto()).ToList() ;
        }

        public async Task<MedicineCategoryResponseDto?> GetCategoryByIdAsync(int id)
        {
            var category = await _categoryRepo.GetByIdAsync(id) ;
            return category?.ToResponseDto() ;
        }

        public async Task<MedicineCategoryResponseDto> CreateCategoryAsync(MedicineCategoryRequestDto dto)
        {
            var category = dto.ToEntity() ;
            await _categoryRepo.AddAsync(category) ;
            await _categoryRepo.SaveAsync() ;
            return category.ToResponseDto() ;
        }

        public async Task<bool> UpdateCategoryAsync(int id, MedicineCategoryRequestDto dto)
        {
            var category = await _categoryRepo.GetByIdAsync(id) ;
            if (category == null)
                return false ;
            dto.UpdateEntity(category) ;
            _categoryRepo.Update(category) ;
            await _categoryRepo.SaveAsync() ;
            return true ;
        }

        public async Task<bool> DeleteCategoryAsync(int id)
        {
            var category = await _categoryRepo.GetByIdAsync(id) ;
            if (category == null) return false ;

            _categoryRepo.Delete(category) ;
            await _categoryRepo.SaveAsync() ;
            return true ;
        }
    }
}
