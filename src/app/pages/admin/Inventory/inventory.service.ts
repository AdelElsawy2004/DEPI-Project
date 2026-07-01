import { computed, Injectable, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { MedicineStockService } from '@/core/services/medicine-stock.service';
import { MedicineStockResponseDto } from '@/core/DTO/Stock/medicine-stock-response.interface';

export interface MedicineFormValue {
    name: string;
    category: string;
    expiry: string;
    stock: number;
}



export interface MedicineItem extends MedicineFormValue {
    id: string;
    level: string;
}

function getLevel(stock: number): string {
    if (stock >= 100) return 'High';
    if (stock >= 40) return 'Normal';
    return 'Low';
}

function toMedicineItem(dto: MedicineStockResponseDto): MedicineItem {
    const expiry = dto.expiryDate?.split('T')[0] ?? '';
    
    return {
        id: `${dto.pharmacyId}-${dto.medicineId}`,
        name: dto.medicineName,
        category: '',
        expiry,
        stock: dto.quantityAvailable,
        level: getLevel(dto.quantityAvailable),
    };
}

@Injectable({
    providedIn: 'root',
})
export class InventoryService {
    private readonly inventoryState = signal<MedicineItem[]>([]);
    private readonly isLoadingState = signal<boolean>(false);

    readonly inventoryItems = computed(() => this.inventoryState());
    readonly isLoading = computed(() => this.isLoadingState());

    constructor(private readonly medicineStockService: MedicineStockService) {}

    loadInventory(pharmacyId: number): void {
        this.isLoadingState.set(true);

        this.medicineStockService
            .getStockByPharmacy(pharmacyId)
            .pipe(
                finalize(() => {
                    this.isLoadingState.set(false);
                })
            )
            .subscribe({
                next: (dtos) => {
                    const list = (dtos ?? []).map(toMedicineItem);
                    this.inventoryState.set(list);
                },
                error: () => {
                    this.inventoryState.set([]);
                },
            });
    }

    addMedicine(value: MedicineFormValue): MedicineItem {
        const item: MedicineItem = {
            id: `${Date.now()}`,
            name: value.name,
            category: value.category,
            expiry: value.expiry,
            stock: value.stock,
            level: getLevel(value.stock),
        };

        this.inventoryState.update((items) => [...items, item]);
        return item;
    }

    updateMedicine(id: string, value: MedicineFormValue): MedicineItem | null {
        let updated: MedicineItem | null = null;

        this.inventoryState.update((items) => {
            const next = items.map((existing) => {
                if (existing.id !== id) return existing;

                updated = {
                    ...existing,
                    name: value.name,
                    category: value.category,
                    expiry: value.expiry,
                    stock: value.stock,
                    level: getLevel(value.stock),
                };

                return updated!;
            });

            return next;
        });

        return updated;
    }

    deleteMedicine(id: string): void {
        this.inventoryState.update((items) => items.filter((i) => i.id !== id));
    }
}

