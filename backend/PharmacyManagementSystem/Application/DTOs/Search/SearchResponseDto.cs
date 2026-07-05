namespace PharmacyManagementSystem.Application.DTOs.Search
{
    public class SearchResponseDto
    {
        public List<SearchResultDto> SearchResults { get; set; } = new List<SearchResultDto>();
        public int TotalResults => SearchResults.Count;
    }
}
