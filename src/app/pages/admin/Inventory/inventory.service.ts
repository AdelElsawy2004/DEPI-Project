import { computed, Injectable, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { MedicineStockRequestDto } from '@/core/DTO/Stock/medicine-stock-request.interface';
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

    private readonly pharmacyId = 1;


    readonly inventoryItems = computed(() => this.inventoryState());
    readonly isLoading = computed(() => this.isLoadingState());

    constructor(private readonly medicineStockService: MedicineStockService) { }


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

    addMedicine(dto: MedicineStockRequestDto) {
        this.isLoadingState.set(true);

        return this.medicineStockService
            .addOrUpdateStock(dto)
            .pipe(
                finalize(() => this.isLoadingState.set(false))
            );
    }

    updateMedicine(_id: string, _value: MedicineFormValue): void {
    }

    deleteMedicine(medicineId: number): void {
        this.isLoadingState.set(true);
        this.medicineStockService
            .deleteStock(this.pharmacyId, medicineId)
            .pipe(
                finalize(() => this.isLoadingState.set(false))
            )
            .subscribe({
                next: () => {
                    this.loadInventory(this.pharmacyId);
                },
                error: () => {
                },
            });
    }
}

