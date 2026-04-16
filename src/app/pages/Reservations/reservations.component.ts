import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-reservations',
    standalone: true,
    imports: [CommonModule, TableModule, RouterLink, ConfirmDialogModule],
    providers: [ConfirmationService],
    templateUrl: './reservations.component.html',
    styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
    activeFilter: string = 'All';
    filterOptions: string[] = ['All', 'Pending', 'Confirmed', 'Rejected'];
    readonly reservationsPageLink = ['/reservations'];
    
    constructor(private router: Router, private confirmationService: ConfirmationService) {}

    reservations = [
        { initials: 'SJ', patientName: 'Sarah Johnson', medicine: 'Amoxicillin 500mg', qty: 2, status: 'Pending' },
        { initials: 'MC', patientName: 'Michael Chen', medicine: 'Metformin 850mg', qty: 1, status: 'Confirmed' },
        { initials: 'ED', patientName: 'Emily Davis', medicine: 'Lisinopril 10mg', qty: 3, status: 'Pending' },
        { initials: 'JW', patientName: 'James Wilson', medicine: 'Atorvastatin 20mg', qty: 1, status: 'Rejected' },
        { initials: 'OM', patientName: 'Olivia Martinez', medicine: 'Omeprazole 20mg', qty: 2, status: 'Confirmed' },
        { initials: 'NT', patientName: 'Noah Thompson', medicine: 'Amlodipine 5mg', qty: 1, status: 'Pending' },
        { initials: 'AA', patientName: 'Ava Anderson', medicine: 'Cetirizine 10mg', qty: 4, status: 'Confirmed' },
        { initials: 'LJ', patientName: 'Liam Jackson', medicine: 'Ibuprofen 400mg', qty: 2, status: 'Rejected' },
    ];

    get isReservationsPage(): boolean {
        return this.router.url.startsWith('/reservations');
    }

    get cardTitle(): string {
        return this.isReservationsPage ? 'Reservations' : 'Recent Reservations';
    }

    get cardSubtitle(): string {
        return this.isReservationsPage ? 'Manage patient reservation requests' : 'Latest patient reservation requests';
    }

    get filteredReservations(): typeof this.reservations {
        if (this.activeFilter === 'All') return this.reservations;
        return this.reservations.filter(res => res.status === this.activeFilter);
    }

    get displayedReservationsCount(): number {
        return this.filteredReservations.length;
    }

    get totalReservationsCount(): number {
        return this.reservations.length;
    }
    updateStatus(reservation: any, status: string) {
        this.confirmationService.confirm({
            message: `Are you sure you want to ${status} this reservation?`,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            rejectLabel: 'Cancel',
            acceptLabel: 'Yes',

            accept: () => {
                reservation.status = status;
            }
        });
    }
}
