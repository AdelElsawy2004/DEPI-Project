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

            builder.HasData(
                new MedicineStock { Id = 1,PharmacyId = 1,MedicineId = 1,QuantityAvailable = 45,Price = 95.00m,ExpiryDate = new DateTime(2027,12,31),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 2,PharmacyId = 2,MedicineId = 2,QuantityAvailable = 120,Price = 30.50m,ExpiryDate = new DateTime(2028,6,30),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 3,PharmacyId = 3,MedicineId = 3,QuantityAvailable = 80,Price = 45.00m,ExpiryDate = new DateTime(2027,9,15),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 4,PharmacyId = 4,MedicineId = 4,QuantityAvailable = 35,Price = 60.25m,ExpiryDate = new DateTime(2027,5,20),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 5,PharmacyId = 5,MedicineId = 5,QuantityAvailable = 150,Price = 115.00m,ExpiryDate = new DateTime(2028,3,10),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 6,PharmacyId = 6,MedicineId = 6,QuantityAvailable = 60,Price = 85.50m,ExpiryDate = new DateTime(2027,11,1),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 7,PharmacyId = 7,MedicineId = 7,QuantityAvailable = 200,Price = 25.00m,ExpiryDate = new DateTime(2028,8,18),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 8,PharmacyId = 8,MedicineId = 8,QuantityAvailable = 25,Price = 70.00m,ExpiryDate = new DateTime(2027,4,30),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 9,PharmacyId = 9,MedicineId = 9,QuantityAvailable = 90,Price = 140.00m,ExpiryDate = new DateTime(2028,1,15),LastUpdated = DateTime.UtcNow },
                new MedicineStock { Id = 10,PharmacyId = 10,MedicineId = 10,QuantityAvailable = 300,Price = 18.75m,ExpiryDate = new DateTime(2029,5,22),LastUpdated = DateTime.UtcNow }
            ) ;
        }
    }
}
