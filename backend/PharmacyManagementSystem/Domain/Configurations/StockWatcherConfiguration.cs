using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Domain.Configurations
{
    public class StockWatcherConfiguration :
        IEntityTypeConfiguration<StockWatcher>
    {
        public void Configure(EntityTypeBuilder<StockWatcher> builder)
        {
            builder.HasKey(sw => sw.Id) ;

            builder
            .HasIndex(sw => new {sw.PatientId, sw.MedicineId, sw.PharmacyId})
            .IsUnique() ;

            builder.HasOne(sw => sw.Medicine)
                .WithMany(md => md.StockWatchers)
                .HasForeignKey(sw => sw.MedicineId)
                .OnDelete(DeleteBehavior.Cascade) ;

            builder.HasOne(sw => sw.Pharmacy)
                .WithMany(ph => ph.StockWatchers)
                .HasForeignKey(sw => sw.PharmacyId)
                .OnDelete(DeleteBehavior.Cascade) ;
        }
    }
}
