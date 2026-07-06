using LibrarySystemAPIs.Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using PharmacyManagementSystem.Application.DTOs.Auth;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IJwtService _jwtService;
        private readonly AppDbContext _context;

        public AuthController(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IJwtService jwtService,
            AppDbContext context)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _jwtService = jwtService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto model)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var existingUser = await _userManager.FindByEmailAsync(model.Email);
            if(existingUser != null)
                return BadRequest(new { Message = "Email is already registered" });

            await using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                var user = new ApplicationUser
                {
                    UserName = model.Email,
                    Email = model.Email,
                    FullName = model.FullName,
                    City = model.City,
                    CreatedAt = DateTime.UtcNow,
                    IsActive = true,
                    EmailConfirmed = true
                };

                var result = await _userManager.CreateAsync(user,model.Password);
                if(!result.Succeeded)
                {
                    var errors = string.Join(", ",result.Errors.Select(e => e.Description));
                    return BadRequest(new { Message = $"Registration failed: {errors}" });
                }

                var role = model.Role.ToUpper();
                if(!await _roleManager.RoleExistsAsync(role))
                {
                    await _roleManager.CreateAsync(new IdentityRole(role));
                }

                var roleResult = await _userManager.AddToRoleAsync(user,role);
                if(!roleResult.Succeeded)
                {
                    var errors = string.Join(", ",roleResult.Errors.Select(e => e.Description));
                    return BadRequest(new { Message = $"Registration failed: {errors}" });
                }

                if(role == "PHARMACYADMIN")
                {
                    if(string.IsNullOrWhiteSpace(model.PharmacyName))
                    {
                        return BadRequest(new { Message = "Pharmacy name is required for pharmacy admin registration." });
                    }

                    var pharmacy = new Pharmacy
                    {
                        Name = model.PharmacyName.Trim(),
                        City = model.City,
                        Address = null,
                        latitude = null,
                        Longitude = null,
                        IsVerified = false
                    };

                    _context.Pharmacies.Add(pharmacy);
                    await _context.SaveChangesAsync();

                    user.PharmacyId = pharmacy.Id;
                    var userUpdateResult = await _userManager.UpdateAsync(user);
                    if(!userUpdateResult.Succeeded)
                    {
                        var errors = string.Join(", ",userUpdateResult.Errors.Select(e => e.Description));
                        return BadRequest(new { Message = $"Registration failed: {errors}" });
                    }
                }

                await transaction.CommitAsync();

                var token = _jwtService.GenerateJwtToken(user);
                var refreshToken = _jwtService.GenerateRefreshToken();

                return Ok(new AuthResponseDto
                {
                    Token = token,
                    RefreshToken = refreshToken,
                    Email = user.Email,
                    FullName = user.FullName,
                    Roles = (await _userManager.GetRolesAsync(user)).ToList(),
                    ExpiresAt = DateTime.UtcNow.AddMinutes(60),
                    IsAuthenticated = true
                });
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto model)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.FindByEmailAsync(model.Email);
            if(user == null || !await _userManager.CheckPasswordAsync(user,model.Password))
                return Unauthorized(new { Message = "Invalid email or password" });

            if(!user.IsActive)
                return Unauthorized(new { Message = "Account is deactivated" });

            var token = _jwtService.GenerateJwtToken(user);
            var refreshToken = _jwtService.GenerateRefreshToken();

            return Ok(new AuthResponseDto
            {
                Token = token,
                RefreshToken = refreshToken,
                Email = user.Email,
                FullName = user.FullName,
                Roles = (await _userManager.GetRolesAsync(user)).ToList(),
                ExpiresAt = DateTime.UtcNow.AddMinutes(60),
                IsAuthenticated = true
            });
        }

        [HttpGet("me/profile")]
[Authorize(Roles = "PATIENT")]
public async Task<ActionResult<PatientProfileDto>> GetMyProfile()
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

    if (string.IsNullOrWhiteSpace(userId))
        return Unauthorized();

    var user = await _userManager.FindByIdAsync(userId);

    if (user == null)
        return Unauthorized();

    return Ok(new PatientProfileDto
    {
        FullName = user.FullName,
        Email = user.Email ?? string.Empty,
        City = user.City,
        CreatedAt = user.CreatedAt
    });
}

    }
}
