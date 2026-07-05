using System.ComponentModel.DataAnnotations;

namespace PharmacyManagementSystem.Application.DTOs.Auth
{
    public class RegisterRequestDto
    {
        [Required(ErrorMessage = "Full name is required")]
        [MaxLength(100,ErrorMessage = "Full name cannot exceed 100 characters")]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required")]
        [MinLength(6,ErrorMessage = "Password must be at least 6 characters")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "City is required")]
        [MaxLength(50,ErrorMessage = "City cannot exceed 50 characters")]
        public string City { get; set; } = string.Empty;

        [Required(ErrorMessage = "Role is required")]
        [RegularExpression("^(PATIENT|PHARMACYADMIN|SUPERADMIN)$",
            ErrorMessage = "Role must be PATIENT, PHARMACYADMIN, or SUPERADMIN")]
        public string Role { get; set; } = string.Empty;
    }
}
