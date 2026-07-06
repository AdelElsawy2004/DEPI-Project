import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '@/layout/service/layout.service';
import { CurrentUserProfileService } from '@/core/services/current-user-profile.service';

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
export class PatientLayoutComponent implements OnInit {
    private readonly profileService = inject(CurrentUserProfileService);

    isProfileMenuOpen = false;

    constructor(
        public layoutService: LayoutService
    ) { }

    ngOnInit(): void {
        if (!this.profileService.patientProfile()) {
            this.profileService.loadPatientProfile().subscribe({
                error: (error) => {
                    console.error('Failed to load patient profile', error);
                }
            });
        }
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

    get profileAvatar(): string {
        return this.profileName
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase() ?? '')
            .join('') || 'P';
    }

    toggleProfileMenu(event: Event): void {
        event.stopPropagation();
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }

    closeProfileMenu(): void {
        this.isProfileMenuOpen = false;
    }

    toggleTheme(): void {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));

        this.closeProfileMenu();
    }

    @HostListener('document:click')
    onDocumentClick(): void {
        this.closeProfileMenu();
    }
}