using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Mappers
{
    public static class PharmacyMappers
    {
        public static PharmacyResponseDto ToResponseDto(this Pharmacy pharmacy)
        {
            return new PharmacyResponseDto
            {
                Id = pharmacy.Id,
                Name = pharmacy.Name,
                Address = pharmacy.Address,
                City = pharmacy.City,
                Latitude = pharmacy.latitude,
                Longitude = pharmacy.Longitude,
                Phone = pharmacy.Phone,
                IsVerified = pharmacy.IsVerified
            };
        }

        public static Pharmacy ToEntity(this PharmacyRequestDto dto)
        {
            return new Pharmacy
            {
                Name = dto.Name,
                Address = dto.Address,
                City = dto.City,
                latitude = dto.Latitude,
                Longitude = dto.Longitude,
                Phone = dto.Phone,
                IsVerified = dto.IsVerified
            };
        }

        public static void UpdateEntity(this PharmacyRequestDto dto,Pharmacy entity)
        {
            entity.Name = dto.Name;
            entity.Address = dto.Address;
            entity.City = dto.City;
            entity.latitude = dto.Latitude;
            entity.Longitude = dto.Longitude;
            entity.Phone = dto.Phone;
            entity.IsVerified = dto.IsVerified;
        }
    }
}
