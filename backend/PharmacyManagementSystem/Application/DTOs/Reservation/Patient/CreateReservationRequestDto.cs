using System.ComponentModel.DataAnnotations;

namespace PharmacyManagementSystem.Application.DTOs.Reservation.Patient
{
    public class CreateReservationRequestDto
    {
        [Required(ErrorMessage = "Pharmacy ID is required")]
        public int PharmacyId { get; set; }

        [Required(ErrorMessage = "Medicine ID is required")]
        public int MedicineId { get; set; }

        [Required(ErrorMessage = "Quantity is required")]
        [Range(1,int.MaxValue,ErrorMessage = "Quantity must be at least 1")]
        public int Quantity { get; set; }
    }
}
