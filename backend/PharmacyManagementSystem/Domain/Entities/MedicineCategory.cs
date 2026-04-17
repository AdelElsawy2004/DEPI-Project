namespace PharmacyManagementSystem.Domain.Entities
{
    public class MedicineCategory
    {
        public int Id { get ; set ;}
        public string Name { get ; set ;} = null! ;

        // Navigation
        public List<Medicine> Medicines { get ; set ;} = new List<Medicine>() ;
    }
}
