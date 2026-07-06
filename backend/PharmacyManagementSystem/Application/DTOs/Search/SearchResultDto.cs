namespace PharmacyManagementSystem.Application.DTOs.Search
{
    public class SearchResultDto
    {
        public string PharmacyName { get; set; } = string.Empty;
        public string PharmacyAddress { get; set; } = string.Empty;
        public string? PharmacyPhone { get; set; }
        public int MedicineId { get; set; }
        public int PharmacyId { get; set; }
        public double? DistanceInKm { get; set; }

        public string MedicineName { get; set; } = string.Empty;
        public int QuantityAvailable { get; set; }
        public decimal Price { get; set; }
    }
}
