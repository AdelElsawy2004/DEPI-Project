namespace PharmacyManagementSystem.Application.DTOs
{
    public class MedicineStockResponseDto
    {
        public int PharmacyId { get; set; }
        public int MedicineId { get; set; }
        public int QuantityAvailable { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public DateTime LastUpdated { get; set; }
        public string MedicineName { get; set; } = string.Empty;
    }
}
