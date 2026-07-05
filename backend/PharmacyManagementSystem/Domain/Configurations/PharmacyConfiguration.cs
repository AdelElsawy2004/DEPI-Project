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

            // ========== SEED DATA (10 RECORDS) ==========

            builder.HasData(
                new Pharmacy { Id = 1,Name = "El-Ezaby Pharmacy",Address = "90 El-Tahrir St",City = "Cairo",latitude = 30.0444,Longitude = 31.2357,Phone = "0225741234",IsVerified = true },
                new Pharmacy { Id = 2,Name = "Care Pharmacy",Address = "Abbassiya Square",City = "Cairo",latitude = 30.0621,Longitude = 31.2751,Phone = "0224825678",IsVerified = true },
                new Pharmacy { Id = 3,Name = "Seif Pharmacy",Address = "15 Nasr City St",City = "Cairo",latitude = 30.0561,Longitude = 31.3302,Phone = "0224123456",IsVerified = true },
                new Pharmacy { Id = 4,Name = "Rushdy Pharmacy",Address = "Horreya Avenue",City = "Alexandria",latitude = 31.2001,Longitude = 29.9187,Phone = "034823456",IsVerified = true },
                new Pharmacy { Id = 5,Name = "Misr Pharmacy",Address = "El-Geish St",City = "Tanta",latitude = 30.7865,Longitude = 30.9998,Phone = "043335678",IsVerified = true },
                new Pharmacy { Id = 6,Name = "Vezeeta Pharmacy",Address = "Al-Galaa St",City = "Mansoura",latitude = 31.0414,Longitude = 31.3785,Phone = "052234567",IsVerified = false },
                new Pharmacy { Id = 7,Name = "Delmar Pharmacy",Address = "Maadi Road 9",City = "Cairo",latitude = 29.9602,Longitude = 31.2566,Phone = "0223567890",IsVerified = true },
                new Pharmacy { Id = 8,Name = "Nile Pharmacy",Address = "Corniche El-Nil",City = "Aswan",latitude = 24.0889,Longitude = 32.8998,Phone = "0972345678",IsVerified = false },
                new Pharmacy { Id = 9,Name = "El-Alfy Pharmacy",Address = "El-Bahr St",City = "Al-Minya",latitude = 28.1099,Longitude = 30.7501,Phone = "0863456789",IsVerified = true },
                new Pharmacy { Id = 10,Name = "Nile Valley Pharmacy",Address = "Shebin El-Kom Main St",City = "Menofia",latitude = 30.5580,Longitude = 31.0084,Phone = "0482345678",IsVerified = true }
            );
        }
    }
}
