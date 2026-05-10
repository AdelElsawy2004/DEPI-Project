import { computed, effect, Injectable, signal } from '@angular/core';

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

const STORAGE_KEY = 'medfinder.inventory.items';

function getLevel(stock: number): string {
    if (stock >= 100) return 'High';
    if (stock >= 40) return 'Normal';
    return 'Low';
}

function createId(seed: string): string {
    const normalizedSeed = seed
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const timePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).slice(2, 8);

    return `${normalizedSeed || 'medicine'}-${timePart}-${randomPart}`;
}

function buildMedicineItem(value: MedicineFormValue, id?: string): MedicineItem {
    const name = value.name.trim();
    const category = value.category.trim();
    const expiry = value.expiry.trim();
    const stock = Number(value.stock);

    return {
        id: id ?? createId(name),
        name,
        category,
        expiry,
        stock,
        level: getLevel(stock)
    };
}

const DEFAULT_INVENTORY_ITEMS: MedicineItem[] = [
    buildMedicineItem({ name: 'Amoxicillin 500mg', category: 'Antibiotic', expiry: '2027-03', stock: 120 }, 'amoxicillin-500mg'),
    buildMedicineItem({ name: 'Metformin 850mg', category: 'Diabetes', expiry: '2026-11', stock: 85 }, 'metformin-850mg'),
    buildMedicineItem({ name: 'Lisinopril 10mg', category: 'Hypertension', expiry: '2027-06', stock: 60 }, 'lisinopril-10mg'),
    buildMedicineItem({ name: 'Atorvastatin 20mg', category: 'Cholesterol', expiry: '2026-09', stock: 200 }, 'atorvastatin-20mg'),
    buildMedicineItem({ name: 'Omeprazole 20mg', category: 'Gastric', expiry: '2026-12', stock: 45 }, 'omeprazole-20mg'),
    buildMedicineItem({ name: 'Amlodipine 5mg', category: 'Hypertension', expiry: '2027-01', stock: 30 }, 'amlodipine-5mg'),
    buildMedicineItem({ name: 'Cetirizine 10mg', category: 'Allergy', expiry: '2027-05', stock: 75 }, 'cetirizine-10mg'),
    buildMedicineItem({ name: 'Ibuprofen 400mg', category: 'Pain Relief', expiry: '2026-08', stock: 52 }, 'ibuprofen-400mg')
];

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private readonly isBrowser = typeof window !== 'undefined';
    private readonly inventoryState = signal<MedicineItem[]>(this.loadInventory());

    readonly inventoryItems = computed(() => this.inventoryState());

    constructor() {
        effect(() => {
            this.persistInventory(this.inventoryState());
        });
    }

    addMedicine(value: MedicineFormValue): MedicineItem {
        const item = buildMedicineItem(value);

        this.inventoryState.update((items) => [...items, item]);

        return item;
    }

    updateMedicine(id: string, value: MedicineFormValue): MedicineItem | null {
        const item = buildMedicineItem(value, id);
        let updated = false;

        this.inventoryState.update((items) =>
            items.map((existing) => {
                if (existing.id !== id) {
                    return existing;
                }

                updated = true;
                return item;
            })
        );

        return updated ? item : null;
    }

    deleteMedicine(id: string): void {
        this.inventoryState.update((items) => items.filter((item) => item.id !== id));
    }

    private loadInventory(): MedicineItem[] {
        const storedItems = this.readStoredInventory();

        if (storedItems === null) {
            return [...DEFAULT_INVENTORY_ITEMS];
        }

        return storedItems;
    }

    private readStoredInventory(): MedicineItem[] | null {
        if (!this.isBrowser) {
            return null;
        }

        try {
            const storedValue = localStorage.getItem(STORAGE_KEY);

            if (storedValue === null) {
                return null;
            }

            const parsedValue = JSON.parse(storedValue);

            if (!Array.isArray(parsedValue)) {
                return [...DEFAULT_INVENTORY_ITEMS];
            }

            if (parsedValue.length === 0) {
                return [];
            }

            const normalizedItems = parsedValue
                .map((item) => this.normalizeStoredItem(item))
                .filter((item): item is MedicineItem => item !== null);

            return normalizedItems.length > 0 ? normalizedItems : [...DEFAULT_INVENTORY_ITEMS];
        } catch {
            return [...DEFAULT_INVENTORY_ITEMS];
        }
    }

    private normalizeStoredItem(item: unknown): MedicineItem | null {
        if (!item || typeof item !== 'object') {
            return null;
        }

        const rawItem = item as Partial<MedicineItem> & { id?: string };
        const name = typeof rawItem.name === 'string' ? rawItem.name.trim() : '';
        const category = typeof rawItem.category === 'string' ? rawItem.category.trim() : '';
        const expiry = typeof rawItem.expiry === 'string' ? rawItem.expiry.trim() : '';
        const stock = Number(rawItem.stock);

        if (!name || !category || !expiry || Number.isNaN(stock)) {
            return null;
        }

        return buildMedicineItem(
            {
                name,
                category,
                expiry,
                stock
            },
            typeof rawItem.id === 'string' && rawItem.id.trim() ? rawItem.id : undefined
        );
    }

    private persistInventory(items: MedicineItem[]): void {
        if (!this.isBrowser) {
            return;
        }

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // Ignore storage errors so the UI keeps working.
        }
    }
}
