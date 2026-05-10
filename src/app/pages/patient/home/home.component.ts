import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PharmacyStateService } from '@/state/pharmacy-state.service';
import { LayoutService } from '@/layout/service/layout.service';

@Component({
    selector: 'app-patient-home',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    searchTerm = '';
    isProfileMenuOpen = false;

    readonly popularMedicines = ['Amoxicillin', 'Metformin', 'Paracetamol', 'Cetirizine', 'Ibuprofen', 'Omeprazole'];
    readonly defaultProfileName = 'Dr. Pharmacist';

    constructor(
        public readonly appState: PharmacyStateService,
        public readonly layoutService: LayoutService,
        private readonly elementRef: ElementRef<HTMLElement>
    ) {}

    get profileAvatar(): string {
        return this.buildInitials(this.profileName);
    }

    get profileName(): string {
        const fullName = this.appState.profile().fullName.trim();

        if (!fullName || fullName === this.defaultProfileName) {
            return 'Patient';
        }

        return fullName;
    }

    get profileRole(): string {
        if (this.isPlaceholderProfile()) {
            return 'Patient';
        }

        return this.appState.profile().role.trim() || 'Patient';
    }

    get profileEmail(): string {
        if (this.isPlaceholderProfile()) {
            return 'patient@medfinder.com';
        }

        return this.appState.profile().email.trim() || 'patient@medfinder.com';
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
        this.searchTerm = this.searchTerm.trim();
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

    private isPlaceholderProfile(): boolean {
        return this.appState.profile().fullName.trim() === this.defaultProfileName;
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
