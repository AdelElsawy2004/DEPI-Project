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

        #region PharmacyAdmin
        public async Task<List<Reservation>> GetReservationsByPharmacyIdAsync(int pharmacyId)
        {
            return await _dbSet
                .Include(r => r.Medicine)
                .Where(r => r.PharmacyId == pharmacyId)
                .OrderByDescending(r => r.CreatedAt)
                .ToListAsync();
        }
        #endregion

        #region Patient
        public async Task<List<Reservation>> GetReservationsByPatientIdAsync(string patientId)
        {
            return await _dbSet
                .Include(r => r.Medicine)
                .Include(r => r.Pharmacy)
                .Where(r => r.PatientId == patientId)
                .OrderByDescending(r => r.CreatedAt)
                .ToListAsync();
        }

        public async Task<Reservation?> GetReservationByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(r => r.Medicine)
                .Include(r => r.Pharmacy)
                .FirstOrDefaultAsync(r => r.Id == id);
        }
        #endregion
    }
}
