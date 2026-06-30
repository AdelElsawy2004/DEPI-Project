using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Application.Mappers;

namespace PharmacyManagementSystem.Application.Services
{
    public class MedicineStockService : IMedicineStockService
    {
        private readonly IMedicineStockRepository _stockRepo ;
        public MedicineStockService(IMedicineStockRepository stockRepo)
        {
            _stockRepo = stockRepo ;
        }

        public async Task<List<MedicineStockResponseDto>> GetAllStockAsync()
        {
            var stocks = await _stockRepo.GetAllStocksWithDetailsAsync() ;
            return stocks.Select(s => s.ToResponseDto()).ToList();
        }

        public async Task<List<MedicineStockResponseDto>> GetStockByPharmacyIdAsync(int pharmacyId)
        {
            var stocks = await _stockRepo.GetStockByPharmacyWithDetailsAsync(pharmacyId);
            return stocks.Select(s => s.ToResponseDto()).ToList();
        }

        public async Task<MedicineStockResponseDto?> GetStockDetailsAsync(int pharmacyId,int medicineId)
        {
            var stock = await _stockRepo.GetStockWithDetailsAsync(pharmacyId,medicineId);
            return stock?.ToResponseDto();
        }

        public async Task<MedicineStockResponseDto> AddOrUpdateStockAsync(MedicineStockRequestDto dto)
        {
            var existingStock = await _stockRepo.GetStockWithDetailsAsync(dto.PharmacyId,dto.MedicineId);

            if(existingStock != null)
            {
                dto.UpdateEntity(existingStock);
                _stockRepo.Update(existingStock);
                await _stockRepo.SaveAsync();
                return existingStock.ToResponseDto();
            }

            var newStock = dto.ToEntity();
            await _stockRepo.AddAsync(newStock);
            await _stockRepo.SaveAsync();

            var savedStock = await _stockRepo.GetStockWithDetailsAsync(newStock.PharmacyId,newStock.MedicineId);
            return savedStock?.ToResponseDto() ?? newStock.ToResponseDto();
        }

        public async Task<bool> DeleteStockAsync(int pharmacyId,int medicineId)
        {
            var stock = await _stockRepo.GetStockWithDetailsAsync(pharmacyId,medicineId);
            if(stock == null) return false;

            _stockRepo.Delete(stock);
            await _stockRepo.SaveAsync();
            return true;
        }
    }
}
