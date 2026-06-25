using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Interfaces.Repostiories
{
    public interface IMedicineStockRepository
        : IGenericRepository<MedicineStock>
    {
        Task<List<MedicineStock>> GetStockByPharmacyWithDetailsAsync(int pharmacyId);
        Task<MedicineStock?> GetStockWithDetailsAsync(int pharmacyId,int medicineId);
    }
}
