using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Application.Mappers;

namespace PharmacyManagementSystem.Application.Services
{
    public class MedicineService : IMedicineService
    {
        private readonly IMedicineRepository _medicineRepo ;

        public MedicineService(IMedicineRepository medicineRepo)
        {
            _medicineRepo = medicineRepo;
        }

        public async Task<List<MedicineResponseDto>> GetAllMedicinesAsync()
        {
            var medicines = await _medicineRepo.GetAllAsync();
            return medicines.Select(m => m.ToResponseDto()).ToList();
        }

        public async Task<MedicineResponseDto?> GetMedicineByIdAsync(int id)
        {
            var medicine = await _medicineRepo.GetByIdAsync(id);
            return medicine?.ToResponseDto();
        }

        public async Task<MedicineResponseDto> CreateMedicineAsync(MedicineRequestDto dto)
        {
            var medicine = dto.ToEntity();

            await _medicineRepo.AddAsync(medicine);
            _medicineRepo.SaveAsync();

            return medicine.ToResponseDto();
        }

        public async Task<bool> UpdateMedicineAsync(int id,MedicineRequestDto dto)
        {
            var medicine = await _medicineRepo.GetByIdAsync(id);
            if(medicine == null) return false;

            dto.UpdateEntity(medicine);
            _medicineRepo.Update(medicine);
            _medicineRepo.SaveAsync();

            return true;
        }

        public async Task<bool> DeleteMedicineAsync(int id)
        {
            var medicine = await _medicineRepo.GetByIdAsync(id);
            if(medicine == null) return false;

            _medicineRepo.Delete(medicine);
            _medicineRepo.SaveAsync();

            return true;
        }
    }
}
