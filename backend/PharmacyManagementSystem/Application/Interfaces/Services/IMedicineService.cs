using PharmacyManagementSystem.Application.DTOs;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface IMedicineService
    {
        Task<List<MedicineResponseDto>> GetAllMedicinesAsync();
        Task<MedicineResponseDto?> GetMedicineByIdAsync(int id);
        Task<MedicineResponseDto> CreateMedicineAsync(MedicineRequestDto dto);
        Task<bool> UpdateMedicineAsync(int id,MedicineRequestDto dto);
        Task<bool> DeleteMedicineAsync(int id);
    }
}
