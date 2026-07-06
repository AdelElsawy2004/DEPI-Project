using Microsoft.AspNetCore.Identity;

namespace PharmacyManagementSystem.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public bool IsActive { get; set; }

        public string? PharmacyName { get; set; }
        public string? LicenseNumber { get; set; }
        public string? Address { get; set; }

        public int? PharmacyId { get; set; }
        public Pharmacy? Pharmacy { get; set; }
    }
}
