using System.ComponentModel;

namespace PharmacyManagementSystem.Domain.Entities
{
    public class Medicine
    {
        public int Id { get ; set ;}
        public string TradeName { get ; set ;} = string.Empty ;
        public string ActiveIngredient { get ; set ;} = string.Empty ;
        public string? Manufactrer { get ; set ;} 
        public string Form { get ; set ;} = string.Empty ;
        public string Strength { get ; set ;} = string.Empty ; // 500mg
        public bool RequiresPrescription { get ; set ;}
        // foreignKey
        public int? CategoryId { get ; set ;}

        // Navigation
        public MedicineCategory? Category { get ; set ;} 
        public List<MedicineStock> MedicineStocks { get ; set ;} = new List<MedicineStock>() ;
        public List<StockWatcher> StockWatchers { get ; set ;} = new List<StockWatcher>() ;
    }
}
