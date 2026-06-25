using LibrarySystemAPIs.Infrastructure.Data;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Repositories
{
    public class MedicineRepository : GenericRepository<Medicine>
        , IMedicineRepository
    {
        public MedicineRepository(AppDbContext context) : base(context)
        {

        }

    }
}
