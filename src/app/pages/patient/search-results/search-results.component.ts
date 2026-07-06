import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SearchService } from '@/core/services/search.service';
import { SearchResultDto } from '@/core/DTO/Search/search-response.interface';
import { ReservationService } from '@/core/services/reservation.service';
import { NotificationService } from '@/core/services/notification.service';
import { CreateReservationRequestDto } from '@/core/DTO/Reservations/create-reservation-request.interface';
import { LocationPermissionService } from '@/core/services/location-permission.service';

interface DisplaySearchResult {
    pharmacyId: number;
    medicineId: number;
    pharmacyName: string;
    address: string;
    distance?: string;
    medicine: string;
    availableUnits: number;
    price: number;
    rating?: number | null;
    pharmacyPhone?: string | null;
}

@Component({
    selector: 'app-search-results',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './search-results.component.html',
    styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);
    private readonly searchService = inject(SearchService);
    private readonly reservationService = inject(ReservationService);
    private readonly notificationService = inject(NotificationService);
    private readonly locationPermissionService = inject(LocationPermissionService);

    

    readonly defaultMedicineName = 'Amoxicillin';
    private readonly initialMedicineName = this.route.snapshot.queryParamMap.get('medicine')?.trim() || this.defaultMedicineName;

    medicineName = this.initialMedicineName;
    pharmacies: DisplaySearchResult[] = [];

    isLoading = false;
    hasLoadingError = false;
    private reserving = new Set<string>();

    private keyForItem(item: DisplaySearchResult): string {
        return `${item.pharmacyId}_${item.medicineId}`;
    }

    isReserving(item: DisplaySearchResult): boolean {
        return this.reserving.has(this.keyForItem(item));
    }

    ngOnInit(): void {
        this.route.queryParamMap
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((queryParamMap) => {
                const medicineName = queryParamMap.get('medicine')?.trim() || this.defaultMedicineName;
                this.medicineName = medicineName;
                this.loadSearchResults(medicineName);
            });
    }

    goBack(): void {
        void this.router.navigate(['/patient/search']);
    }

    private loadSearchResults(medicineName: string): void {
        this.isLoading = true;
        this.hasLoadingError = false;
        this.pharmacies = [];

        const coordinates = this.locationPermissionService.getPatientCoordinates();
        const latitude = coordinates?.latitude;
        const longitude = coordinates?.longitude;

        this.searchService.searchMedicine(medicineName, latitude, longitude).subscribe({
            next: (response) => {
                const results = response.searchResults || [];
                this.pharmacies = results.map((r: SearchResultDto) => this.mapToDisplay(r));
            },
            error: () => {
                this.hasLoadingError = true;
                this.pharmacies = [];
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }

    private mapToDisplay(r: SearchResultDto): DisplaySearchResult {
        return {
            pharmacyId: r.pharmacyId,
            medicineId: r.medicineId,
            pharmacyName: r.pharmacyName,
            address: r.pharmacyAddress,
            distance: r.distanceInKm != null ? `${r.distanceInKm} km away` : '',
            medicine: r.medicineName,
            availableUnits: r.quantityAvailable,
            price: Number(r.price),
            rating: null,
            pharmacyPhone: r.pharmacyPhone ?? null
        };
    }

    reserve(item: DisplaySearchResult): void {
        if (this.isReserving(item)) return;

        const key = this.keyForItem(item);
        this.reserving.add(key);

        const payload: CreateReservationRequestDto = {
            pharmacyId: item.pharmacyId,
            medicineId: item.medicineId,
            quantity: 1
        };

        this.reservationService.createReservation(payload).subscribe({
            next: () => {
                this.notificationService.success('Reservation created', 'The reservation was created successfully.');
            },
            error: (err) => {
                const message = err?.error?.Message || err?.message || 'Failed to create reservation';
                this.notificationService.error('Reservation failed', message);
            },
            complete: () => {
                this.reserving.delete(key);
            }
        });
    }
}
