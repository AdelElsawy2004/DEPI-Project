export interface PatientReservationResponseDto {
  id: number;
  medicineName: string;
  pharmacyName: string;
  quantity: number;
  status: string;
  createdAt: string;
  expiresAt: string;
}

export interface MyReservationsResponseDto {
  reservations: PatientReservationResponseDto[];
}
