import { computed, effect, Injectable, signal } from '@angular/core';

export type ReservationStatus = 'Pending' | 'Confirmed' | 'Rejected';

export interface ReservationItem {
    id: string;
    initials: string;
    patientName: string;
    medicine: string;
    qty: number;
    status: ReservationStatus;
}

export interface ReservationFormValue {
    patientName: string;
    medicine: string;
    qty: number;
    status?: ReservationStatus;
}

const STORAGE_KEY = 'medfinder.reservations.items';

function resolveInitials(name: string): string {
    const letters = name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('');

    return letters || '??';
}

function createId(seed: string): string {
    const normalizedSeed = seed
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const timePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).slice(2, 8);

    return `${normalizedSeed || 'reservation'}-${timePart}-${randomPart}`;
}

function buildReservationItem(value: ReservationFormValue, id?: string): ReservationItem {
    const patientName = value.patientName.trim();
    const medicine = value.medicine.trim();
    const qty = Number(value.qty);
    const status = value.status ?? 'Pending';

    return {
        id: id ?? createId(patientName),
        initials: resolveInitials(patientName),
        patientName,
        medicine,
        qty,
        status
    };
}

const DEFAULT_RESERVATIONS: ReservationItem[] = [
    buildReservationItem({ patientName: 'Sarah Johnson', medicine: 'Amoxicillin 500mg', qty: 2, status: 'Pending' }, 'reservation-sarah-johnson'),
    buildReservationItem({ patientName: 'Michael Chen', medicine: 'Metformin 850mg', qty: 1, status: 'Confirmed' }, 'reservation-michael-chen'),
    buildReservationItem({ patientName: 'Emily Davis', medicine: 'Lisinopril 10mg', qty: 3, status: 'Pending' }, 'reservation-emily-davis'),
    buildReservationItem({ patientName: 'James Wilson', medicine: 'Atorvastatin 20mg', qty: 1, status: 'Rejected' }, 'reservation-james-wilson'),
    buildReservationItem({ patientName: 'Olivia Martinez', medicine: 'Omeprazole 20mg', qty: 2, status: 'Confirmed' }, 'reservation-olivia-martinez'),
    buildReservationItem({ patientName: 'Noah Thompson', medicine: 'Amlodipine 5mg', qty: 1, status: 'Pending' }, 'reservation-noah-thompson'),
    buildReservationItem({ patientName: 'Ava Anderson', medicine: 'Cetirizine 10mg', qty: 4, status: 'Confirmed' }, 'reservation-ava-anderson'),
    buildReservationItem({ patientName: 'Liam Jackson', medicine: 'Ibuprofen 400mg', qty: 2, status: 'Rejected' }, 'reservation-liam-jackson')
];

function normalizeStoredReservation(item: unknown): ReservationItem | null {
    if (!item || typeof item !== 'object') {
        return null;
    }

    const rawItem = item as Partial<ReservationItem>;
    const patientName = typeof rawItem.patientName === 'string' ? rawItem.patientName.trim() : '';
    const medicine = typeof rawItem.medicine === 'string' ? rawItem.medicine.trim() : '';
    const qty = Number(rawItem.qty);
    const status = rawItem.status;

    if (!patientName || !medicine || Number.isNaN(qty)) {
        return null;
    }

    return buildReservationItem(
        {
            patientName,
            medicine,
            qty,
            status: status === 'Confirmed' || status === 'Rejected' ? status : 'Pending'
        },
        typeof rawItem.id === 'string' && rawItem.id.trim() ? rawItem.id : undefined
    );
}

@Injectable({
    providedIn: 'root'
})
export class ReservationsService {
    private readonly isBrowser = typeof window !== 'undefined';

    private readonly reservationsState = signal<ReservationItem[]>(this.loadReservations());

    readonly reservations = computed(() => this.reservationsState());

    constructor() {
        effect(() => {
            this.persistReservations(this.reservationsState());
        });
    }

    addReservation(value: ReservationFormValue): ReservationItem {
        const reservation = buildReservationItem(value);

        this.reservationsState.update((items) => [...items, reservation]);

        return reservation;
    }

    updateStatus(id: string, status: ReservationStatus): ReservationItem | null {
        let updatedReservation: ReservationItem | null = null;

        this.reservationsState.update((items) =>
            items.map((reservation) => {
                if (reservation.id !== id) {
                    return reservation;
                }

                updatedReservation = {
                    ...reservation,
                    status
                };

                return updatedReservation;
            })
        );

        return updatedReservation;
    }

    deleteReservation(id: string): void {
        this.reservationsState.update((items) => items.filter((reservation) => reservation.id !== id));
    }

    private loadReservations(): ReservationItem[] {
        const storedReservations = this.readStoredReservations();

        if (storedReservations === null) {
            return [...DEFAULT_RESERVATIONS];
        }

        return storedReservations;
    }

    private readStoredReservations(): ReservationItem[] | null {
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

            const normalizedReservations = parsedValue
                .map((item) => normalizeStoredReservation(item))
                .filter((item): item is ReservationItem => item !== null);

            return normalizedReservations.length > 0 ? normalizedReservations : [...DEFAULT_RESERVATIONS];
        } catch {
            return [...DEFAULT_RESERVATIONS];
        }
    }

    private persistReservations(reservations: ReservationItem[]): void {
        if (!this.isBrowser) {
            return;
        }

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
        } catch {
            // Ignore storage failures so the UI keeps working.
        }
    }
}
