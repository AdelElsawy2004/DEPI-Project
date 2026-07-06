namespace PharmacyManagementSystem.Application.DTOs.Reservation.Patient
{
    public class MyReservationsResponseDto
    {
        public List<PatientReservationResponseDto> Reservations { get; set; } = new List<PatientReservationResponseDto>();
        //public int TotalCount => Reservations.Count;

        /*

        // Optional: Group by status for frontend tabs
        public int PendingCount => Reservations.Count(r => r.Status == "Pending");
        public int ConfirmedCount => Reservations.Count(r => r.Status == "Confirmed");
        public int RejectedCount => Reservations.Count(r => r.Status == "Rejected");
        public int CancelledCount => Reservations.Count(r => r.Status == "Cancelled");
        public int PickedUpCount => Reservations.Count(r => r.Status == "PickedUp");
        */
    }
}
