namespace PharmacyManagementSystem.Domain.Entities
{
    public class Pharmacy
    {
        public int Id { get ; set ;}
        public string Name { get ; set ;} = string.Empty ;
        public string Address { get ; set ;} = string.Empty ;
        public string City { get ; set ;} = string.Empty ;
        public double latitude { get ; set ;}
        public double Longitude { get ; set ;}
        public string? Phone { get ; set ;}
        public bool IsVerified { get ; set ;}

        // Navigation
        public List<MedicineStock> MedicineStocks { get; set; } = new List<MedicineStock>() ;
        public List<Reservation> Reservations { get ; set ;} = new List<Reservation>() ;
        public List<StockWatcher> StockWatchers { get; set; } = new List<StockWatcher>() ;
    }
}
