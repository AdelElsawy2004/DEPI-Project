namespace PharmacyManagementSystem.Application.DTOs
{
    public class MedicineStockRequestDto
    {
        public int PharmacyId { get; set; }
        public int MedicineId { get; set; }
        public int QuantityAvailable { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
}
