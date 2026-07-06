using System.Security.Claims;
using LibrarySystemAPIs.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmacyManagementSystem.Application.DTOs.Auth;
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

        [HttpGet]
        public async Task<ActionResult<List<PharmacyResponseDto>>> GetAll()
        {
            var pharmacies = await _pharmacyService.GetAllPharmaciesAsync();
            return Ok(pharmacies);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PharmacyResponseDto>> GetById(int id)
        {
            var pharmacy = await _pharmacyService.GetPharmacyByIdAsync(id);
            if(pharmacy == null) return NotFound();

            return Ok(pharmacy);
        }

        [HttpPost]
        public async Task<ActionResult<PharmacyResponseDto>> Create(PharmacyRequestDto dto)
        {
            var createdPharmacy = await _pharmacyService.CreatePharmacyAsync(dto);
            return CreatedAtAction(nameof(GetById),new { id = createdPharmacy.Id },createdPharmacy);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id,PharmacyRequestDto dto)
        {
            var result = await _pharmacyService.UpdatePharmacyAsync(id,dto);
            if(!result) return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var result = await _pharmacyService.DeletePharmacyAsync(id);
            if(!result) return NotFound();

            return NoContent();
        }

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

        [HttpGet("me/profile")]
[Authorize(Roles = "PHARMACYADMIN")]
public async Task<ActionResult<PharmacyAdminProfileDto>> GetMyProfile()
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

    if (string.IsNullOrWhiteSpace(userId))
        return Unauthorized();

    var user = await _userManager.FindByIdAsync(userId);

    if (user == null)
        return Unauthorized();

    Pharmacy? pharmacy = null;

    if (user.PharmacyId.HasValue)
    {
        pharmacy = await _context.Pharmacies
            .AsNoTracking()
            .FirstOrDefaultAsync(p => p.Id == user.PharmacyId.Value);
    }

    return Ok(new PharmacyAdminProfileDto
    {
        FullName = user.FullName,
        Email = user.Email ?? string.Empty,
        PharmacyName = pharmacy?.Name ?? string.Empty,
        City = pharmacy?.City ?? user.City,        Address = pharmacy?.Address,
        Phone = pharmacy?.Phone,
        PharmacyId = user.PharmacyId,
        CreatedAt = user.CreatedAt
    });
}
    }
}
