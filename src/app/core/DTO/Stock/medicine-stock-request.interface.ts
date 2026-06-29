export interface MedicineStockRequestDto {
  pharmacyId: number;
  medicineId: number;
  quantityAvailable: number;
  expiryDate: string; 
}
