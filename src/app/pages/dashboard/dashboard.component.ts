import { Component } from '@angular/core';
import { InventoryComponent } from '../Inventory/inventory.component';
import { ReservationsComponent } from '../Reservations/reservations.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    imports: [FormsModule, CommonModule, TableModule, ReservationsComponent, InventoryComponent]
})
export class DashboardComponent {}
