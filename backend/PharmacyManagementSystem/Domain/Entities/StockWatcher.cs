namespace PharmacyManagementSystem.Domain.Entities
{
    public class StockWatcher
    {
        public int Id { get ; set ;}
        public int PatientId { get ; set ;}
        public int MedicineId { get ; set ;}
        public int? PharmacyId { get ; set ;} // null means "any pharmacy"
        public DateTime CreatedAt { get ; set ;}

        // Navigation
        // Patient
        public Medicine Medicine { get ; set ;}
        public Pharmacy? Pharmacy { get ; set ;}
    }
}
