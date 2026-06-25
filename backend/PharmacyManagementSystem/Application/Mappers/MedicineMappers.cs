using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Mappers
{
    public static class MedicineMappers
    {
        public static MedicineResponseDto ToResponseDto(this Medicine medicine)
        {
            return new MedicineResponseDto
            {
                Id = medicine.Id,
                TradeName = medicine.TradeName,
                ActiveIngredient = medicine.ActiveIngredient,
                Manufactrer = medicine.Manufactrer,
                Form = medicine.Form,
                Strength = medicine.Strength,
                RequiresPrescription = medicine.RequiresPrescription,
                CategoryId = medicine.CategoryId
            };
        }

        public static Medicine ToEntity(this MedicineRequestDto dto)
        {
            return new Medicine
            {
                TradeName = dto.TradeName,
                ActiveIngredient = dto.ActiveIngredient,
                Manufactrer = dto.Manufactrer,
                Form = dto.Form,
                Strength = dto.Strength,
                RequiresPrescription = dto.RequiresPrescription,
                CategoryId = dto.CategoryId
            };
        }

        public static void UpdateEntity(this MedicineRequestDto dto,Medicine entity)
        {
            entity.TradeName = dto.TradeName;
            entity.ActiveIngredient = dto.ActiveIngredient;
            entity.Manufactrer = dto.Manufactrer;
            entity.Form = dto.Form;
            entity.Strength = dto.Strength;
            entity.RequiresPrescription = dto.RequiresPrescription;
            entity.CategoryId = dto.CategoryId;
        }
    }
}
