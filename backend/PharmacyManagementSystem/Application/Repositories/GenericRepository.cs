using LibrarySystemAPIs.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using PharmacyManagementSystem.Application.Interfaces.Repostiories;

namespace PharmacyManagementSystem.Application.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly AppDbContext _context ;
        protected readonly DbSet<T> _dbSet ;

        public GenericRepository(AppDbContext context)
        {
            _context = context ;
            _dbSet = _context.Set<T>() ;
        }
        public async Task AddAsync(T item)
        {
            await _dbSet.AddAsync(item) ;
        }

        public void Delete(T item)
        {
            _dbSet.Remove(item) ;
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync() ;
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id) ;
        }

        public void Update(T item)
        {
            _dbSet.Update(item) ;
        }
        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync() ;
        }

    }
}
