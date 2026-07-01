import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { PharmacyStateService } from '@/state/pharmacy-state.service';
import { ReservationItem, ReservationService } from '@/core/services/reservation.service';

@Component({
    selector: 'app-reservations',
    standalone: true,
    imports: [CommonModule, TableModule, RouterLink, ConfirmDialogModule],
    providers: [ConfirmationService],
    templateUrl: './reservations.component.html',
    styleUrl: './reservations.component.scss'
})
export class ReservationsComponent implements OnInit {
    activeFilter: string = 'All';
    filterOptions: string[] = ['All', 'Pending', 'Confirmed', 'Rejected'];
    readonly reservationsPageLink = ['/reservations'];
    
    constructor(
        private router: Router,
        private reservationsService: ReservationService,
        private appState: PharmacyStateService
    ) {}

    ngOnInit(): void {
        this.reservationsService.loadReservations(1);
    }

    get isReservationsPage(): boolean {
        return this.router.url.startsWith('/reservations');
    }

    get cardTitle(): string {
        return this.isReservationsPage ? 'Reservations' : 'Recent Reservations';
    }

    get cardSubtitle(): string {
        return this.isReservationsPage ? 'Manage patient reservation requests' : 'Latest patient reservation requests';
    }

    get reservations(): ReservationItem[] {
        return this.reservationsService.reservations();
    }

    get filteredReservations(): ReservationItem[] {
        const normalizedQuery = this.appState.searchQuery().trim().toLowerCase();
        const statusFiltered = this.activeFilter === 'All'
            ? this.reservations
            : this.reservations.filter((reservation) => reservation.status === this.activeFilter);

        if (!normalizedQuery) {
            return statusFiltered;
        }

        return statusFiltered.filter((reservation) =>
            [
                reservation.patientName,
                reservation.medicine,
                reservation.status,
                reservation.qty.toString()
            ].some((value) => value.toLowerCase().includes(normalizedQuery))
        );
    }

    get displayedReservationsCount(): number {
        return this.filteredReservations.length;
    }

    get totalReservationsCount(): number {
        return this.reservations.length;
    }
    updateStatus(_reservation: ReservationItem, _status: ReservationItem['status']): void {
    }
}
