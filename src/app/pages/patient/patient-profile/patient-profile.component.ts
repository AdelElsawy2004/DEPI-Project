import { Component, inject, OnInit } from '@angular/core';
import { CurrentUserProfileService } from '@/core/services/current-user-profile.service';
import { ReservationService } from '@/core/services/reservation.service';
import { PatientReservationResponseDto } from '@/core/DTO/Reservations/patient-my-reservations.interface';

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
    selector: 'app-patient-profile',
    standalone: true,
    imports: [],
    templateUrl: './patient-profile.component.html',

    // Reuse the exact same design as the Pharmacy Admin profile
    styleUrl: '../../admin/profile/profile.component.scss'
})
export class PatientProfileComponent implements OnInit {
    private readonly profileService = inject(CurrentUserProfileService);
    private readonly reservationService = inject(ReservationService);

    private reservations: PatientReservationResponseDto[] = [];

    ngOnInit(): void {
        if (!this.profileService.patientProfile()) {
            this.profileService.loadPatientProfile().subscribe({
                error: (error) => {
                    console.error('Failed to load patient profile', error);
                }
            });
        }

        this.loadReservations();
    }

    get initials(): string {
        return this.fullName
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase() ?? '')
            .join('') || 'P';
    }

    get fullName(): string {
        return this.profileService.patientProfile()?.fullName ?? 'Patient';
    }

    get role(): string {
        return 'Patient';
    }

    get contacts(): ProfileContact[] {
        const profile = this.profileService.patientProfile();

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
                icon: 'pi pi-map-marker',
                label: 'City',
                value: profile.city || 'Not added yet'
            }
        ];
    }

    get profileFields(): ProfileField[] {
        const profile = this.profileService.patientProfile();

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
                label: 'City',
                value: profile.city || 'Not added yet'
            },
            {
                label: 'Member Since',
                value: this.formatMemberSince(profile.createdAt)
            }
        ];
    }

    get quickStats(): QuickStat[] {
        const pending = this.reservations.filter(
            (reservation) => reservation.status === 'Pending'
        ).length;

        const confirmed = this.reservations.filter(
            (reservation) =>
                reservation.status === 'Confirmed' ||
                reservation.status === 'Accepted'
        ).length;

        return [
            {
                value: this.reservations.length.toLocaleString('en-US'),
                label: 'Reservations'
            },
            {
                value: pending.toLocaleString('en-US'),
                label: 'Pending'
            },
            {
                value: confirmed.toLocaleString('en-US'),
                label: 'Confirmed'
            }
        ];
    }

    get activities(): ActivityItem[] {
        return [...this.reservations]
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            .slice(0, 5)
            .map((reservation) => ({
                icon: this.getActivityIcon(reservation.status),
                time: this.getRelativeTime(reservation.createdAt),
                title: this.getActivityTitle(reservation),
                tone: this.getActivityTone(reservation.status)
            }));
    }

    private loadReservations(): void {
        this.reservationService.getMyReservations().subscribe({
            next: (response) => {
                this.reservations = response.reservations ?? [];
            },
            error: (error) => {
                console.error('Failed to load patient reservations', error);
                this.reservations = [];
            }
        });
    }

    private getActivityTitle(
        reservation: PatientReservationResponseDto
    ): string {
        switch (reservation.status) {
            case 'Confirmed':
            case 'Accepted':
                return `${reservation.medicineName} reservation confirmed`;

            case 'Rejected':
                return `${reservation.medicineName} reservation rejected`;

            case 'Cancelled':
                return `${reservation.medicineName} reservation cancelled`;

            case 'PickedUp':
                return `Picked up ${reservation.medicineName}`;

            case 'Pending':
            default:
                return `Reserved ${reservation.medicineName} from ${reservation.pharmacyName}`;
        }
    }

    private getActivityIcon(status: string): string {
        switch (status) {
            case 'Confirmed':
            case 'Accepted':
                return 'pi pi-check';

            case 'Rejected':
            case 'Cancelled':
                return 'pi pi-times';

            case 'PickedUp':
                return 'pi pi-shopping-bag';

            case 'Pending':
            default:
                return 'pi pi-clock';
        }
    }

    private getActivityTone(
        status: string
    ): 'green' | 'blue' | 'red' | 'gray' {
        switch (status) {
            case 'Confirmed':
            case 'Accepted':
            case 'PickedUp':
                return 'green';

            case 'Rejected':
            case 'Cancelled':
                return 'red';

            case 'Pending':
                return 'blue';

            default:
                return 'gray';
        }
    }

    private getRelativeTime(dateValue: string): string {
        if (!dateValue) {
            return '';
        }

        // Backend stores CreatedAt using DateTime.UtcNow,
        // but the returned string has no Z, so JavaScript reads it as local time.
        const normalizedDate = /Z$|[+-]\d{2}:\d{2}$/.test(dateValue)
            ? dateValue
            : `${dateValue}Z`;

        const date = new Date(normalizedDate);
        const diffInMilliseconds = Math.max(0, Date.now() - date.getTime());
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

        if (diffInMinutes < 1) {
            return 'Just now';
        }

        if (diffInMinutes < 60) {
            return `${diffInMinutes} min ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);

        if (diffInHours < 24) {
            return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'
                } ago`;
        }

        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInDays < 30) {
            return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'
                } ago`;
        }

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    private formatMemberSince(dateValue: string): string {
        if (!dateValue) {
            return 'Unknown';
        }

        return new Date(dateValue).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }
}