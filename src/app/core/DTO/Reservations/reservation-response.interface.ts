export interface ReservationResponseDto {
    id: number;
    patientName: string;
    medicineName: string;
    medicineQuantity: number;
    status: string;
    createdAt: string;
    expiresAt: string;
    notes: string;
}
