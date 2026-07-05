using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs.Search;
using PharmacyManagementSystem.Application.Interfaces.Services;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ISearchService _searchService;

        public SearchController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        // GET /api/Search/medicine?tradeName=Amoxicillin&latitude=30.0444&longitude=31.2357
        [HttpGet("medicine")]
        public async Task<ActionResult<SearchResponseDto>> SearchMedicine(
            [FromQuery] string tradeName,
            [FromQuery] double? latitude,
            [FromQuery] double? longitude)
        {
            if(string.IsNullOrWhiteSpace(tradeName))
            {
                return BadRequest(new { Message = "Trade name is required" });
            }

            if(latitude.HasValue != longitude.HasValue)
            {
                return BadRequest(new { Message = "Both latitude and longitude must be provided together" });
            }

            var request = new PatientSearchRequestDto
            {
                TradeName = tradeName.Trim(),
                Latitude = latitude,
                Longitude = longitude
            };

            var result = await _searchService.SearchMedicineAsync(request);

            return Ok(result);
        }
    }
}
