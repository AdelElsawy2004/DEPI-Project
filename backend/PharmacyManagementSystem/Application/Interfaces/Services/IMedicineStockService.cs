using PharmacyManagementSystem.Application.DTOs;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface IMedicineStockService
    {
        public Task<List<MedicineStockResponseDto>> GetAllStockAsync() ;
        public Task<List<MedicineStockResponseDto>> GetStockByPharmacyIdAsync(int pharmacyId) ;
        public Task<MedicineStockResponseDto?> GetStockDetailsAsync(int pharmacyId,int medicineId) ;
        public Task<MedicineStockResponseDto> AddOrUpdateStockAsync(MedicineStockRequestDto dto) ;
        public Task<bool> DeleteStockAsync(int pharmacyId,int medicineId) ;
    }
}
