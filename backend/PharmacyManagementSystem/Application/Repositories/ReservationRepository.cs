using LibrarySystemAPIs.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Repositories
{
    public class ReservationRepository : GenericRepository<Reservation>
        , IReservationRepository
    {

        public ReservationRepository(AppDbContext context) : base(context)
        {

        }

        public async Task<List<Reservation>> GetReservationsByPharmacyIdAsync(int pharmacyId)
        {
            return await _dbSet
                .Include(r => r.Medicine)
                .Where(r => r.PharmacyId == pharmacyId)
                .OrderByDescending(r => r.CreatedAt)
                .ToListAsync();
        }
    }
}
