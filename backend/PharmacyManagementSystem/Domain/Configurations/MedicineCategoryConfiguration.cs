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

            builder.HasData(
                new MedicineCategory { Id = 1,Name = "Antibiotics",Description = "Treatments for bacterial infections" },
                new MedicineCategory { Id = 2,Name = "Analgesics",Description = "Pain relief and fever reducers" },
                new MedicineCategory { Id = 3,Name = "Antihistamines",Description = "Allergy treatments" },
                new MedicineCategory { Id = 4,Name = "Antivirals",Description = "Medications treating viral infections" },
                new MedicineCategory { Id = 5,Name = "Cardiovascular",Description = "Heart and blood pressure medications" },
                new MedicineCategory { Id = 6,Name = "Antidiabetics",Description = "Blood sugar management treatments" },
                new MedicineCategory { Id = 7,Name = "Gastrointestinal",Description = "Stomach and digestion symptom relief" },
                new MedicineCategory { Id = 8,Name = "Dermatologicals",Description = "Skin condition creams and treatments" },
                new MedicineCategory { Id = 9,Name = "Respiratory",Description = "Asthma and cough treatment solutions" },
                new MedicineCategory { Id = 10,Name = "Vitamins & Supplements",Description = "Nutritional support and immune system boosters" }
            );

        }
    }
}
