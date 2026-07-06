namespace PharmacyManagementSystem.Application.DTOs.Auth
{
    public class PatientProfileDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }
}