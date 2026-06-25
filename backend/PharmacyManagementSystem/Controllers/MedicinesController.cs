using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Services;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicinesController : ControllerBase
    {
        private readonly IMedicineService _medicineService ;

        public MedicinesController(IMedicineService medicineService)
        {
            _medicineService = medicineService ;
        }

        // GET: api/medicines
        [HttpGet]
        public async Task<ActionResult<List<MedicineResponseDto>>> GetAll()
        {
            var medicines = await _medicineService.GetAllMedicinesAsync() ;
            return Ok(medicines) ;
        }

        // GET: api/medicines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineResponseDto?>> GetById(int id)
        {
            var medicine = await _medicineService.GetMedicineByIdAsync(id) ;
            if (medicine == null) return NotFound() ;

            return Ok(medicine) ;
        }

        // POST: api/medicines
        [HttpPost]
        public async Task<ActionResult<MedicineResponseDto>> Create(MedicineRequestDto dto)
        {
            var createdMedicine = await _medicineService.CreateMedicineAsync(dto) ;
            return CreatedAtAction(nameof(GetById), new {id = createdMedicine.Id}, createdMedicine) ;
        }

        // PUT: api/medicines/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, MedicineRequestDto dto)
        {
            var result = await _medicineService.UpdateMedicineAsync(id, dto) ;
            if (!result) return NotFound() ;

            return NoContent() ;
        }

        // DELETE: api/medicines/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var result = await _medicineService.DeleteMedicineAsync(id) ;
            if (!result) return NotFound() ;

            return NoContent() ;
        }
    }
}
