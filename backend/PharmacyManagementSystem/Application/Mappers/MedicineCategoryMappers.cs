using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Mappers
{
    public static class MedicineCategoryMappers
    {
        public static MedicineCategoryResponseDto ToResponseDto(this MedicineCategory entity)
        {
            return new MedicineCategoryResponseDto
            {
                Id = entity.Id,
                Name = entity.Name,
                Description = entity.Description
            } ;
        }

        public static MedicineCategory ToEntity(this MedicineCategoryRequestDto dto)
        {
            return new MedicineCategory
            {
                Name = dto.Name,
                Description = dto.Description
            };
        }

        public static void UpdateEntity(this MedicineCategoryRequestDto dto,MedicineCategory entity)
        {
            entity.Name = dto.Name;
            entity.Description = dto.Description;
        }
    }
}
