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

            // ========== SEED DATA (10 RECORDS) ==========
            builder.HasData(
                new MedicineCategory { Id = 1,Name = "Antibiotics",Description = "Treatments for bacterial infections" },
                new MedicineCategory { Id = 2,Name = "Analgesics & Pain Relief",Description = "Pain relievers and fever reducers" },
                new MedicineCategory { Id = 3,Name = "Antihistamines",Description = "Allergy and hay fever treatments" },
                new MedicineCategory { Id = 4,Name = "Cardiovascular",Description = "Heart and blood pressure medications" },
                new MedicineCategory { Id = 5,Name = "Antidiabetics",Description = "Blood sugar management and diabetes treatments" },
                new MedicineCategory { Id = 6,Name = "Gastrointestinal",Description = "Digestive system and stomach treatments" },
                new MedicineCategory { Id = 7,Name = "Respiratory",Description = "Asthma, cough, and breathing treatments" },
                new MedicineCategory { Id = 8,Name = "Dermatologicals",Description = "Skin condition creams and ointments" },
                new MedicineCategory { Id = 9,Name = "Vitamins & Supplements",Description = "Nutritional and immune support" },
                new MedicineCategory { Id = 10,Name = "Antivirals",Description = "Viral infection treatments" }
            );

        }
    }
}
