namespace PharmacyManagementSystem.Application.DTOs.Reservation.Pharmacist
{
    public class PharmacistReservationResponseDto
    {
        public int Id { get; set; }
        public string PatientName { get; set; } = string.Empty;
        public string MedicineName { get; set; } = string.Empty;
        public int MedicineQuantity { get; set; }
        public string Status { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime ExpiresAt { get; set; }
        public string Notes { get; set; } = string.Empty;
    }
}
