using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Services;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineStockController : ControllerBase
    {
        private readonly IMedicineStockService _stockService ;

        public MedicineStockController(IMedicineStockService stockService)
        {
            _stockService = stockService ;
        }

        // GET: api/MedicineStock
        [HttpGet]
        public async Task<ActionResult<List<MedicineStockResponseDto>>> GetAll()
        {
            var stocks = await _stockService.GetAllStockAsync();
            return Ok(stocks);
        }

        // GET: api/MedicineStock/pharmacy/5
        [HttpGet("pharmacy/{pharmacyId}")]
        public async Task<ActionResult<List<MedicineStockResponseDto>>> GetByPharmacy(int pharmacyId)
        {
            var stocks = await _stockService.GetStockByPharmacyIdAsync(pharmacyId);
            return Ok(stocks);
        }

        // GET: api/MedicineStock/5/12
        [HttpGet("{pharmacyId}/{medicineId}")]
        public async Task<ActionResult<MedicineStockResponseDto>> GetDetails(int pharmacyId,int medicineId)
        {
            var stock = await _stockService.GetStockDetailsAsync(pharmacyId,medicineId);
            if(stock == null) return NotFound();

            return Ok(stock);
        }

        // POST: api/MedicineStock
        [HttpPost]
        public async Task<ActionResult<MedicineStockResponseDto>> AddOrUpdate(MedicineStockRequestDto dto)
        {
            var result = await _stockService.AddOrUpdateStockAsync(dto);
            return Ok(result);
        }

        // DELETE: api/MedicineStock/5/12
        [HttpDelete("{pharmacyId}/{medicineId}")]
        public async Task<ActionResult> Delete(int pharmacyId,int medicineId)
        {
            var result = await _stockService.DeleteStockAsync(pharmacyId,medicineId);
            if(!result) return NotFound();

            return NoContent();
        }
    }
}
