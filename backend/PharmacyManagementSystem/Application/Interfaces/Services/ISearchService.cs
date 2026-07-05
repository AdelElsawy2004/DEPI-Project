using PharmacyManagementSystem.Application.DTOs.Search;

namespace PharmacyManagementSystem.Application.Interfaces.Services
{
    public interface ISearchService
    {
        Task<SearchResponseDto> SearchMedicineAsync(PatientSearchRequestDto request);
    }
}
