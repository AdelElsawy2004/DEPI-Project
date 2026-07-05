namespace PharmacyManagementSystem.Application.DTOs.Search
{
    public class SearchResultDto
    {
        // Pharmacy Details
        public string PharmacyName { get; set; } = string.Empty;
        public string PharmacyAddress { get; set; } = string.Empty;
        public string? PharmacyPhone { get; set; }

        // Distance
        public double? DistanceInKm { get; set; }

        // Medicine Stock Details
        public string MedicineName { get; set; } = string.Empty;
        public int QuantityAvailable { get; set; }
        public decimal Price { get; set; }
    }
}
