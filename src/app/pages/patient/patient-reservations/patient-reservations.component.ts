import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Reservation {
    medication: string;
    dosage: string;
    pharmacy: string;
    quantity: number;
    date: string;
    status: 'Confirmed' | 'Pending' | 'Rejected';
}

@Component({
    selector: 'app-patient-reservations',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './patient-reservations.component.html',
    styleUrls: ['./patient-reservations.component.scss']
})
export class PatientReservationsComponent {

    tabs: string[] = [
        'All',
        'Pending',
        'Confirmed',
        'Rejected'
    ];

    selectedStatus: string = 'All';

    reservations: Reservation[] = [
        {
            medication: 'Amoxicillin',
            dosage: '500mg',
            pharmacy: 'El-Nile Pharmacy',
            quantity: 2,
            date: '2026-05-02',
            status: 'Confirmed'
        },
        {
            medication: 'Metformin',
            dosage: '850mg',
            pharmacy: 'Al-Shifa Pharmacy',
            quantity: 1,
            date: '2026-05-05',
            status: 'Pending'
        },
        {
            medication: 'Cetirizine',
            dosage: '10mg',
            pharmacy: 'Hope Pharmacy',
            quantity: 3,
            date: '2026-05-01',
            status: 'Rejected'
        }
    ];

    get filteredReservations(): Reservation[] {

        if (this.selectedStatus === 'All') {
            return this.reservations;
        }

        return this.reservations.filter(
            reservation => reservation.status === this.selectedStatus
        );

    }

    changeFilter(status: string): void {
        this.selectedStatus = status;
    }

    cancelReservation(reservation: Reservation): void {

        reservation.status = 'Rejected';

    }

}