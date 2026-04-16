import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/component/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './Inventory/inventory.component';
import { ReservationsComponent } from './Reservations/reservations.component';

export default [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { title: 'Pharmacy Dashboard' }
            },
            {
                path: 'inventory',
                component: InventoryComponent,
                data: { title: 'Inventory' }
            },
            {
                path: 'reservations',
                component: ReservationsComponent,
                data: { title: 'Reservations' }
            }
        ]
    }
] as Routes;
