using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Interfaces.Repostiories
{
    public interface IReservationRepository : IGenericRepository<Reservation>
    {
        // PharmacyAdmin
        public Task<List<Reservation>> GetReservationsByPharmacyIdAsync(int pharmacyId);

        // Patient
        Task<List<Reservation>> GetReservationsByPatientIdAsync(string patientId);
        Task<Reservation?> GetReservationByIdWithDetailsAsync(int id);
    }
}
