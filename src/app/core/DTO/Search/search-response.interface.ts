export interface SearchResultDto {
  pharmacyName: string;
  pharmacyAddress: string;
  pharmacyPhone?: string | null;
  medicineId: number;
  pharmacyId: number;
  distanceInKm?: number | null;
  medicineName: string;
  quantityAvailable: number;
  price: number;
}

export interface SearchResponseDto {
  searchResults: SearchResultDto[];
  totalResults: number;
}
