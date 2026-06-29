using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Domain.Configurations
{
    public class ReservationConfiguration :
        IEntityTypeConfiguration<Reservation>
    {
        public void Configure(EntityTypeBuilder<Reservation> builder)
        {
            builder.HasKey(rs => rs.Id) ;

            builder.Property(rs => rs.Status)
                .HasConversion<string>() // Stored as "Pending" not 0
                .HasMaxLength(20) ;

            builder.Property(rs => rs.Notes)
                .HasMaxLength(200) ;

            builder.HasIndex(rs => new {rs.PatientId, rs.Status}) ;
            builder.HasIndex(rs => rs.PharmacyId) ;
            builder.HasIndex(rs => rs.ExpiresAt) ;

            builder.HasOne(rs => rs.Pharmacy)
                .WithMany(ph => ph.Reservations)
                .HasForeignKey(rs => rs.PharmacyId)
                .OnDelete(DeleteBehavior.Cascade) ; // Restrict


            //builder.HasData(
            //    new Reservation { Id = 1,PatientId = 101,MedicineId = 1,PharmacyId = 1,Quantity = 2,Status = ReservationStatus.Pending,CreatedAt = DateTime.UtcNow,ExpiresAt = DateTime.UtcNow.AddDays(2),Notes = "Will collect in evening" },
            //    new Reservation { Id = 2,PatientId = 102,MedicineId = 2,PharmacyId = 2,Quantity = 3,Status = ReservationStatus.PickedUp,CreatedAt = DateTime.UtcNow.AddDays(-3),ExpiresAt = DateTime.UtcNow.AddDays(-1) },
            //    new Reservation { Id = 3,PatientId = 103,MedicineId = 3,PharmacyId = 3,Quantity = 1,Status = ReservationStatus.Pending,CreatedAt = DateTime.UtcNow,ExpiresAt = DateTime.UtcNow.AddDays(1) },
            //    new Reservation { Id = 4,PatientId = 104,MedicineId = 4,PharmacyId = 4,Quantity = 1,Status = ReservationStatus.Cancelled,CreatedAt = DateTime.UtcNow.AddDays(-5),ExpiresAt = DateTime.UtcNow.AddDays(-3),Notes = "Patient cancelled" },
            //    new Reservation { Id = 5,PatientId = 105,MedicineId = 5,PharmacyId = 5,Quantity = 2,Status = ReservationStatus.Pending,CreatedAt = DateTime.UtcNow,ExpiresAt = DateTime.UtcNow.AddDays(2) },
            //    new Reservation { Id = 6,PatientId = 106,MedicineId = 6,PharmacyId = 6,Quantity = 1,Status = ReservationStatus.Pending,CreatedAt = DateTime.UtcNow,ExpiresAt = DateTime.UtcNow.AddDays(2) },
            //    new Reservation { Id = 7,PatientId = 107,MedicineId = 7,PharmacyId = 7,Quantity = 4,Status = ReservationStatus.PickedUp,CreatedAt = DateTime.UtcNow.AddDays(-2),ExpiresAt = DateTime.UtcNow },
            //    new Reservation { Id = 8,PatientId = 108,MedicineId = 8,PharmacyId = 8,Quantity = 1,Status = ReservationStatus.Pending,CreatedAt = DateTime.UtcNow,ExpiresAt = DateTime.UtcNow.AddDays(3),Notes = "Urgent prescription" },
            //    new Reservation { Id = 9,PatientId = 109,MedicineId = 9,PharmacyId = 9,Quantity = 2,Status = ReservationStatus.Pending,CreatedAt = DateTime.UtcNow,ExpiresAt = DateTime.UtcNow.AddDays(2) },
            //    new Reservation { Id = 10,PatientId = 110,MedicineId = 10,PharmacyId = 10,Quantity = 5,Status = ReservationStatus.Pending,CreatedAt = DateTime.UtcNow,ExpiresAt = DateTime.UtcNow.AddDays(2) }
            //) ;
        }
    }
}
