import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '@/layout/service/layout.service';

@Component({
    selector: 'app-patient-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    templateUrl: './patient-layout.component.html',
    styleUrl: './patient-layout.component.scss'
})
export class PatientLayoutComponent {

    isProfileMenuOpen = false;

    profileName = 'Pharmacist';
    profileRole = 'Pharmacist';
    profileEmail = 'pharmacist@example.com';

    get profileAvatar(): string {
        return this.profileName
            .split(' ')
            .map(name => name[0])
            .join('')
            .toUpperCase();
    }

    constructor(
        public layoutService: LayoutService
    ) { }

    toggleProfileMenu(event: Event): void {
        event.stopPropagation();
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }

    closeProfileMenu(): void {
        this.isProfileMenuOpen = false;
    }

    toggleTheme(): void {
        this.layoutService.toggleDarkMode();
        this.closeProfileMenu();
    }

    @HostListener('document:click')
    onDocumentClick(): void {
        this.closeProfileMenu();
    }
}