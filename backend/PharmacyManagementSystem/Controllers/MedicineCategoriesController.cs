using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Services;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineCategoriesController : ControllerBase
    {
        private readonly IMedicineCategoryService _categoryService ;

        public MedicineCategoriesController(IMedicineCategoryService categoryService)
        {
            _categoryService = categoryService ;
        }

        // GET: api/MedicineCategories
        [HttpGet]
        public async Task<ActionResult<List<MedicineCategoryResponseDto>>> GetAll()
        {
            var categories = await _categoryService.GetAllCategoriesAsync() ;
            return Ok(categories) ;
        }

        // GET: api/MedicineCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineCategoryResponseDto>> GetById(int id)
        {
            var category = await _categoryService.GetCategoryByIdAsync(id) ;
            if (category == null) return NotFound() ;

            return Ok(category) ;
        }

        // POST: api/MedicineCategories
        [HttpPost]
        public async Task<ActionResult<MedicineCategoryResponseDto>> Create(MedicineCategoryRequestDto dto)
        {
            var createdCategory = await _categoryService.CreateCategoryAsync(dto) ;
            return CreatedAtAction(nameof(GetById), new {id = createdCategory.Id}, createdCategory) ;
        }

        // PUT: api/MedicineCategories
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, MedicineCategoryRequestDto dto)
        {
            var result = await _categoryService.UpdateCategoryAsync(id, dto) ;
            if (!result) return NotFound() ;

            return NoContent() ;
        }

        // DELETE: api/MedicineCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var result = await _categoryService.DeleteCategoryAsync(id) ;
            if (!result) return NotFound() ;

            return NoContent() ;
        }
    }
}
