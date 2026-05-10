import { Component } from '@angular/core';
import { InventoryComponent } from '../Inventory/inventory.component';
import { ReservationsComponent } from '../Reservations/reservations.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ReservationsService } from '../Reservations/reservations.service';
import { InventoryService } from '../Inventory/inventory.service';
import { ReservationStatus } from '../Reservations/reservations.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [FormsModule, CommonModule, TableModule, ReservationsComponent, InventoryComponent]
})
export class DashboardComponent {
    constructor(
        private readonly reservationsService: ReservationsService,
        private readonly inventoryService: InventoryService
    ) {}

    get totalReservationsCount(): number {
        return this.reservationsService.reservations().length;
    }

    get pendingReservationsCount(): number {
        return this.countReservationsByStatus('Pending');
    }

    get confirmedReservationsCount(): number {
        return this.countReservationsByStatus('Confirmed');
    }

    get lowStockMedicineCount(): number {
        return this.inventoryService.inventoryItems().filter((item) => item.level === 'Low').length;
    }

    private countReservationsByStatus(status: ReservationStatus): number {
        return this.reservationsService.reservations().filter((reservation) => reservation.status === status).length;
    }
}
