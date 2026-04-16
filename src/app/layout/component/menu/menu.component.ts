import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../menu-item/menu-items.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './menu.component.html',
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/'] },
                    { label: 'Reservations', icon: 'pi pi-calendar', routerLink: ['/reservations'] },
                    { label: 'Inventory', icon: 'pi pi-box', routerLink: ['/inventory'] },
                    
                ]
            }
        ];
    }
}
