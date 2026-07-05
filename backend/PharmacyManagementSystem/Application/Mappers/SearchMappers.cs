using PharmacyManagementSystem.Application.DTOs.Search;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Mappers
{
    public static class SearchMappers
    {
        public static SearchResultDto ToSearchResultDto(this MedicineStock stock,double? distanceInKm)
        {
            return new SearchResultDto
            {
                // Pharmacy Details
                PharmacyName = stock.Pharmacy?.Name ?? "Unknown Pharmacy",
                PharmacyAddress = stock.Pharmacy?.Address ?? "Unknown Address",
                PharmacyPhone = stock.Pharmacy?.Phone,

                // Distance
                DistanceInKm = distanceInKm,

                // Medicine Stock Details
                MedicineName = $"{stock.Medicine?.TradeName} {stock.Medicine?.Strength}" ?? "Unknown Medicine",
                QuantityAvailable = stock.QuantityAvailable,
                Price = stock.Price
            };
        }


    }
}
