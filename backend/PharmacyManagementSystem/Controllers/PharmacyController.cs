using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Services;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PharmacyController : ControllerBase
    {
        private readonly IPharmacyService _pharmacyService ;

        public PharmacyController(IPharmacyService pharmacyService)
        {
            _pharmacyService = pharmacyService ;
        }

        // GET: api/Pharmacies
        [HttpGet]
        public async Task<ActionResult<List<PharmacyResponseDto>>> GetAll()
        {
            var pharmacies = await _pharmacyService.GetAllPharmaciesAsync();
            return Ok(pharmacies);
        }

        // GET: api/Pharmacies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PharmacyResponseDto>> GetById(int id)
        {
            var pharmacy = await _pharmacyService.GetPharmacyByIdAsync(id);
            if(pharmacy == null) return NotFound();

            return Ok(pharmacy);
        }

        // POST: api/Pharmacies
        [HttpPost]
        public async Task<ActionResult<PharmacyResponseDto>> Create(PharmacyRequestDto dto)
        {
            var createdPharmacy = await _pharmacyService.CreatePharmacyAsync(dto);
            return CreatedAtAction(nameof(GetById),new { id = createdPharmacy.Id },createdPharmacy);
        }

        // PUT: api/Pharmacies/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id,PharmacyRequestDto dto)
        {
            var result = await _pharmacyService.UpdatePharmacyAsync(id,dto);
            if(!result) return NotFound();

            return NoContent();
        }

        // DELETE: api/Pharmacies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var result = await _pharmacyService.DeletePharmacyAsync(id);
            if(!result) return NotFound();

            return NoContent();
        }
    }
}
