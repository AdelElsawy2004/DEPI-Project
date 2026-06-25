namespace PharmacyManagementSystem.Application.Interfaces.Repostiories
{
    public interface IGenericRepository <T> where T : class
    {
        public Task AddAsync(T item) ;
        public Task<T?> GetByIdAsync(int id) ;
        public Task<List<T>> GetAllAsync() ;
        public void Update(T item) ;
        public void Delete(T item) ;
        public Task SaveAsync() ;
    }
}
