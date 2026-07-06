namespace PharmacyManagementSystem.Application.DTOs.Auth
{
    public class PharmacyAdminProfileDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PharmacyName { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public int? PharmacyId { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
