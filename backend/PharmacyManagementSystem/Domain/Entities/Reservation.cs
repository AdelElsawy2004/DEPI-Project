namespace PharmacyManagementSystem.Domain.Entities
{
    public class Reservation
    {
        public int Id { get ; set ;}
        public int PatientId { get ; set ;}
        public int MedicineId { get ; set ;}
        public int PharmacyId { get ; set ;}
        public int Quantity { get ; set ;}
        public ReservationStatus Status { get ; set ;} = ReservationStatus.Pending ; // Enum
        public DateTime CreatedAt { get ; set ;}
        public DateTime ExpiresAt { get ; set ;}
        public string Notes { get ; set ;} = String.Empty ;

        // Navigation
        // Patient
        public Medicine Medicine { get ; set ;}
        public Pharmacy Pharmacy { get ; set ;}
    }

    public enum ReservationStatus
    {
        Pending,
        Accepted,
        Rejected,
        Cancelled,
        PickedUp
    }
}
