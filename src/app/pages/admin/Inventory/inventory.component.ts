import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DialogModule } from "primeng/dialog";
import { InputNumberModule } from "primeng/inputnumber";
import { SelectModule } from "primeng/select";
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MedicineResponseDto } from '@/core/DTO/Medicines/medicine-response.interface';
import { MedicineService } from '@/core/services/medicine.service';
import { InventoryService, MedicineItem } from './inventory.service';
import { MedicineStockRequestDto } from '@/core/DTO/Stock/medicine-stock-request.interface';

import { PharmacyStateService } from '@/state/pharmacy-state.service';
import { ButtonModule } from "primeng/button";
import { NotificationService } from '@/core/services/notification.service';







@Component({
    selector: 'app-inventory',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, DialogModule, InputNumberModule, SelectModule, DatePicker,
    InputTextModule, ButtonModule],
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {
    showAddDialog = false;
    isEditMode = false;
    editingMedicineId: string | null = null;
    selectedMedicineId: number | null = null;
    quantity: number | null = null;
    expiryDate: Date | null = null;
    errors: Record<string, string> = {};
    readonly inventoryPageLink = ['/inventory'];
    medicines: Array<MedicineResponseDto & { displayName: string }> = [];

    private isSaving = false;

    constructor(
        private router: Router,
        public inventoryService: InventoryService,
        private appState: PharmacyStateService,
        private medicineService: MedicineService,
        private notificationService: NotificationService
    ) { }


    get isInventoryPage(): boolean {
        return this.router.url.startsWith('/inventory');
    }

    get cardTitle(): string {
        return this.isInventoryPage ? 'Medicine Inventory' : 'Inventory Preview';
    }

    get cardSubtitle(): string {
        return this.isInventoryPage ? 'Manage current medicine stock' : 'Current stock overview';
    }

    get inventoryItems(): MedicineItem[] {
        return this.inventoryService.inventoryItems();
    }

    get filteredInventoryItems(): MedicineItem[] {
        const normalizedQuery = this.appState.searchQuery().trim().toLowerCase();

        if (!normalizedQuery) {
            return this.inventoryItems;
        }

        return this.inventoryItems.filter((item) =>
            [
                item.name,
                item.category,
                item.expiry,
                item.level,
                item.stock.toString()
            ].some((value) => value.toLowerCase().includes(normalizedQuery))
        );
    }

    get visibleInventory(): MedicineItem[] {
        return this.isInventoryPage ? this.filteredInventoryItems : this.filteredInventoryItems.slice(0, 6);
    }

    get displayedInventoryCount(): number {
        return this.visibleInventory.length;
    }

    get totalInventoryCount(): number {
        return this.filteredInventoryItems.length;
    }

    private getLevel(stock: number): string {
        if (stock >= 100) return 'High';
        if (stock >= 40) return 'Normal';
        return 'Low';
    }

    private validate(): boolean {
        this.errors = {};
        if (this.selectedMedicineId === null) this.errors['name'] = 'Medicine name is required';
        if (!this.quantity || this.quantity <= 0) this.errors['quantity'] = 'Quantity must be greater than 0';

        if (!this.expiryDate) this.errors['expiry'] = 'Expiry date is required';

        return Object.keys(this.errors).length === 0;
    }

    validateField(field: 'name' | 'quantity' | 'expiry') {
        switch (field) {
            case 'name':
                if (this.selectedMedicineId !== null) {
                    this.removeFieldError('name');
                } else {
                    this.setFieldError('name', 'Medicine name is required');
                }
                break;
            case 'quantity':
                if (this.quantity !== null && this.quantity > 0) {
                    this.removeFieldError('quantity');
                } else {
                    this.setFieldError('quantity', 'Quantity must be greater than 0');
                }
                break;

            case 'expiry':
                if (this.expiryDate) {
                    this.removeFieldError('expiry');
                } else {
                    this.setFieldError('expiry', 'Expiry date is required');
                }
                break;
        }
    }

    private setFieldError(field: string, message: string) {
        this.errors = {
            ...this.errors,
            [field]: message
        };
    }

    private removeFieldError(field: string) {
        if (!this.errors[field]) {
            return;
        }

        const { [field]: _removed, ...remainingErrors } = this.errors;
        this.errors = remainingErrors;
    }

    openAddDialog() {
        this.isEditMode = false;
        this.resetForm();
        this.showAddDialog = true;
    }

    openEditDialog(item: MedicineItem) {
        this.isEditMode = true;
        this.editingMedicineId = item.id;
        this.selectedMedicineId = Number(item.id.split('-')[1]);
        this.quantity = item.stock;

        const [year, month] = item.expiry.split('-').map(Number);
        this.expiryDate = new Date(year, month - 1, 1);
        this.errors = {};
        this.showAddDialog = true;
    }



    saveMedicine() {
        if (!this.validate()) return;

        const dto: MedicineStockRequestDto = {
            pharmacyId: 1,
            medicineId: this.selectedMedicineId!,
            quantityAvailable: this.quantity!,
            expiryDate: this.expiryDate!.toISOString(),
        };

        this.isSaving = true;

        this.inventoryService.addMedicine(dto).subscribe({
            next: () => {
                this.inventoryService.loadInventory(1);
                this.notificationService.success(
                    'Success',
                    this.isEditMode ? 'Medicine updated successfully.' : 'Medicine added successfully.'
                );
                this.closeAddDialog();
                this.isSaving = false;
            },
            error: () => {
                this.notificationService.error(
                    'Error',
                    this.isEditMode ? 'Unable to update medicine.' : 'Unable to add medicine.'
                );
                this.isSaving = false;
            },
        });
    }



    deleteMedicine() {
        if (!this.editingMedicineId) return;

        const medicineId = Number(this.editingMedicineId.split('-')[1]);
        this.inventoryService.deleteMedicine(medicineId);

        // keep existing behavior (dialog closes immediately) - out of current scope
        this.closeAddDialog();
    }




    closeAddDialog() {
        this.showAddDialog = false;
        this.isEditMode = false;
        this.editingMedicineId = null;
        this.resetForm();
    }

    private resetForm() {
        this.selectedMedicineId = null;
        this.quantity = null;
        this.expiryDate = null;
        this.errors = {};
        this.editingMedicineId = null;
    }


    ngOnInit() {
        this.inventoryService.loadInventory(1);

        this.medicineService.getAllMedicines().subscribe({
            next: (res: MedicineResponseDto[] = []) => {
                this.medicines = (res ?? []).map((m) => ({
                    ...m,
                    displayName: m.strength ? `${m.tradeName} (${m.strength})` : m.tradeName,
                }));
            },
            error: () => {
                this.medicines = [];
            },
        });


    }

}

