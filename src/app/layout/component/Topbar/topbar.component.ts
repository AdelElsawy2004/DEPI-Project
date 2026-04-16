import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LayoutService } from '@/layout/service/layout.service';
import { filter } from 'rxjs';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './topbar.component.html',
    styleUrls: ['../../../layout/layout.component.scss']
})
export class AppTopbar implements OnInit {
    pageTitle: string = '';
    todayDate: string = '';
    isProfileMenuOpen = false;
    readonly profilePageLink = ['/pages/empty'];
    readonly logoutPageLink = ['/auth/login'];

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private elementRef: ElementRef<HTMLElement>
    ) {}

    ngOnInit() {
        this.setDate();

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
}
