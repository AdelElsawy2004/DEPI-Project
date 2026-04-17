using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Domain.Configurations
{
    public class MedicineStockConfiguration : IEntityTypeConfiguration<MedicineStock>
    {
        public void Configure(EntityTypeBuilder<MedicineStock> builder)
        {
            builder.HasKey(ms => ms.Id) ;

            builder.HasIndex(ms => new {ms.PharmacyId, ms.MedicineId})
                .IsUnique() ;

            builder.Property(ms => ms.Price)
                .HasColumnType("decimal(7, 2)") ;

            builder.Ignore(ms => ms.IsAvailable) ; // Computed

            builder.HasOne(ms => ms.Pharmacy)
                .WithMany(ph => ph.MedicineStocks)
                .HasForeignKey(ms => ms.PharmacyId)
                .OnDelete(DeleteBehavior.Cascade) ; // Argumentable

            builder.HasOne(ms => ms.Medicine) // Argumentable
                .WithMany(md => md.MedicineStocks) // Argumentable
                .HasForeignKey(ms => ms.MedicineId)
                .OnDelete(DeleteBehavior.Cascade) ; // Argumentable


        }
    }
}
