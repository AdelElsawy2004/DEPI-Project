import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface PharmacySearchResult {
    id: number;
    pharmacyName: string;
    address: string;
    distance: string;
    medicine: string;
    availableUnits: number;
    price: number;
    rating: number;
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

    private readonly pharmacyTemplates: Omit<PharmacySearchResult, 'medicine'>[] = [
        {
            id: 1,
            pharmacyName: 'Hope Pharmacy',
            address: '78 Sphinx Boulevard, Heliopolis',
            distance: '2.1 km away',
            availableUnits: 200,
            price: 40,
            rating: 4.9
        },
        {
            id: 2,
            pharmacyName: 'Al-Shifa Pharmacy',
            address: '45 Ramses Avenue, Maadi',
            distance: '1.2 km away',
            availableUnits: 85,
            price: 42,
            rating: 4.5
        },
        {
            id: 3,
            pharmacyName: 'El-Nile Pharmacy',
            address: '12 Nile Street, Downtown',
            distance: '0.8 km away',
            availableUnits: 120,
            price: 45,
            rating: 4.7
        }
    ];

    readonly defaultMedicineName = 'Amoxicillin';
    private readonly initialMedicineName = this.route.snapshot.queryParamMap.get('medicine')?.trim() || this.defaultMedicineName;

    medicineName = this.initialMedicineName;
    pharmacies: PharmacySearchResult[] = this.buildPharmacies(this.initialMedicineName);

    ngOnInit(): void {
        this.route.queryParamMap
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((queryParamMap) => {
                const medicineName = queryParamMap.get('medicine')?.trim() || this.defaultMedicineName;
                this.medicineName = medicineName;
                this.pharmacies = this.buildPharmacies(medicineName);
            });
    }

    goBack(): void {
        void this.router.navigate(['/patient/search']);
    }

    private buildPharmacies(medicineName: string): PharmacySearchResult[] {
        return this.pharmacyTemplates.map((pharmacy) => ({
            ...pharmacy,
            medicine: `${medicineName} 500mg`
        }));
    }
}
