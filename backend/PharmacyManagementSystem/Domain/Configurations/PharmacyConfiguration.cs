using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Domain.Configurations
{
    public class PharmacyConfiguration : IEntityTypeConfiguration<Pharmacy>
    {
        public void Configure(EntityTypeBuilder<Pharmacy> builder)
        {
            builder.HasKey(ph => ph.Id) ;

            builder.Property(ph => ph.Name)
                .IsRequired(true)
                .HasMaxLength(50) ;

            builder.Property(ph => ph.Address)
                .IsRequired(true)
                .HasMaxLength(100) ;

            builder.Property(ph => ph.City)
                .IsRequired(true)
                .HasMaxLength(50) ;

            builder.Property(ph => ph.Phone)
                .HasMaxLength(20) ;

            builder.HasIndex(ph => ph.Name) ;
            builder.HasIndex(ph => ph.City) ;
        }
    }
}
