using System.ComponentModel.DataAnnotations;

namespace PharmacyManagementSystem.Application.DTOs.Auth
{
    public class RegisterPharmacyAdminDto
    {
        // ========== REQUIRED ==========

        [Required(ErrorMessage = "Full name is required")]
        [MaxLength(100,ErrorMessage = "Full name cannot exceed 100 characters")]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required")]
        [MinLength(6,ErrorMessage = "Password must be at least 6 characters")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "Pharmacy name is required")]
        [MaxLength(100,ErrorMessage = "Pharmacy name cannot exceed 100 characters")]
        public string PharmacyName { get; set; } = string.Empty;

        [Required(ErrorMessage = "License number is required")]
        [MaxLength(50,ErrorMessage = "License number cannot exceed 50 characters")]
        public string LicenseNumber { get; set; } = string.Empty;

        // ========== OPTIONAL ==========

        [Phone(ErrorMessage = "Invalid phone number format")]
        public string? PhoneNumber { get; set; }

        [MaxLength(200,ErrorMessage = "Address cannot exceed 200 characters")]
        public string? Address { get; set; }
    }
}
