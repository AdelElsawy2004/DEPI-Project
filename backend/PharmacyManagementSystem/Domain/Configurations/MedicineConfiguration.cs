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

            builder.HasData(
                new Medicine { Id = 1,TradeName = "Augmentin",ActiveIngredient = "Amoxicillin",Form = "Tablet",Strength = "1g",RequiresPrescription = true,CategoryId = 1 },
                new Medicine { Id = 2,TradeName = "Panadol Extra",ActiveIngredient = "Paracetamol",Form = "Tablet",Strength = "500mg",RequiresPrescription = false,CategoryId = 2 },
                new Medicine { Id = 3,TradeName = "Zyrtec",ActiveIngredient = "Cetirizine",Form = "Tablet",Strength = "10mg",RequiresPrescription = false,CategoryId = 3 },
                new Medicine { Id = 4,TradeName = "Zovirax",ActiveIngredient = "Acyclovir",Form = "Cream",Strength = "5%",RequiresPrescription = false,CategoryId = 4 },
                new Medicine { Id = 5,TradeName = "Concor",ActiveIngredient = "Bisoprolol",Form = "Tablet",Strength = "5mg",RequiresPrescription = true,CategoryId = 5 },
                new Medicine { Id = 6,TradeName = "Amaryl",ActiveIngredient = "Glimepiride",Form = "Tablet",Strength = "2mg",RequiresPrescription = true,CategoryId = 6 },
                new Medicine { Id = 7,TradeName = "Antinal",ActiveIngredient = "Nifuroxazide",Form = "Capsule",Strength = "200mg",RequiresPrescription = false,CategoryId = 7 },
                new Medicine { Id = 8,TradeName = "Betnovate",ActiveIngredient = "Betamethasone",Form = "Ointment",Strength = "0.1%",RequiresPrescription = true,CategoryId = 8 },
                new Medicine { Id = 9,TradeName = "Ventolin",ActiveIngredient = "Salbutamol",Form = "Inhaler",Strength = "100mcg",RequiresPrescription = true,CategoryId = 9 },
                new Medicine { Id = 10,TradeName = "Centrum",ActiveIngredient = "Multivitamins",Form = "Tablet",Strength = "Adult Formula",RequiresPrescription = false,CategoryId = 10 }
            );
        }
    }
}
