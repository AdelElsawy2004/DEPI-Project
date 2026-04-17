using Microsoft.AspNetCore.Identity;

namespace PharmacyManagementSystem.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get ; set ;}
        public string City { get ; set ;}
        public DateTime CreatedAt { get ; set ;}
        public bool IsActive { get ; set ;}
    }
}
