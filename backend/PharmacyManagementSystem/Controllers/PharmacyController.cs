using System.Security.Claims;
using LibrarySystemAPIs.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PharmacyController : ControllerBase
    {
        private readonly IPharmacyService _pharmacyService ;
        private readonly AppDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public PharmacyController(IPharmacyService pharmacyService, AppDbContext context, UserManager<ApplicationUser> userManager)
        {
            _pharmacyService = pharmacyService ;
            _context = context;
            _userManager = userManager;
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

        // PUT: api/Pharmacies/me/location
        [Authorize(Roles = "PHARMACYADMIN")]
        [HttpPut("me/location")]
        public async Task<ActionResult> UpdateMyLocation([FromBody] PharmacyLocationRequestDto dto)
        {
            if(dto.Latitude < -90 || dto.Latitude > 90)
                return BadRequest(new { Message = "Latitude must be between -90 and 90." });

            if(dto.Longitude < -180 || dto.Longitude > 180)
                return BadRequest(new { Message = "Longitude must be between -180 and 180." });

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if(string.IsNullOrWhiteSpace(userId))
                return Unauthorized(new { Message = "Authenticated user not found." });

            var user = await _userManager.FindByIdAsync(userId);
            if(user == null)
                return Unauthorized(new { Message = "Authenticated user not found." });

            if(user.PharmacyId == null)
                return BadRequest(new { Message = "No linked pharmacy was found for this account." });

            var pharmacy = await _context.Pharmacies.FindAsync(user.PharmacyId.Value);
            if(pharmacy == null)
                return BadRequest(new { Message = "Linked pharmacy was not found." });

            pharmacy.latitude = dto.Latitude;
            pharmacy.Longitude = dto.Longitude;
            await _context.SaveChangesAsync();

            return Ok(new { Message = "Pharmacy location updated successfully." });
        }
    }
}
