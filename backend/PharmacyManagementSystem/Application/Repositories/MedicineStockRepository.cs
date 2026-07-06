using LibrarySystemAPIs.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Repositories
{
    public class MedicineStockRepository : GenericRepository<MedicineStock>,
        IMedicineStockRepository
    {
        public MedicineStockRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<MedicineStock>> GetAllStocksWithDetailsAsync()
        {
            return await _dbSet
                .Include(ms => ms.Medicine)
                .ToListAsync() ;
        }

        public async Task<List<MedicineStock>> GetStockByPharmacyWithDetailsAsync(int pharmacyId)
        {
            return await _dbSet
                .Include(ms => ms.Medicine)
                .Where(ms => ms.PharmacyId == pharmacyId)
                .ToListAsync();
        }

        public async Task<MedicineStock?> GetStockWithDetailsAsync(int pharmacyId,int medicineId)
        {
            return await _dbSet
                .Include(ms => ms.Medicine)
                .FirstOrDefaultAsync(ms => ms.PharmacyId == pharmacyId && ms.MedicineId == medicineId);
        }

        public async Task<List<MedicineStock>> GetAvailableStocksByMedicineNameAsync(string tradeName)
        {
            return await _dbSet
                .Include(ms => ms.Medicine)
                .Include(ms => ms.Pharmacy)
                .Where(ms => ms.Medicine != null &&
                             ms.Medicine.TradeName.ToLower().Contains(tradeName.ToLower()) &&
                             ms.QuantityAvailable > 0)
                .OrderBy(ms => ms.Pharmacy.Name)
                .ToListAsync();
        }
    }
}
