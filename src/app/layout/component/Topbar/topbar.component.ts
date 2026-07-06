import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LayoutService } from '@/layout/service/layout.service';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { PharmacyStateService } from '@/state/pharmacy-state.service';
import { CurrentUserProfileService } from '@/core/services/current-user-profile.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './topbar.component.html',
    styleUrls: ['../../../layout/layout.component.scss']
})
export class AppTopbar implements OnInit {
    pageTitle: string = '';
    todayDate: string = '';
    isProfileMenuOpen = false;
    readonly profilePageLink = ['/profile'];
    readonly logoutPageLink = ['/auth/login'];

    constructor(
        public layoutService: LayoutService,
        public appState: PharmacyStateService,
        private router: Router,
        private currentUserProfileService: CurrentUserProfileService,
        private elementRef: ElementRef<HTMLElement>
    ) { }

    ngOnInit() {
        this.setDate();

        this.currentUserProfileService
            .loadPharmacyAdminProfile()
            .subscribe({
                error: (error) => {
                    console.error('Failed to load pharmacy admin profile', error);
                }
            });

        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.setPageTitle();
                this.closeProfileMenu();
            });

        this.setPageTitle();
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

    setDate() {
        const today = new Date();
        this.todayDate = today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    setPageTitle() {
        let route = this.router.routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const routeData = route.snapshot.data;

        this.pageTitle = routeData['title'] || 'Dashboard';
    }

    toggleProfileMenu(event: MouseEvent): void {
        event.stopPropagation();
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }

    closeProfileMenu(): void {
        this.isProfileMenuOpen = false;
    }

    onSearchChange(query: string): void {
        this.appState.setSearchQuery(query);
    }

    get searchQuery(): string {
        return this.appState.searchQuery();
    }

    get profileInitials(): string {
        const fullName = this.currentUserProfileService
            .pharmacyAdminProfile()
            ?.fullName;

        if (!fullName) {
            return 'PH';
        }

        return fullName
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase() ?? '')
            .join('');
    }

    get profileName(): string {
        return this.currentUserProfileService
            .pharmacyAdminProfile()
            ?.fullName ?? 'Pharmacist';
    }

    get profileRole(): string {
        return 'Pharmacy Manager';
    }

    get profileEmail(): string {
        return this.currentUserProfileService
            .pharmacyAdminProfile()
            ?.email ?? '';
    }

    toggleTheme(): void {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }
}
