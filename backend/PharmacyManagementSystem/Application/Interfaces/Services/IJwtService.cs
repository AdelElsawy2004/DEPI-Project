using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface IJwtService
    {
        public string GenerateJwtToken(ApplicationUser user) ;
        public string GenerateRefreshToken() ;
    }
}
