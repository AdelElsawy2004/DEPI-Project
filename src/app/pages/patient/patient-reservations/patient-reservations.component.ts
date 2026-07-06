import { CommonModule } from '@angular/common';
import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { ReservationService } from '@/core/services/reservation.service';
import { NotificationService } from '@/core/services/notification.service';
import { MyReservationsResponseDto, PatientReservationResponseDto } from '@/core/DTO/Reservations/patient-my-reservations.interface';

interface Reservation {
    id: number;
    medication: string;
    dosage: string; // backend doesn't provide separate dosage; kept for template compatibility
    pharmacy: string;
    quantity: number;
    date: string;
    // preserve exact backend statuses: Pending, Confirmed, Rejected, Cancelled, PickedUp
    status: 'Pending' | 'Confirmed' | 'Rejected' | 'Cancelled' | 'PickedUp' | string;
}

@Component({
    selector: 'app-patient-reservations',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './patient-reservations.component.html',
    styleUrls: ['./patient-reservations.component.scss']
})
export class PatientReservationsComponent implements OnInit {

    private readonly destroyRef = inject(DestroyRef);
    private readonly reservationService = inject(ReservationService);
    private readonly notificationService = inject(NotificationService);

    tabs: { label: string; status: string | null }[] = [
        { label: 'All', status: null },
        { label: 'Pending', status: 'Pending' },
        { label: 'Confirmed', status: 'Confirmed' },
        { label: 'Rejected', status: 'Rejected' },
        { label: 'Cancelled', status: 'Cancelled' },
        { label: 'Picked Up', status: 'PickedUp' }
    ];

    selectedStatus: string | null = null;

    reservations: Reservation[] = [];

    isLoading = false;
    hasError = false;

    private cancelling = new Set<number>();

    ngOnInit(): void {
        this.loadReservations();
    }

    private mapStatus(status: string): Reservation['status'] {
        if (!status) return 'Pending';
        // preserve backend status values where possible, but map legacy 'Accepted' -> 'Confirmed'
        if (status === 'Accepted') return 'Confirmed';
        return status as Reservation['status'];
    }

    private toDisplay(dto: PatientReservationResponseDto): Reservation {
        return {
            id: dto.id,
            medication: dto.medicineName,
            dosage: '',
            pharmacy: dto.pharmacyName,
            quantity: dto.quantity,
            date: new Date(dto.createdAt).toISOString().slice(0, 10),
            status: this.mapStatus(dto.status)
        };
    }

    get filteredReservations(): Reservation[] {
        if (this.selectedStatus === null) return this.reservations;
        return this.reservations.filter(r => r.status === this.selectedStatus);
    }

    changeFilter(tab: { label: string; status: string | null }): void {
        this.selectedStatus = tab.status;
    }

    private loadReservations(): void {
        this.isLoading = true;
        this.hasError = false;
        this.reservations = [];

        this.reservationService.getMyReservations()
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                finalize(() => { this.isLoading = false; })
            )
            .subscribe({
                next: (res: MyReservationsResponseDto) => {
                    const items = res?.reservations || [];
                    this.reservations = items.map(i => this.toDisplay(i));
                },
                error: (err) => {
                    this.hasError = true;
                    const message = err?.error?.Message || err?.message || 'Failed to load reservations';
                    this.notificationService.error('Load failed', message);
                    this.reservations = [];
                }
            });
    }

    isCancelling(id: number): boolean {
        return this.cancelling.has(id);
    }

    cancelReservation(reservation: Reservation): void {
        if (this.isCancelling(reservation.id)) return;
        this.cancelling.add(reservation.id);

        this.reservationService.cancelReservation(reservation.id)
            .pipe(finalize(() => this.cancelling.delete(reservation.id)))
            .subscribe({
                next: () => {
                    this.notificationService.success('Reservation cancelled', 'Reservation cancelled successfully');
                    this.loadReservations();
                },
                error: (err) => {
                    const message = err?.error?.Message || err?.message || 'Cancellation failed';
                    this.notificationService.error('Cancellation failed', message);
                }
            });
    }

}