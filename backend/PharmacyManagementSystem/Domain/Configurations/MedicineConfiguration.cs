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

            // ========== SEED DATA(50 RECORDS) ==========
            
            builder.HasData(
                // Antibiotics (Category 1)
                new Medicine { Id = 1,TradeName = "Augmentin",ActiveIngredient = "Amoxicillin/Clavulanic Acid",Manufactrer = "GlaxoSmithKline",Form = "Tablet",Strength = "1g",RequiresPrescription = true,CategoryId = 1 },
                new Medicine { Id = 2,TradeName = "Ciprobay",ActiveIngredient = "Ciprofloxacin",Manufactrer = "Bayer",Form = "Tablet",Strength = "500mg",RequiresPrescription = true,CategoryId = 1 },
                new Medicine { Id = 3,TradeName = "Azithromycin",ActiveIngredient = "Azithromycin",Manufactrer = "Pfizer",Form = "Capsule",Strength = "250mg",RequiresPrescription = true,CategoryId = 1 },
                new Medicine { Id = 4,TradeName = "Doxycycline",ActiveIngredient = "Doxycycline Hyclate",Manufactrer = "Generic",Form = "Capsule",Strength = "100mg",RequiresPrescription = true,CategoryId = 1 },
                new Medicine { Id = 5,TradeName = "Klacid",ActiveIngredient = "Clarithromycin",Manufactrer = "Abbott",Form = "Tablet",Strength = "500mg",RequiresPrescription = true,CategoryId = 1 },

                // Analgesics (Category 2)
                new Medicine { Id = 6,TradeName = "Panadol Extra",ActiveIngredient = "Paracetamol",Manufactrer = "GSK",Form = "Tablet",Strength = "500mg",RequiresPrescription = false,CategoryId = 2 },
                new Medicine { Id = 7,TradeName = "Voltaren",ActiveIngredient = "Diclofenac",Manufactrer = "Novartis",Form = "Tablet",Strength = "50mg",RequiresPrescription = true,CategoryId = 2 },
                new Medicine { Id = 8,TradeName = "Brufen",ActiveIngredient = "Ibuprofen",Manufactrer = "Abbott",Form = "Tablet",Strength = "400mg",RequiresPrescription = false,CategoryId = 2 },
                new Medicine { Id = 9,TradeName = "Mefenamic Acid",ActiveIngredient = "Mefenamic Acid",Manufactrer = "Generic",Form = "Capsule",Strength = "250mg",RequiresPrescription = true,CategoryId = 2 },
                new Medicine { Id = 10,TradeName = "Mobilat",ActiveIngredient = "Flurbiprofen",Manufactrer = "Bayer",Form = "Tablet",Strength = "100mg",RequiresPrescription = true,CategoryId = 2 },

                // Antihistamines (Category 3)
                new Medicine { Id = 11,TradeName = "Zyrtec",ActiveIngredient = "Cetirizine",Manufactrer = "UCB",Form = "Tablet",Strength = "10mg",RequiresPrescription = false,CategoryId = 3 },
                new Medicine { Id = 12,TradeName = "Claritin",ActiveIngredient = "Loratadine",Manufactrer = "Bayer",Form = "Tablet",Strength = "10mg",RequiresPrescription = false,CategoryId = 3 },
                new Medicine { Id = 13,TradeName = "Telfast",ActiveIngredient = "Fexofenadine",Manufactrer = "Sanofi",Form = "Tablet",Strength = "120mg",RequiresPrescription = true,CategoryId = 3 },
                new Medicine { Id = 14,TradeName = "Avamys",ActiveIngredient = "Fluticasone",Manufactrer = "GSK",Form = "Nasal Spray",Strength = "50mcg",RequiresPrescription = true,CategoryId = 3 },
                new Medicine { Id = 15,TradeName = "Rhinocort",ActiveIngredient = "Budesonide",Manufactrer = "AstraZeneca",Form = "Nasal Spray",Strength = "100mcg",RequiresPrescription = true,CategoryId = 3 },

                // Cardiovascular (Category 4)
                new Medicine { Id = 16,TradeName = "Concor",ActiveIngredient = "Bisoprolol",Manufactrer = "Merck",Form = "Tablet",Strength = "5mg",RequiresPrescription = true,CategoryId = 4 },
                new Medicine { Id = 17,TradeName = "Crestor",ActiveIngredient = "Rosuvastatin",Manufactrer = "AstraZeneca",Form = "Tablet",Strength = "10mg",RequiresPrescription = true,CategoryId = 4 },
                new Medicine { Id = 18,TradeName = "Vasocardin",ActiveIngredient = "Amlodipine",Manufactrer = "Pfizer",Form = "Tablet",Strength = "5mg",RequiresPrescription = true,CategoryId = 4 },
                new Medicine { Id = 19,TradeName = "Cozaar",ActiveIngredient = "Losartan",Manufactrer = "Merck",Form = "Tablet",Strength = "50mg",RequiresPrescription = true,CategoryId = 4 },
                new Medicine { Id = 20,TradeName = "Micardis",ActiveIngredient = "Telmisartan",Manufactrer = "Boehringer",Form = "Tablet",Strength = "40mg",RequiresPrescription = true,CategoryId = 4 },

                // Antidiabetics (Category 5)
                new Medicine { Id = 21,TradeName = "Amaryl",ActiveIngredient = "Glimepiride",Manufactrer = "Sanofi",Form = "Tablet",Strength = "2mg",RequiresPrescription = true,CategoryId = 5 },
                new Medicine { Id = 22,TradeName = "Glucophage",ActiveIngredient = "Metformin",Manufactrer = "Merck",Form = "Tablet",Strength = "500mg",RequiresPrescription = true,CategoryId = 5 },
                new Medicine { Id = 23,TradeName = "Januvia",ActiveIngredient = "Sitagliptin",Manufactrer = "Merck",Form = "Tablet",Strength = "100mg",RequiresPrescription = true,CategoryId = 5 },
                new Medicine { Id = 24,TradeName = "Tresiba",ActiveIngredient = "Insulin Degludec",Manufactrer = "Novo Nordisk",Form = "Injection",Strength = "100U",RequiresPrescription = true,CategoryId = 5 },
                new Medicine { Id = 25,TradeName = "NovoRapid",ActiveIngredient = "Insulin Aspart",Manufactrer = "Novo Nordisk",Form = "Injection",Strength = "100U",RequiresPrescription = true,CategoryId = 5 },

                // Gastrointestinal (Category 6)
                new Medicine { Id = 26,TradeName = "Antinal",ActiveIngredient = "Nifuroxazide",Manufactrer = "SEDICO",Form = "Capsule",Strength = "200mg",RequiresPrescription = false,CategoryId = 6 },
                new Medicine { Id = 27,TradeName = "Nexium",ActiveIngredient = "Omeprazole",Manufactrer = "AstraZeneca",Form = "Capsule",Strength = "40mg",RequiresPrescription = true,CategoryId = 6 },
                new Medicine { Id = 28,TradeName = "Motilium",ActiveIngredient = "Domperidone",Manufactrer = "Janssen",Form = "Tablet",Strength = "10mg",RequiresPrescription = true,CategoryId = 6 },
                new Medicine { Id = 29,TradeName = "Colospasmin",ActiveIngredient = "Mebeverine",Manufactrer = "Mepha",Form = "Tablet",Strength = "135mg",RequiresPrescription = true,CategoryId = 6 },
                new Medicine { Id = 30,TradeName = "Gaviscon",ActiveIngredient = "Sodium Alginate",Manufactrer = "Reckitt",Form = "Suspension",Strength = "500mg",RequiresPrescription = false,CategoryId = 6 },

                // Respiratory (Category 7)
                new Medicine { Id = 31,TradeName = "Ventolin",ActiveIngredient = "Salbutamol",Manufactrer = "GSK",Form = "Inhaler",Strength = "100mcg",RequiresPrescription = true,CategoryId = 7 },
                new Medicine { Id = 32,TradeName = "Seretide",ActiveIngredient = "Fluticasone/Salmeterol",Manufactrer = "GSK",Form = "Inhaler",Strength = "250mcg",RequiresPrescription = true,CategoryId = 7 },
                new Medicine { Id = 33,TradeName = "Atrovent",ActiveIngredient = "Ipratropium",Manufactrer = "Boehringer",Form = "Inhaler",Strength = "20mcg",RequiresPrescription = true,CategoryId = 7 },
                new Medicine { Id = 34,TradeName = "Singulair",ActiveIngredient = "Montelukast",Manufactrer = "Merck",Form = "Tablet",Strength = "10mg",RequiresPrescription = true,CategoryId = 7 },
                new Medicine { Id = 35,TradeName = "Tilade",ActiveIngredient = "Nedocromil",Manufactrer = "Aventis",Form = "Inhaler",Strength = "2mg",RequiresPrescription = true,CategoryId = 7 },

                // Dermatologicals (Category 8)
                new Medicine { Id = 36,TradeName = "Betnovate",ActiveIngredient = "Betamethasone",Manufactrer = "GSK",Form = "Ointment",Strength = "0.1%",RequiresPrescription = true,CategoryId = 8 },
                new Medicine { Id = 37,TradeName = "Travocort",ActiveIngredient = "Isoconazole",Manufactrer = "Bayer",Form = "Cream",Strength = "1%",RequiresPrescription = true,CategoryId = 8 },
                new Medicine { Id = 38,TradeName = "Fucidin",ActiveIngredient = "Fusidic Acid",Manufactrer = "Leo Pharma",Form = "Cream",Strength = "2%",RequiresPrescription = true,CategoryId = 8 },
                new Medicine { Id = 39,TradeName = "Protopic",ActiveIngredient = "Tacrolimus",Manufactrer = "Astellas",Form = "Ointment",Strength = "0.1%",RequiresPrescription = true,CategoryId = 8 },
                new Medicine { Id = 40,TradeName = "Elidel",ActiveIngredient = "Pimecrolimus",Manufactrer = "Meda",Form = "Cream",Strength = "1%",RequiresPrescription = true,CategoryId = 8 },

                // Vitamins & Supplements (Category 9)
                new Medicine { Id = 41,TradeName = "Centrum",ActiveIngredient = "Multivitamins",Manufactrer = "Pfizer",Form = "Tablet",Strength = "Adult Formula",RequiresPrescription = false,CategoryId = 9 },
                new Medicine { Id = 42,TradeName = "Vitamax",ActiveIngredient = "Vitamin C",Manufactrer = "EVA Pharma",Form = "Tablet",Strength = "1000mg",RequiresPrescription = false,CategoryId = 9 },
                new Medicine { Id = 43,TradeName = "Neurobion",ActiveIngredient = "B-Complex Vitamins",Manufactrer = "Merck",Form = "Tablet",Strength = "Strong",RequiresPrescription = false,CategoryId = 9 },
                new Medicine { Id = 44,TradeName = "Calcium-D",ActiveIngredient = "Calcium/Vitamin D",Manufactrer = "Sanofi",Form = "Tablet",Strength = "600mg/400IU",RequiresPrescription = false,CategoryId = 9 },
                new Medicine { Id = 45,TradeName = "Omega-3",ActiveIngredient = "Fish Oil",Manufactrer = "Nordic",Form = "Capsule",Strength = "1000mg",RequiresPrescription = false,CategoryId = 9 },

                // Antivirals (Category 10)
                new Medicine { Id = 46,TradeName = "Zovirax",ActiveIngredient = "Acyclovir",Manufactrer = "GSK",Form = "Cream",Strength = "5%",RequiresPrescription = false,CategoryId = 10 },
                new Medicine { Id = 47,TradeName = "Valtrex",ActiveIngredient = "Valacyclovir",Manufactrer = "GSK",Form = "Tablet",Strength = "500mg",RequiresPrescription = true,CategoryId = 10 },
                new Medicine { Id = 48,TradeName = "Famvir",ActiveIngredient = "Famciclovir",Manufactrer = "Novartis",Form = "Tablet",Strength = "250mg",RequiresPrescription = true,CategoryId = 10 },
                new Medicine { Id = 49,TradeName = "Kivexa",ActiveIngredient = "Abacavir/Lamivudine",Manufactrer = "GSK",Form = "Tablet",Strength = "600mg/300mg",RequiresPrescription = true,CategoryId = 10 },
                new Medicine { Id = 50,TradeName = "Reyataz",ActiveIngredient = "Atazanavir",Manufactrer = "BMS",Form = "Capsule",Strength = "300mg",RequiresPrescription = true,CategoryId = 10 }
            );
        }
    }
}
