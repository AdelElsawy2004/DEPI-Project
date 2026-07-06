using LibrarySystemAPIs.Infrastructure.Data;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Repositories
{
    public class MedicineCategoryRepository : GenericRepository<MedicineCategory>
        , IMedicineCategoryRepository
    {
        public MedicineCategoryRepository(AppDbContext context) : base(context) 
        {
        }
    }
}
