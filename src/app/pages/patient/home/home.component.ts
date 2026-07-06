import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LayoutService } from '@/layout/service/layout.service';
import { inject } from '@angular/core';
import { MedicineService } from '@/core/services/medicine.service';
import { MedicineStockService } from '@/core/services/medicine-stock.service';
import { CurrentUserProfileService } from '@/core/services/current-user-profile.service';

@Component({
    selector: 'app-patient-home',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    searchTerm = '';
    isProfileMenuOpen = false;
    readonly profileService = inject(CurrentUserProfileService);
    private readonly medicineService = inject(MedicineService);
    private readonly medicineStockService = inject(MedicineStockService);
    private readonly router = inject(Router);
    popularMedicines: string[] = [];


    isLoading = false;
    hasLoadingError = false;

    constructor(
        public readonly layoutService: LayoutService,
        private readonly elementRef: ElementRef<HTMLElement>
    ) { }

    ngOnInit(): void {
        if (!this.profileService.patientProfile()) {
            this.profileService.loadPatientProfile().subscribe({
                error: (error) => {
                    console.error('Failed to load patient profile', error);
                }
            });
        }

        this.loadPopularMedicines();
        this.testMedicineStock();
    }

    private loadPopularMedicines(): void {

        this.isLoading = true;

        this.medicineService.getAllMedicines().subscribe({

            next: (response) => {
                this.popularMedicines = response.map(medicine => medicine.tradeName);
            },

            error: () => {
                this.hasLoadingError = true;
                this.popularMedicines = [];
            },

            complete: () => {
                this.isLoading = false;
            }

        });
    }

    private testMedicineStock(): void {

        this.medicineStockService.getAllStock().subscribe({

            next: (response) => {
                console.log('Medicine Stock:', response);
            },

            error: (error) => {
                console.error('Medicine Stock Error:', error);
            }

        });

    }

    get profileAvatar(): string {
        return this.buildInitials(this.profileName);
    }

    get profileName(): string {
        return this.profileService.patientProfile()?.fullName ?? 'Patient';
    }

    get profileRole(): string {
        return 'Patient';
    }

    get profileEmail(): string {
        return this.profileService.patientProfile()?.email ?? '';
    }

    toggleTheme(): void {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }

    toggleProfileMenu(event: MouseEvent): void {
        event.stopPropagation();
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }

    closeProfileMenu(): void {
        this.isProfileMenuOpen = false;
    }

    submitSearch(): void {
        const medicineName = this.searchTerm.trim();

        if (!medicineName) {
            return;
        }

        void this.router.navigate(['/patient/search-results'], {
            queryParams: {
                medicine: medicineName
            }
        });
    }

    selectMedicine(medicine: string): void {
        this.searchTerm = medicine;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        if (!this.elementRef.nativeElement.contains(event.target as Node)) {
            this.closeProfileMenu();
        }
    }

    @HostListener('document:keydown.escape')
    onEscapeKey(): void {
        this.closeProfileMenu();
    }

    private buildInitials(name: string): string {
        const initials = name
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part.charAt(0).toUpperCase())
            .join('');

        return initials || 'P';
    }
}
