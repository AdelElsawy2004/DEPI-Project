namespace PharmacyManagementSystem.Domain.Entities
{
    public class MedicineStock
    {
        public int Id { get ; set ;}
        public int PharmacyId { get ; set ;}
        public int MedicineId { get ; set ;}
        public int QuantityAvailable { get ; set ;}
        public decimal Price { get ; set ;}
        public DateTime? ExpiryDate { get ; set ;}
        public DateTime LastUpdated { get ; set ;} = DateTime.UtcNow ;

        // Computed
        public bool IsAvailable => QuantityAvailable > 0 ;

        // Navigation
        public Pharmacy Pharmacy { get ; set ;} = null! ;
        public Medicine Medicine { get ; set ;} = null! ;
    }
}
