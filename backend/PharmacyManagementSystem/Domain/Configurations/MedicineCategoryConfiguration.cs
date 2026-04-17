using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Domain.Configurations
{
    public class MedicineCategoryConfiguration
        : IEntityTypeConfiguration<MedicineCategory>
    {
        public void Configure(EntityTypeBuilder<MedicineCategory> builder)
        {
            builder.HasKey(mc => mc.Id) ;

            builder.Property(mc => mc.Name)
                .IsRequired(true)
                .HasMaxLength(100) ;

            builder.HasIndex(mc => mc.Name)
                .IsUnique() ;
        }
    }
}
