using Microsoft.AspNetCore.Identity;

namespace PharmacyManagementSystem.Domain.Entities
{
    public class ApplicationRole : IdentityRole
    {
        public const string Patient = "PATIENT" ;
        public const string PharmacyAdmin = "PHARMACYADMIN" ;
        public const string SuperAdmin = "SUPERADMIN" ;
    }
}
