import {
  Injectable,
  computed,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-6FH5EJK4.js";

// src/app/pages/admin/Inventory/inventory.service.ts
var STORAGE_KEY = "medfinder.inventory.items";
function getLevel(stock) {
  if (stock >= 100)
    return "High";
  if (stock >= 40)
    return "Normal";
  return "Low";
}
function createId(seed) {
  const normalizedSeed = seed.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const timePart = Date.now().toString(36);
  const randomPart = Math.random().toString(36).slice(2, 8);
  return `${normalizedSeed || "medicine"}-${timePart}-${randomPart}`;
}
function buildMedicineItem(value, id) {
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
var DEFAULT_INVENTORY_ITEMS = [
  buildMedicineItem({ name: "Amoxicillin 500mg", category: "Antibiotic", expiry: "2027-03", stock: 120 }, "amoxicillin-500mg"),
  buildMedicineItem({ name: "Metformin 850mg", category: "Diabetes", expiry: "2026-11", stock: 85 }, "metformin-850mg"),
  buildMedicineItem({ name: "Lisinopril 10mg", category: "Hypertension", expiry: "2027-06", stock: 60 }, "lisinopril-10mg"),
  buildMedicineItem({ name: "Atorvastatin 20mg", category: "Cholesterol", expiry: "2026-09", stock: 200 }, "atorvastatin-20mg"),
  buildMedicineItem({ name: "Omeprazole 20mg", category: "Gastric", expiry: "2026-12", stock: 45 }, "omeprazole-20mg"),
  buildMedicineItem({ name: "Amlodipine 5mg", category: "Hypertension", expiry: "2027-01", stock: 30 }, "amlodipine-5mg"),
  buildMedicineItem({ name: "Cetirizine 10mg", category: "Allergy", expiry: "2027-05", stock: 75 }, "cetirizine-10mg"),
  buildMedicineItem({ name: "Ibuprofen 400mg", category: "Pain Relief", expiry: "2026-08", stock: 52 }, "ibuprofen-400mg")
];
var InventoryService = class _InventoryService {
  isBrowser = typeof window !== "undefined";
  inventoryState = signal(this.loadInventory(), ...ngDevMode ? [{ debugName: "inventoryState" }] : []);
  inventoryItems = computed(() => this.inventoryState(), ...ngDevMode ? [{ debugName: "inventoryItems" }] : []);
  constructor() {
    effect(() => {
      this.persistInventory(this.inventoryState());
    });
  }
  addMedicine(value) {
    const item = buildMedicineItem(value);
    this.inventoryState.update((items) => [...items, item]);
    return item;
  }
  updateMedicine(id, value) {
    const item = buildMedicineItem(value, id);
    let updated = false;
    this.inventoryState.update((items) => items.map((existing) => {
      if (existing.id !== id) {
        return existing;
      }
      updated = true;
      return item;
    }));
    return updated ? item : null;
  }
  deleteMedicine(id) {
    this.inventoryState.update((items) => items.filter((item) => item.id !== id));
  }
  loadInventory() {
    const storedItems = this.readStoredInventory();
    if (storedItems === null) {
      return [...DEFAULT_INVENTORY_ITEMS];
    }
    return storedItems;
  }
  readStoredInventory() {
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
      const normalizedItems = parsedValue.map((item) => this.normalizeStoredItem(item)).filter((item) => item !== null);
      return normalizedItems.length > 0 ? normalizedItems : [...DEFAULT_INVENTORY_ITEMS];
    } catch {
      return [...DEFAULT_INVENTORY_ITEMS];
    }
  }
  normalizeStoredItem(item) {
    if (!item || typeof item !== "object") {
      return null;
    }
    const rawItem = item;
    const name = typeof rawItem.name === "string" ? rawItem.name.trim() : "";
    const category = typeof rawItem.category === "string" ? rawItem.category.trim() : "";
    const expiry = typeof rawItem.expiry === "string" ? rawItem.expiry.trim() : "";
    const stock = Number(rawItem.stock);
    if (!name || !category || !expiry || Number.isNaN(stock)) {
      return null;
    }
    return buildMedicineItem({
      name,
      category,
      expiry,
      stock
    }, typeof rawItem.id === "string" && rawItem.id.trim() ? rawItem.id : void 0);
  }
  persistInventory(items) {
    if (!this.isBrowser) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
    }
  }
  static \u0275fac = function InventoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventoryService, factory: _InventoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  InventoryService
};
//# sourceMappingURL=chunk-GPTXMCFV.js.map
