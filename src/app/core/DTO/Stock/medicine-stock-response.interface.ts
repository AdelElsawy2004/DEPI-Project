export interface MedicineStockResponseDto {
  pharmacyId: number;
  medicineId: number;
  quantityAvailable: number;
  expiryDate?: string | null; 
  lastUpdated: string; 
  medicineName: string;
}

