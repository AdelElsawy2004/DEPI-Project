namespace PharmacyManagementSystem.Application.DTOs.Reservation.Patient
{
    public class PatientReservationResponseDto
    {
        public int Id { get; set; }
        public string MedicineName { get; set; } = string.Empty;
        public string PharmacyName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public string Status { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime ExpiresAt { get; set; }

        // Frontend uses this to show/hide Cancel button
        //public bool CanCancel => Status != "Cancelled" && Status != "PickedUp" && Status != "Rejected";
    }
}
