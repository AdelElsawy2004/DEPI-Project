using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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

        public AuthController(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IJwtService jwtService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _jwtService = jwtService;
        }

        // POST: api/Auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto model)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var existingUser = await _userManager.FindByEmailAsync(model.Email);
            if(existingUser != null)
                return BadRequest(new { Message = "Email is already registered" });

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

            await _userManager.AddToRoleAsync(user,role);

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

        // POST: api/Auth/login
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

    }
}
