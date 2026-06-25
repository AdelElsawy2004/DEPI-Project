using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Interfaces.Repostiories
{
    public interface IReservationRepository : IGenericRepository<Reservation>
    {
        public Task<List<Reservation>> GetReservationsByPharmacyIdAsync(int pharmacyId);
    }
}
