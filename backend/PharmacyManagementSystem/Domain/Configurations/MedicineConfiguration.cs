using Microsoft.EntityFrameworkCore;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Domain.Configurations
{
    public class MedicineConfiguration : IEntityTypeConfiguration<Medicine>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Medicine> builder)
        {
            builder.HasKey(md => md.Id) ;

            builder.Property(md => md.TradeName)
                .IsRequired(true)
                .HasMaxLength(100) ;

            builder.Property(md => md.ActiveIngredient)
                .IsRequired(true)
                .HasMaxLength(100) ;

            builder.Property(md => md.Form)
                .IsRequired(true)
                .HasMaxLength(30) ;

            builder.Property(md => md.Strength)
                .HasMaxLength(20) ;

            builder.HasIndex(md => md.TradeName) ;
            builder.HasIndex(md => md.ActiveIngredient) ;

            builder.HasOne(md => md.Category)
                .WithMany(ct => ct.Medicines)
                .HasForeignKey(md => md.CategoryId)
                .OnDelete(DeleteBehavior.SetNull) ;
        }
    }
}
