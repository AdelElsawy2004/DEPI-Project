import {
  Injectable,
  computed,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-6FH5EJK4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// src/app/pages/admin/Reservations/reservations.service.ts
var STORAGE_KEY = "medfinder.reservations.items";
function resolveInitials(name) {
  const letters = name.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
  return letters || "??";
}
function createId(seed) {
  const normalizedSeed = seed.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const timePart = Date.now().toString(36);
  const randomPart = Math.random().toString(36).slice(2, 8);
  return `${normalizedSeed || "reservation"}-${timePart}-${randomPart}`;
}
function buildReservationItem(value, id) {
  const patientName = value.patientName.trim();
  const medicine = value.medicine.trim();
  const qty = Number(value.qty);
  const status = value.status ?? "Pending";
  return {
    id: id ?? createId(patientName),
    initials: resolveInitials(patientName),
    patientName,
    medicine,
    qty,
    status
  };
}
var DEFAULT_RESERVATIONS = [
  buildReservationItem({ patientName: "Sarah Johnson", medicine: "Amoxicillin 500mg", qty: 2, status: "Pending" }, "reservation-sarah-johnson"),
  buildReservationItem({ patientName: "Michael Chen", medicine: "Metformin 850mg", qty: 1, status: "Confirmed" }, "reservation-michael-chen"),
  buildReservationItem({ patientName: "Emily Davis", medicine: "Lisinopril 10mg", qty: 3, status: "Pending" }, "reservation-emily-davis"),
  buildReservationItem({ patientName: "James Wilson", medicine: "Atorvastatin 20mg", qty: 1, status: "Rejected" }, "reservation-james-wilson"),
  buildReservationItem({ patientName: "Olivia Martinez", medicine: "Omeprazole 20mg", qty: 2, status: "Confirmed" }, "reservation-olivia-martinez"),
  buildReservationItem({ patientName: "Noah Thompson", medicine: "Amlodipine 5mg", qty: 1, status: "Pending" }, "reservation-noah-thompson"),
  buildReservationItem({ patientName: "Ava Anderson", medicine: "Cetirizine 10mg", qty: 4, status: "Confirmed" }, "reservation-ava-anderson"),
  buildReservationItem({ patientName: "Liam Jackson", medicine: "Ibuprofen 400mg", qty: 2, status: "Rejected" }, "reservation-liam-jackson")
];
function normalizeStoredReservation(item) {
  if (!item || typeof item !== "object") {
    return null;
  }
  const rawItem = item;
  const patientName = typeof rawItem.patientName === "string" ? rawItem.patientName.trim() : "";
  const medicine = typeof rawItem.medicine === "string" ? rawItem.medicine.trim() : "";
  const qty = Number(rawItem.qty);
  const status = rawItem.status;
  if (!patientName || !medicine || Number.isNaN(qty)) {
    return null;
  }
  return buildReservationItem({
    patientName,
    medicine,
    qty,
    status: status === "Confirmed" || status === "Rejected" ? status : "Pending"
  }, typeof rawItem.id === "string" && rawItem.id.trim() ? rawItem.id : void 0);
}
var ReservationsService = class _ReservationsService {
  isBrowser = typeof window !== "undefined";
  reservationsState = signal(this.loadReservations(), ...ngDevMode ? [{ debugName: "reservationsState" }] : []);
  reservations = computed(() => this.reservationsState(), ...ngDevMode ? [{ debugName: "reservations" }] : []);
  constructor() {
    effect(() => {
      this.persistReservations(this.reservationsState());
    });
  }
  addReservation(value) {
    const reservation = buildReservationItem(value);
    this.reservationsState.update((items) => [...items, reservation]);
    return reservation;
  }
  updateStatus(id, status) {
    let updatedReservation = null;
    this.reservationsState.update((items) => items.map((reservation) => {
      if (reservation.id !== id) {
        return reservation;
      }
      updatedReservation = __spreadProps(__spreadValues({}, reservation), {
        status
      });
      return updatedReservation;
    }));
    return updatedReservation;
  }
  deleteReservation(id) {
    this.reservationsState.update((items) => items.filter((reservation) => reservation.id !== id));
  }
  loadReservations() {
    const storedReservations = this.readStoredReservations();
    if (storedReservations === null) {
      return [...DEFAULT_RESERVATIONS];
    }
    return storedReservations;
  }
  readStoredReservations() {
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
        return [...DEFAULT_RESERVATIONS];
      }
      if (parsedValue.length === 0) {
        return [];
      }
      const normalizedReservations = parsedValue.map((item) => normalizeStoredReservation(item)).filter((item) => item !== null);
      return normalizedReservations.length > 0 ? normalizedReservations : [...DEFAULT_RESERVATIONS];
    } catch {
      return [...DEFAULT_RESERVATIONS];
    }
  }
  persistReservations(reservations) {
    if (!this.isBrowser) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    } catch {
    }
  }
  static \u0275fac = function ReservationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservationsService, factory: _ReservationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ReservationsService
};
//# sourceMappingURL=chunk-G6NP3LRV.js.map
