import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

    readonly popularMedicines = ['Amoxicillin', 'Metformin', 'Paracetamol', 'Cetirizine', 'Ibuprofen', 'Omeprazole'];

    constructor(
        public readonly appState: PharmacyStateService,
        public readonly layoutService: LayoutService
    ) {}

    get profileAvatar(): string {
        return this.appState.profile().initials?.trim().charAt(0) || 'P';
    }

    get profileName(): string {
        return this.appState.profile().fullName;
    }

    get profileRole(): string {
        return this.appState.profile().role;
    }

    toggleTheme(): void {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }

    submitSearch(): void {
        this.searchTerm = this.searchTerm.trim();
    }

    selectMedicine(medicine: string): void {
        this.searchTerm = medicine;
    }
}
