namespace PharmacyManagementSystem.Application.DTOs.Search
{
    public class PatientSearchRequestDto
    {
        public string TradeName { get; set; } = string.Empty;
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
    }
}
