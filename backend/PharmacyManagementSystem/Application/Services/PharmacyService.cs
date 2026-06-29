using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Application.Interfaces.Services;
using PharmacyManagementSystem.Application.Mappers;

namespace PharmacyManagementSystem.Application.Services
{
    public class PharmacyService : IPharmacyService
    {
        private readonly IPharmacyRepository _pharmacyRepo ;

        public PharmacyService(IPharmacyRepository pharmacyRepo)
        {
            _pharmacyRepo = pharmacyRepo ;
        }

        public async Task<List<PharmacyResponseDto>> GetAllPharmaciesAsync()
        {
            var pharmacies = await _pharmacyRepo.GetAllAsync() ;
            return pharmacies.Select(p => p.ToResponseDto()).ToList() ;
        }

        public async Task<PharmacyResponseDto?> GetPharmacyByIdAsync(int id)
        {
            var pharmacy = await _pharmacyRepo.GetByIdAsync(id) ;

            return pharmacy?.ToResponseDto() ;
        }

        public async Task<PharmacyResponseDto> CreatePharmacyAsync(PharmacyRequestDto dto)
        {
            var pharmacy = dto.ToEntity();
            await _pharmacyRepo.AddAsync(pharmacy);
            await _pharmacyRepo.SaveAsync();
            return pharmacy.ToResponseDto();
        }

        public async Task<bool> UpdatePharmacyAsync(int id,PharmacyRequestDto dto)
        {
            var pharmacy = await _pharmacyRepo.GetByIdAsync(id);
            if(pharmacy == null) return false;

            dto.UpdateEntity(pharmacy);
            _pharmacyRepo.Update(pharmacy);
            await _pharmacyRepo.SaveAsync();
            return true;
        }

        public async Task<bool> DeletePharmacyAsync(int id)
        {
            var pharmacy = await _pharmacyRepo.GetByIdAsync(id);
            if(pharmacy == null) return false;

            _pharmacyRepo.Delete(pharmacy);
            await _pharmacyRepo.SaveAsync();
            return true;
        }
    }
}
