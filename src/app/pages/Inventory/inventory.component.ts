import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DialogModule } from "primeng/dialog";
import { InputNumberModule } from "primeng/inputnumber";
import { SelectModule } from "primeng/select";
import { DatePicker } from 'primeng/datepicker'; 
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-inventory',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, DialogModule, InputNumberModule, SelectModule, DatePicker,
        InputTextModule,],
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
    showAddDialog: boolean = false;
    quantity: number = 0;
    expiryDate: Date | null = null;
    selectedCategory: any = null;
    readonly inventoryPageLink = ['/inventory'];

    inventoryItems = [
        { name: 'Amoxicillin 500mg', category: 'Antibiotic', expiry: '2027-03', stock: 120, level: 'High' },
        { name: 'Metformin 850mg', category: 'Diabetes', expiry: '2026-11', stock: 85, level: 'Normal' },
        { name: 'Lisinopril 10mg', category: 'Hypertension', expiry: '2027-06', stock: 60, level: 'Normal' },
        { name: 'Atorvastatin 20mg', category: 'Cholesterol', expiry: '2026-09', stock: 200, level: 'High' },
        { name: 'Omeprazole 20mg', category: 'Gastric', expiry: '2026-12', stock: 45, level: 'Normal' },
        { name: 'Amlodipine 5mg', category: 'Hypertension', expiry: '2027-01', stock: 30, level: 'Low' },
        { name: 'Cetirizine 10mg', category: 'Allergy', expiry: '2027-05', stock: 75, level: 'Normal' },
        { name: 'Ibuprofen 400mg', category: 'Pain Relief', expiry: '2026-08', stock: 52, level: 'Normal' }
    ];
    categories = [
        { label: 'Antibiotic', value: 'antibiotic' },
        { label: 'Pain Relief', value: 'pain' },
        { label: 'Diabetes', value: 'diabetes' }
    ];

    constructor(private router: Router) {}

    get isInventoryPage(): boolean {
        return this.router.url.startsWith('/inventory');
    }

    get cardTitle(): string {
        return this.isInventoryPage ? 'Medicine Inventory' : 'Inventory Preview';
    }

    get cardSubtitle(): string {
        return this.isInventoryPage ? 'Manage current medicine stock' : 'Current stock overview';
    }

    get visibleInventory(): typeof this.inventoryItems {
        return this.isInventoryPage ? this.inventoryItems : this.inventoryItems.slice(0, 6);
    }

    get displayedInventoryCount(): number {
        return this.visibleInventory.length;
    }

    get totalInventoryCount(): number {
        return this.inventoryItems.length;
    }
    openAddDialog() {
        this.showAddDialog = true;
    }

    closeAddDialog() {
        this.showAddDialog = false;
    }
}
