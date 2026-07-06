using PharmacyManagementSystem.Application.DTOs.Search;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Application.Mappers;

namespace PharmacyManagementSystem.Application.Services
{
    public class SearchService : ISearchService
    {
        private readonly IMedicineStockRepository _stockRepository ;

        public SearchService(IMedicineStockRepository stockRepository)
        {
            _stockRepository = stockRepository ;
        }

        public async Task<SearchResponseDto> SearchMedicineAsync(PatientSearchRequestDto request)
        {
            var stocks = await _stockRepository.GetAvailableStocksByMedicineNameAsync(request.TradeName) ;

            if(stocks == null || stocks.Count == 0)
            {
                return new SearchResponseDto
                {
                    SearchResults = new List<SearchResultDto>()
                };
            }


            // Calculate distance for each stock and map to DTO
            var results = new List<SearchResultDto>();
            foreach(var stock in stocks)
            {
                double? distance = null;

                if(request.Latitude.HasValue && request.Longitude.HasValue && stock.Pharmacy != null && stock.Pharmacy.latitude.HasValue && stock.Pharmacy.Longitude.HasValue)
                {
                    distance = CalculateDistance(
                        request.Latitude.Value,
                        request.Longitude.Value,
                        stock.Pharmacy.latitude.Value,
                        stock.Pharmacy.Longitude.Value
                    );
                }

                var resultDto = stock.ToSearchResultDto(distance);
                results.Add(resultDto);
            }

            // Sort by distance (closest first)
            // If distance is null (patient didn't provide location), sort by pharmacy name
            var sortedResults = results
                .OrderBy(r => r.DistanceInKm ?? double.MaxValue)
                .ThenBy(r => r.PharmacyName)
                .ToList();

            return new SearchResponseDto
            {
                SearchResults = sortedResults
            };
        }

        private double CalculateDistance(double lat1,double lon1,double lat2,double lon2)
        {
            const double EarthRadiusKm = 6371.0;

            // Convert degrees to radians
            var lat1Rad = DegreesToRadians(lat1);
            var lon1Rad = DegreesToRadians(lon1);
            var lat2Rad = DegreesToRadians(lat2);
            var lon2Rad = DegreesToRadians(lon2);

            // Haversine formula
            var dlat = lat2Rad - lat1Rad;
            var dlon = lon2Rad - lon1Rad;

            var a = Math.Sin(dlat / 2) * Math.Sin(dlat / 2) +
                    Math.Cos(lat1Rad) * Math.Cos(lat2Rad) *
                    Math.Sin(dlon / 2) * Math.Sin(dlon / 2);

            var c = 2 * Math.Atan2(Math.Sqrt(a),Math.Sqrt(1 - a));

            return EarthRadiusKm * c;
        }

        private double DegreesToRadians(double degrees)
        {
            return degrees * Math.PI / 180.0;
        }
    }
}
