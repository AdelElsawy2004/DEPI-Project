import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PharmacyStateService, PharmacistProfile } from '@/state/pharmacy-state.service';
import { InventoryService } from '../Inventory/inventory.service';
import { ReservationsService } from '../Reservations/reservations.service';

interface ProfileContact {
    icon: string;
    label: string;
    value: string;
}

interface QuickStat {
    label: string;
    value: string;
}

interface ProfileField {
    key: ProfileFieldKey;
    label: string;
    value: string;
}

type ProfileFieldKey = 'fullName' | 'email' | 'phone' | 'pharmacyName' | 'licenseNumber' | 'address';

interface ActivityItem {
    icon: string;
    time: string;
    title: string;
    tone: 'green' | 'blue' | 'red' | 'gray';
}

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    private readonly appState = inject(PharmacyStateService);
    private readonly inventoryService = inject(InventoryService);
    private readonly reservationsService = inject(ReservationsService);
    isEditMode = false;

    profileFields: ProfileField[] = this.buildProfileFields(this.appState.profile());

    readonly activities: ActivityItem[] = [
        {
            icon: 'pi pi-check',
            time: '2 hours ago',
            title: 'Confirmed reservation #204',
            tone: 'green'
        },
        {
            icon: 'pi pi-box',
            time: '5 hours ago',
            title: 'Updated stock for Ibuprofen',
            tone: 'blue'
        },
        {
            icon: 'pi pi-plus',
            time: '1 day ago',
            title: 'Added new medicine: Paracetamol',
            tone: 'blue'
        },
        {
            icon: 'pi pi-times',
            time: '2 days ago',
            title: 'Rejected reservation #198',
            tone: 'red'
        },
        {
            icon: 'pi pi-user',
            time: '3 days ago',
            title: 'Updated profile information',
            tone: 'gray'
        }
    ];

    get initials(): string {
        return this.appState.profile().initials;
    }

    get fullName(): string {
        return this.appState.profile().fullName;
    }

    get role(): string {
        return this.appState.profile().role;
    }

    get contacts(): ProfileContact[] {
        const profile = this.appState.profile();

        return [
            { icon: 'pi pi-envelope', label: 'Email', value: profile.email },
            { icon: 'pi pi-phone', label: 'Phone', value: profile.phone },
            { icon: 'pi pi-map-marker', label: 'Address', value: profile.address }
        ];
    }

    get quickStats(): QuickStat[] {
        const reservations = this.reservationsService.reservations();
        const medicines = this.inventoryService.inventoryItems();
        const uniquePatients = new Set(reservations.map((reservation) => reservation.patientName.toLowerCase())).size;

        return [
            { value: reservations.length.toLocaleString('en-US'), label: 'Reservations' },
            { value: medicines.length.toLocaleString('en-US'), label: 'Medicines' },
            { value: uniquePatients.toLocaleString('en-US'), label: 'Patients' },
            { value: '3', label: 'Years Active' }
        ];
    }

    toggleEditMode(): void {
        if (this.isEditMode) {
            this.saveProfile();
            this.isEditMode = false;
            return;
        }

        this.profileFields = this.buildProfileFields(this.appState.profile());
        this.isEditMode = true;
    }

    get editButtonLabel(): string {
        return this.isEditMode ? 'Save Profile' : 'Edit Profile';
    }

    get editButtonIcon(): string {
        return this.isEditMode ? 'pi pi-check' : 'pi pi-pencil';
    }

    private saveProfile(): void {
        const profilePatch = this.profileFields.reduce((accumulator, field) => {
            accumulator[field.key] = field.value.trim();
            return accumulator;
        }, {} as Record<ProfileFieldKey, string>);

        this.appState.updateProfile({
            fullName: profilePatch.fullName,
            email: profilePatch.email,
            phone: profilePatch.phone,
            pharmacyName: profilePatch.pharmacyName,
            licenseNumber: profilePatch.licenseNumber,
            address: profilePatch.address
        });

        this.profileFields = this.buildProfileFields(this.appState.profile());
    }

    private buildProfileFields(profile: PharmacistProfile): ProfileField[] {
        return [
            { key: 'fullName', label: 'Full Name', value: profile.fullName },
            { key: 'email', label: 'Email Address', value: profile.email },
            { key: 'phone', label: 'Phone Number', value: profile.phone },
            { key: 'pharmacyName', label: 'Pharmacy Name', value: profile.pharmacyName },
            { key: 'licenseNumber', label: 'License Number', value: profile.licenseNumber },
            { key: 'address', label: 'Address', value: profile.address }
        ];
    }
}
