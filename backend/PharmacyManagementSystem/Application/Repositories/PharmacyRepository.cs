using LibrarySystemAPIs.Infrastructure.Data;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Repositories
{
    public class PharmacyRepository : GenericRepository<Pharmacy>
        , IPharmacyRepository
    {
        public PharmacyRepository(AppDbContext context) : base(context)
        {
        }
    }
}
