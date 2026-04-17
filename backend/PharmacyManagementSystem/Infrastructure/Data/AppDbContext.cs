using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PharmacyManagementSystem.Domain.Entities;

namespace LibrarySystemAPIs.Infrastructure.Data
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Medicine> Medicines { get ; set ;}
        public DbSet<MedicineAlternative> MedicineAlternative { get ; set ;}
        public DbSet<MedicineCategory> MedicineCategory { get ; set ;}
        public DbSet<Notification> Notifications { get ; set ;}
        public DbSet<Reservation> Reservations { get ; set ;}
        public DbSet<StockWatcher> StockWatchers { get ; set ;}
        public DbSet<Pharmacy> Pharmacies { get ; set ;}
        public DbSet<MedicineStock> MedicineStocks { get ; set ;}

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder) ;

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly) ;
        }
    }
}
