namespace PharmacyManagementSystem.Domain.Entities
{
    public class Notification
    {
        public int Id { get ; set ;}
        public int UserId { get ; set ;}
        public string Title { get ; set ;} = String.Empty ;
        public string Body { get ; set ;} = String.Empty ;
        public NotificationType Type { get ; set ;} // Enum
        public bool IsRead { get ; set ;} = false ;
        public DateTime CreateAt { get ; set ;}
        
        // Navigation
        // User
    }

    public enum NotificationType
    {
        ReservationUpdate,
        StockAlert,
        GenralAnnouncement
    }
}
