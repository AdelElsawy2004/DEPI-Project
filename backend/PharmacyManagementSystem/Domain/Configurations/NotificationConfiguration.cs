using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Domain.Configurations
{
    public class NotificationConfiguration :
        IEntityTypeConfiguration<Notification>
    {
        public void Configure(EntityTypeBuilder<Notification> builder)
        {
            builder.HasKey(nt => nt.Id) ;

            builder.Property(nt => nt.Title)
                .IsRequired(true)
                .HasMaxLength(50) ;

            builder.Property(nt => nt.Title)
                .IsRequired(true)
                .HasMaxLength(300) ;

            // Conversion

            builder.HasIndex(nt => new {nt.UserId, nt.IsRead}) ;
        }
    }
}
