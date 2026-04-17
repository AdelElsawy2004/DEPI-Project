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
                .HasConversion<String>() // Stored as "Pending" not 0
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
        }
    }
}
