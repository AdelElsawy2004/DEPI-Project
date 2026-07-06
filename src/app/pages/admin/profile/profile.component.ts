import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InventoryService } from '../Inventory/inventory.service';
import { ReservationService } from '@/core/services/reservation.service';
import { CurrentUserProfileService } from '@/core/services/current-user-profile.service';

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
    label: string;
    value: string;
}

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
export class ProfileComponent implements OnInit {
    private readonly profileService = inject(CurrentUserProfileService);
    private readonly inventoryService = inject(InventoryService);
    private readonly reservationsService = inject(ReservationService);

    ngOnInit(): void {
        const existingProfile = this.profileService.pharmacyAdminProfile();

        if (existingProfile) {
            this.loadProfileData(existingProfile.pharmacyId);
            return;
        }

        this.profileService.loadPharmacyAdminProfile().subscribe({
            next: (profile) => {
                this.loadProfileData(profile.pharmacyId);
            },
            error: (error) => {
                console.error('Failed to load pharmacy admin profile', error);
            }
        });
    }

    private loadProfileData(pharmacyId: number | null): void {
        this.reservationsService.loadMyReservations();

        if (pharmacyId) {
            this.inventoryService.loadInventory(pharmacyId);
        }
    }

    get initials(): string {
        const name = this.fullName;

        return name
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase() ?? '')
            .join('') || 'PH';
    }

    get fullName(): string {
        return this.profileService.pharmacyAdminProfile()?.fullName ?? 'Pharmacist';
    }

    get role(): string {
        return 'Pharmacy Manager';
    }

    get contacts(): ProfileContact[] {
        const profile = this.profileService.pharmacyAdminProfile();

        if (!profile) {
            return [];
        }

        return [
            {
                icon: 'pi pi-envelope',
                label: 'Email',
                value: profile.email
            },
            {
                icon: 'pi pi-building',
                label: 'Pharmacy',
                value: profile.pharmacyName
            },
            {
                icon: 'pi pi-map-marker',
                label: 'Location',
                value: profile.address?.trim() || profile.city || 'Not added yet'
            }
        ];
    }

    get profileFields(): ProfileField[] {
        const profile = this.profileService.pharmacyAdminProfile();

        if (!profile) {
            return [];
        }

        return [
            {
                label: 'Full Name',
                value: profile.fullName
            },
            {
                label: 'Email Address',
                value: profile.email
            },
            {
                label: 'Address',
                value: profile.address?.trim() || profile.city || 'Not added yet'
            },
            {
                label: 'Pharmacy Name',
                value: profile.pharmacyName
            }
        ];
    }

    get quickStats(): QuickStat[] {
        const reservations = this.reservationsService.reservations();
        const medicines = this.inventoryService.inventoryItems();

        const uniquePatients = new Set(
            reservations
                .map((reservation) => reservation.patientName.trim().toLowerCase())
                .filter(Boolean)
        ).size;

        return [
            {
                value: reservations.length.toLocaleString('en-US'),
                label: 'Reservations'
            },
            {
                value: medicines.length.toLocaleString('en-US'),
                label: 'Medicines'
            },
            {
                value: uniquePatients.toLocaleString('en-US'),
                label: 'Patients'
            }
        ];
    }

    get activities(): ActivityItem[] {
        return this.reservationsService
            .reservations()
            .filter((reservation) =>
                reservation.status === 'Confirmed' ||
                reservation.status === 'Rejected'
            )
            .map((reservation): ActivityItem => {
                const isConfirmed = reservation.status === 'Confirmed';

                return {
                    icon: isConfirmed ? 'pi pi-check' : 'pi pi-times',
                    time: this.formatRelativeTime(reservation.createdAt),
                    title: `${reservation.status} reservation #${reservation.id} - ${reservation.medicine}`,
                    tone: isConfirmed ? 'green' : 'red'
                };
            })
            .slice(0, 5);
    }

    private formatRelativeTime(dateValue: string): string {
        const date = new Date(dateValue);
        const now = new Date();

        const differenceInSeconds = Math.floor(
            (now.getTime() - date.getTime()) / 1000
        );

        if (differenceInSeconds < 60) {
            return 'Just now';
        }

        const minutes = Math.floor(differenceInSeconds / 60);

        if (minutes < 60) {
            return `${minutes} min${minutes === 1 ? '' : 's'} ago`;
        }

        const hours = Math.floor(minutes / 60);

        if (hours < 24) {
            return `${hours} hour${hours === 1 ? '' : 's'} ago`;
        }

        const days = Math.floor(hours / 24);

        return `${days} day${days === 1 ? '' : 's'} ago`;
    }
}