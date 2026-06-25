namespace PharmacyManagementSystem.Application.DTOs
{
    public class MedicineRequestDto
    {
        public string TradeName { get; set; } = string.Empty;
        public string ActiveIngredient { get; set; } = string.Empty;
        public string? Manufactrer { get; set; }
        public string Form { get; set; } = string.Empty;
        public string Strength { get; set; } = string.Empty;
        public bool RequiresPrescription { get; set; }
        public int? CategoryId { get; set; }
    }
}
