using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Mappers
{
    public static class MedicineStockMappers
    {
        public static MedicineStockResponseDto ToResponseDto(this MedicineStock stock)
        {
            return new MedicineStockResponseDto
            {
                MedicineId = stock.MedicineId,
                PharmacyId = stock.PharmacyId,
                QuantityAvailable = stock.QuantityAvailable,
                ExpiryDate = stock.ExpiryDate,
                LastUpdated = stock.LastUpdated,
                MedicineName = stock.Medicine?.TradeName ?? "Unknown Medicine"
            } ;
        }

        public static MedicineStock ToEntity(this MedicineStockRequestDto dto)
        {
            return new MedicineStock
            {
                PharmacyId = dto.PharmacyId,
                MedicineId = dto.MedicineId,
                QuantityAvailable = dto.QuantityAvailable,
                ExpiryDate = dto.ExpiryDate,
                LastUpdated = DateTime.UtcNow
            };
        }

        public static void UpdateEntity(this MedicineStockRequestDto dto,MedicineStock entity)
        {
            entity.QuantityAvailable = dto.QuantityAvailable;
            entity.ExpiryDate = dto.ExpiryDate;
            entity.LastUpdated = DateTime.UtcNow;
        }
    }
}
