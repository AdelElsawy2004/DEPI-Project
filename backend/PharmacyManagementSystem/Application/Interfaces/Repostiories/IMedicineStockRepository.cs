using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Interfaces.Repostiories
{
    public interface IMedicineStockRepository
        : IGenericRepository<MedicineStock>
    {
        public Task<List<MedicineStock>> GetStockByPharmacyWithDetailsAsync(int pharmacyId);
        public Task<MedicineStock?> GetStockWithDetailsAsync(int pharmacyId,int medicineId);
        public Task<List<MedicineStock>> GetAllStocksWithDetailsAsync() ;
    }
}
