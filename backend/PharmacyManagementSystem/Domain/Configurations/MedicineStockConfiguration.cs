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

            builder.Ignore(ms => ms.IsAvailable) ; 

            builder.HasOne(ms => ms.Pharmacy)
                .WithMany(ph => ph.MedicineStocks)
                .HasForeignKey(ms => ms.PharmacyId)
                .OnDelete(DeleteBehavior.Cascade) ; 

            builder.HasOne(ms => ms.Medicine) 
                .WithMany(md => md.MedicineStocks) 
                .HasForeignKey(ms => ms.MedicineId)
                .OnDelete(DeleteBehavior.Cascade) ; 

            builder.HasData(
              
                new MedicineStock { Id = 1,PharmacyId = 1,MedicineId = 1,QuantityAvailable = 45,Price = 95.00m,ExpiryDate = new DateTime(2027,12,31),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 2,PharmacyId = 1,MedicineId = 2,QuantityAvailable = 30,Price = 85.50m,ExpiryDate = new DateTime(2027,11,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 3,PharmacyId = 1,MedicineId = 3,QuantityAvailable = 60,Price = 75.00m,ExpiryDate = new DateTime(2028,3,20),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 4,PharmacyId = 1,MedicineId = 4,QuantityAvailable = 25,Price = 45.00m,ExpiryDate = new DateTime(2027,9,10),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 5,PharmacyId = 1,MedicineId = 5,QuantityAvailable = 55,Price = 110.00m,ExpiryDate = new DateTime(2028,6,30),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 6,PharmacyId = 2,MedicineId = 6,QuantityAvailable = 120,Price = 30.50m,ExpiryDate = new DateTime(2028,1,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 7,PharmacyId = 2,MedicineId = 7,QuantityAvailable = 80,Price = 65.00m,ExpiryDate = new DateTime(2027,8,20),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 8,PharmacyId = 2,MedicineId = 8,QuantityAvailable = 100,Price = 40.00m,ExpiryDate = new DateTime(2028,4,5),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 9,PharmacyId = 2,MedicineId = 9,QuantityAvailable = 35,Price = 55.50m,ExpiryDate = new DateTime(2027,10,30),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 10,PharmacyId = 2,MedicineId = 10,QuantityAvailable = 45,Price = 70.00m,ExpiryDate = new DateTime(2028,2,28),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 11,PharmacyId = 3,MedicineId = 11,QuantityAvailable = 80,Price = 45.00m,ExpiryDate = new DateTime(2027,9,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 12,PharmacyId = 3,MedicineId = 12,QuantityAvailable = 65,Price = 50.00m,ExpiryDate = new DateTime(2028,5,10),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 13,PharmacyId = 3,MedicineId = 13,QuantityAvailable = 40,Price = 85.00m,ExpiryDate = new DateTime(2027,12,1),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 14,PharmacyId = 3,MedicineId = 14,QuantityAvailable = 55,Price = 95.00m,ExpiryDate = new DateTime(2028,7,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 15,PharmacyId = 3,MedicineId = 15,QuantityAvailable = 30,Price = 75.00m,ExpiryDate = new DateTime(2027,11,20),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 16,PharmacyId = 4,MedicineId = 16,QuantityAvailable = 150,Price = 115.00m,ExpiryDate = new DateTime(2028,3,10),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 17,PharmacyId = 4,MedicineId = 17,QuantityAvailable = 90,Price = 135.00m,ExpiryDate = new DateTime(2027,9,25),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 18,PharmacyId = 4,MedicineId = 18,QuantityAvailable = 70,Price = 95.00m,ExpiryDate = new DateTime(2028,8,5),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 19,PharmacyId = 4,MedicineId = 19,QuantityAvailable = 60,Price = 85.00m,ExpiryDate = new DateTime(2027,10,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 20,PharmacyId = 4,MedicineId = 20,QuantityAvailable = 45,Price = 105.00m,ExpiryDate = new DateTime(2028,1,30),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 21,PharmacyId = 5,MedicineId = 21,QuantityAvailable = 60,Price = 85.50m,ExpiryDate = new DateTime(2027,11,1),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 22,PharmacyId = 5,MedicineId = 22,QuantityAvailable = 200,Price = 40.00m,ExpiryDate = new DateTime(2028,4,18),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 23,PharmacyId = 5,MedicineId = 23,QuantityAvailable = 45,Price = 145.00m,ExpiryDate = new DateTime(2027,8,30),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 24,PharmacyId = 5,MedicineId = 24,QuantityAvailable = 25,Price = 220.00m,ExpiryDate = new DateTime(2028,2,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 25,PharmacyId = 5,MedicineId = 25,QuantityAvailable = 30,Price = 195.00m,ExpiryDate = new DateTime(2028,6,20),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 26,PharmacyId = 6,MedicineId = 26,QuantityAvailable = 200,Price = 25.00m,ExpiryDate = new DateTime(2028,8,18),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 27,PharmacyId = 6,MedicineId = 27,QuantityAvailable = 85,Price = 55.00m,ExpiryDate = new DateTime(2027,12,5),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 28,PharmacyId = 6,MedicineId = 28,QuantityAvailable = 50,Price = 65.00m,ExpiryDate = new DateTime(2028,5,22),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 29,PharmacyId = 6,MedicineId = 29,QuantityAvailable = 35,Price = 75.00m,ExpiryDate = new DateTime(2027,9,12),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 30,PharmacyId = 6,MedicineId = 30,QuantityAvailable = 150,Price = 30.00m,ExpiryDate = new DateTime(2028,7,8),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 31,PharmacyId = 7,MedicineId = 31,QuantityAvailable = 90,Price = 140.00m,ExpiryDate = new DateTime(2028,1,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 32,PharmacyId = 7,MedicineId = 32,QuantityAvailable = 40,Price = 210.00m,ExpiryDate = new DateTime(2027,10,25),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 33,PharmacyId = 7,MedicineId = 33,QuantityAvailable = 55,Price = 120.00m,ExpiryDate = new DateTime(2028,3,12),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 34,PharmacyId = 7,MedicineId = 34,QuantityAvailable = 65,Price = 95.00m,ExpiryDate = new DateTime(2027,11,30),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 35,PharmacyId = 7,MedicineId = 35,QuantityAvailable = 25,Price = 150.00m,ExpiryDate = new DateTime(2028,9,5),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 36,PharmacyId = 8,MedicineId = 36,QuantityAvailable = 25,Price = 70.00m,ExpiryDate = new DateTime(2027,4,30),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 37,PharmacyId = 8,MedicineId = 37,QuantityAvailable = 35,Price = 85.00m,ExpiryDate = new DateTime(2028,6,14),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 38,PharmacyId = 8,MedicineId = 38,QuantityAvailable = 20,Price = 95.00m,ExpiryDate = new DateTime(2027,8,22),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 39,PharmacyId = 8,MedicineId = 39,QuantityAvailable = 15,Price = 165.00m,ExpiryDate = new DateTime(2028,2,28),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 40,PharmacyId = 8,MedicineId = 40,QuantityAvailable = 30,Price = 145.00m,ExpiryDate = new DateTime(2027,12,1),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 41,PharmacyId = 9,MedicineId = 41,QuantityAvailable = 300,Price = 18.75m,ExpiryDate = new DateTime(2029,5,22),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 42,PharmacyId = 9,MedicineId = 42,QuantityAvailable = 250,Price = 15.00m,ExpiryDate = new DateTime(2029,3,10),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 43,PharmacyId = 9,MedicineId = 43,QuantityAvailable = 180,Price = 25.00m,ExpiryDate = new DateTime(2028,11,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 44,PharmacyId = 9,MedicineId = 44,QuantityAvailable = 120,Price = 35.00m,ExpiryDate = new DateTime(2029,1,20),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 45,PharmacyId = 9,MedicineId = 45,QuantityAvailable = 90,Price = 45.00m,ExpiryDate = new DateTime(2028,9,8),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },

                new MedicineStock { Id = 46,PharmacyId = 10,MedicineId = 46,QuantityAvailable = 100,Price = 60.25m,ExpiryDate = new DateTime(2027,5,20),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 47,PharmacyId = 10,MedicineId = 47,QuantityAvailable = 40,Price = 125.00m,ExpiryDate = new DateTime(2028,4,12),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 48,PharmacyId = 10,MedicineId = 48,QuantityAvailable = 35,Price = 110.00m,ExpiryDate = new DateTime(2027,7,25),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 49,PharmacyId = 10,MedicineId = 49,QuantityAvailable = 20,Price = 245.00m,ExpiryDate = new DateTime(2028,8,30),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) },
                new MedicineStock { Id = 50,PharmacyId = 10,MedicineId = 50,QuantityAvailable = 25,Price = 285.00m,ExpiryDate = new DateTime(2028,10,15),LastUpdated = new DateTime(2026,7,5,22,26,28,0,DateTimeKind.Utc) }
            );

        }
    }
}
