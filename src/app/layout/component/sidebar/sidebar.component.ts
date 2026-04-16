import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../service/layout.service';
import { CommonModule } from '@angular/common';
import { AppMenu } from '../menu/menu.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, RouterModule, CommonModule],
    styleUrls: ['../../../layout/layout.component.scss'],
    templateUrl: './sidebar.component.html'
})
export class AppSidebar {
    fullLogo = 'assets/images/MedFinder-Logo.png';
    collapsedLogo = 'assets/images/MedFinder-Logo-mini.png';

    constructor(
        public el: ElementRef,
        public layoutService: LayoutService
    ) {}

    get isCollapsed(): boolean {
        return this.layoutService.isCollapsed;
    }

    toggleSidebar(): void {
        this.layoutService.toggleSidebar();
    }
}
