import { computed, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { ReservationResponseDto } from '@/core/DTO/Reservations/reservation-response.interface';
import { CreateReservationRequestDto } from '@/core/DTO/Reservations/create-reservation-request.interface';
import { MyReservationsResponseDto, PatientReservationResponseDto } from '@/core/DTO/Reservations/patient-my-reservations.interface';

export type ReservationStatus = 'Pending' | 'Confirmed' | 'Rejected';

export interface ReservationItem {
    id: string;
    initials: string;
    patientName: string;
    medicine: string;
    qty: number;
    status: ReservationStatus;
}

function resolveInitials(name: string): string {
    const letters = name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('');

    return letters || '??';
}

function normalizeReservationStatus(status: string): ReservationStatus {
    switch (status) {
        case 'Accepted':
        case 'Confirmed':
            return 'Confirmed';
        case 'Rejected':
            return 'Rejected';
        case 'Pending':
        default:
            return 'Pending';
    }
}

function toReservationItem(dto: ReservationResponseDto): ReservationItem {
    const patientName = dto.patientName?.trim() || 'Unknown Patient';
    const medicine = dto.medicineName?.trim() || 'Unknown Medicine';

    return {
        id: dto.id.toString(),
        initials: resolveInitials(patientName),
        patientName,
        medicine,
        qty: dto.medicineQuantity,
        status: normalizeReservationStatus(dto.status)
    };
}

@Injectable({
    providedIn: 'root'
})
export class ReservationService extends ApiService {
    private readonly reservationsState = signal<ReservationItem[]>([]);

    readonly reservations = computed(() => this.reservationsState());

    getReservationsByPharmacy(pharmacyId: number): Observable<ReservationItem[]> {
        return this.http
            .get<ReservationResponseDto[]>(`${this.apiUrl}/Reservations/pharmacy/${pharmacyId}`)
            .pipe(map((reservations = []) => reservations.map(toReservationItem)));
    }

    loadReservations(pharmacyId: number): void {
        this.getReservationsByPharmacy(pharmacyId)
            .pipe(
                tap((reservations) => {
                    this.reservationsState.set(reservations);
                })
            )
            .subscribe({
                error: () => {
                    this.reservationsState.set([]);
                }
            });
    }

    getMyPharmacyReservations(): Observable<ReservationItem[]> {
        return this.http
            .get<ReservationResponseDto[]>(`${this.apiUrl}/Reservations/pharmacy/me`)
            .pipe(map((reservations = []) => reservations.map(toReservationItem)));
    }

    loadMyReservations(): void {
        this.getMyPharmacyReservations()
            .pipe(
                tap((reservations) => {
                    this.reservationsState.set(reservations);
                })
            )
            .subscribe({
                error: () => {
                    this.reservationsState.set([]);
                }
            });
    }

    createReservation(dto: CreateReservationRequestDto): Observable<ReservationResponseDto> {
        return this.http.post<ReservationResponseDto>(`${this.apiUrl}/Reservations`, dto);
    }

    getMyReservations(): Observable<MyReservationsResponseDto> {
        return this.http.get<MyReservationsResponseDto>(`${this.apiUrl}/Reservations/my-reservations`);
    }

    cancelReservation(reservationId: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/Reservations/${reservationId}`);
    }
}
