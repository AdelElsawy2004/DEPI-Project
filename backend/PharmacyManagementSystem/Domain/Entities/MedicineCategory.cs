namespace PharmacyManagementSystem.Domain.Entities
{
    public class MedicineCategory
    {
        public int Id { get ; set ;}
        public string Name { get ; set ;} = null! ;
        public string? Description { get ; set ;}

        public List<Medicine> Medicines { get ; set ;} = new List<Medicine>() ;
    }
}
