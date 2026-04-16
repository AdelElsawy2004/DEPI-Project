import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/layout.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { InventoryComponent } from '@/pages/Inventory/inventory.component';
import { ReservationsComponent } from '@/pages/Reservations/reservations.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
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
            },
        ]
    },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
];
