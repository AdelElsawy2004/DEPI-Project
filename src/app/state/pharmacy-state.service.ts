import { computed, effect, Injectable, signal } from '@angular/core';

export interface PharmacistProfile {
    initials: string;
    fullName: string;
    role: string;
    email: string;
    phone: string;
    pharmacyName: string;
    licenseNumber: string;
    address: string;
}

const STORAGE_KEY = 'medfinder.pharmacist.profile';

const DEFAULT_PROFILE: PharmacistProfile = {
    initials: 'PH',
    fullName: 'Dr. Pharmacist',
    role: 'Pharmacy Manager',
    email: 'admin@pharmacy.com',
    phone: '+20 100 123 4567',
    pharmacyName: 'MedFinder Pharmacy',
    licenseNumber: 'PH-L-48291',
    address: '123 Health St, Cairo, Egypt'
};

function sanitizeProfile(profile: Partial<PharmacistProfile>): PharmacistProfile {
    return {
        initials: typeof profile.initials === 'string' && profile.initials.trim() ? profile.initials.trim() : DEFAULT_PROFILE.initials,
        fullName: typeof profile.fullName === 'string' && profile.fullName.trim() ? profile.fullName.trim() : DEFAULT_PROFILE.fullName,
        role: typeof profile.role === 'string' && profile.role.trim() ? profile.role.trim() : DEFAULT_PROFILE.role,
        email: typeof profile.email === 'string' && profile.email.trim() ? profile.email.trim() : DEFAULT_PROFILE.email,
        phone: typeof profile.phone === 'string' && profile.phone.trim() ? profile.phone.trim() : DEFAULT_PROFILE.phone,
        pharmacyName: typeof profile.pharmacyName === 'string' && profile.pharmacyName.trim() ? profile.pharmacyName.trim() : DEFAULT_PROFILE.pharmacyName,
        licenseNumber: typeof profile.licenseNumber === 'string' && profile.licenseNumber.trim() ? profile.licenseNumber.trim() : DEFAULT_PROFILE.licenseNumber,
        address: typeof profile.address === 'string' && profile.address.trim() ? profile.address.trim() : DEFAULT_PROFILE.address
    };
}

function loadProfile(isBrowser: boolean): PharmacistProfile {
    if (!isBrowser) {
        return { ...DEFAULT_PROFILE };
    }

    try {
        const storedValue = localStorage.getItem(STORAGE_KEY);

        if (!storedValue) {
            return { ...DEFAULT_PROFILE };
        }

        const parsedValue = JSON.parse(storedValue);

        if (!parsedValue || typeof parsedValue !== 'object') {
            return { ...DEFAULT_PROFILE };
        }

        return sanitizeProfile(parsedValue as Partial<PharmacistProfile>);
    } catch {
        return { ...DEFAULT_PROFILE };
    }
}

@Injectable({
    providedIn: 'root'
})
export class PharmacyStateService {
    private readonly isBrowser = typeof window !== 'undefined';

    private readonly profileState = signal<PharmacistProfile>(loadProfile(this.isBrowser));

    private readonly searchState = signal('');

    readonly profile = computed(() => this.profileState());

    readonly searchQuery = computed(() => this.searchState());

    constructor() {
        effect(() => {
            this.persistProfile(this.profileState());
        });
    }

    setSearchQuery(query: string): void {
        this.searchState.set(query);
    }

    clearSearchQuery(): void {
        this.searchState.set('');
    }

    updateProfile(patch: Partial<PharmacistProfile>): PharmacistProfile {
        let updatedProfile = this.profileState();

        this.profileState.update((current) => {
            const nextProfile = sanitizeProfile({
                ...current,
                ...patch
            });

            updatedProfile = nextProfile;
            return nextProfile;
        });

        return updatedProfile;
    }

    resetProfile(): void {
        this.profileState.set({ ...DEFAULT_PROFILE });
    }

    private persistProfile(profile: PharmacistProfile): void {
        if (!this.isBrowser) {
            return;
        }

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
        } catch {
            // Ignore storage failures so the UI stays usable.
        }
    }
}
