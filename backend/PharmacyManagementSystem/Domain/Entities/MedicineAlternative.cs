using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace PharmacyManagementSystem.Domain.Entities
{
    public class MedicineAlternative
    {
        public int Id { get ; set ;}
        public int MedicineId { get ; set ;}
        public string? Notes { get ; set ;}
        public int AlternativeMedicineId { get ; set ;}
        
        public Medicine Medicine { get ; set ;}
    }
}
