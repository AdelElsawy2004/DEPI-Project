import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DialogModule } from "primeng/dialog";
import { InputNumberModule } from "primeng/inputnumber";
import { SelectModule } from "primeng/select";
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { InventoryService, MedicineItem } from './inventory.service';
import { PharmacyStateService } from '@/state/pharmacy-state.service';
import { MedicineCategoryService } from '@/core/services/medicine-category.service';
import { MedicineCategoryResponseDto } from '@/core/DTO/Medicines/medicine-category-response.interface';


@Component({
    selector: 'app-inventory',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, DialogModule, InputNumberModule, SelectModule, DatePicker,
        InputTextModule],
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {


    showAddDialog = false;
    isEditMode = false;
    editingMedicineId: string | null = null;

    medicineName = '';
    quantity: number | null = null;
    expiryDate: Date | null = null;
    selectedCategory: string | null = null;
    errors: Record<string, string> = {};

    readonly inventoryPageLink = ['/inventory'];

    categories: { label: string; value: number }[] = [];

    // keep UI/validation unchanged: selectedCategory remains a string for now
    // (inventory items currently store category as a string)


    constructor(
        private router: Router,
        private inventoryService: InventoryService,
        private appState: PharmacyStateService,
        private medicineCategoryService: MedicineCategoryService
    ) {}


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

    private formatExpiry(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
    }

    private validate(): boolean {
        this.errors = {};
        if (!this.medicineName.trim()) this.errors['name'] = 'Medicine name is required';
        if (!this.quantity || this.quantity <= 0) this.errors['quantity'] = 'Quantity must be greater than 0';
        if (!this.selectedCategory) this.errors['category'] = 'Category is required';
        if (!this.expiryDate) this.errors['expiry'] = 'Expiry date is required';
        return Object.keys(this.errors).length === 0;
    }

    validateField(field: 'name' | 'quantity' | 'category' | 'expiry') {
        switch (field) {
            case 'name':
                if (this.medicineName.trim()) {
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
            case 'category':
                if (this.selectedCategory) {
                    this.removeFieldError('category');
                } else {
                    this.setFieldError('category', 'Category is required');
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
        this.medicineName = item.name;
        this.quantity = item.stock;
        this.selectedCategory = item.category;
        const [year, month] = item.expiry.split('-').map(Number);
        this.expiryDate = new Date(year, month - 1, 1);
        this.errors = {};
        this.showAddDialog = true;
    }

    saveMedicine() {
        if (!this.validate()) return;

        const stock = this.quantity ?? 0;

        const item: MedicineItem = {
            id: this.editingMedicineId ?? '',
            name: this.medicineName.trim(),
            category: this.selectedCategory!,
            expiry: this.formatExpiry(this.expiryDate!),
            stock,
            level: this.getLevel(stock)
        };

        if (this.isEditMode && this.editingMedicineId) {
            this.inventoryService.updateMedicine(this.editingMedicineId, item);
        } else {
            this.inventoryService.addMedicine(item);
        }

        this.closeAddDialog();
    }

    deleteMedicine() {
        if (this.editingMedicineId) {
            this.inventoryService.deleteMedicine(this.editingMedicineId);
            this.closeAddDialog();
        }
    }

    closeAddDialog() {
        this.showAddDialog = false;
        this.isEditMode = false;
        this.editingMedicineId = null;
        this.resetForm();
    }

    private resetForm() {
        this.medicineName = '';
        this.quantity = null;
        this.expiryDate = null;
        this.selectedCategory = null;
        this.errors = {};
        this.editingMedicineId = null;
    }

    ngOnInit() {
        this.inventoryService.loadInventory(1);

        this.medicineCategoryService.getAllCategories().subscribe({
            next: (dtos: MedicineCategoryResponseDto[] = []) => {
                this.categories = (dtos ?? []).map((c) => ({
                    label: c.name,
                    value: c.id,
                }));
            },
            error: () => {
                this.categories = [];
            }
        });
    }
}

