import { Routes } from '@angular/router';

export default [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
        data: { title: 'Pharmacy Dashboard' }
    },
    {
        path: 'inventory',
        loadComponent: () => import('./Inventory/inventory.component').then((m) => m.InventoryComponent),
        data: { title: 'Inventory' }
    },
    {
        path: 'reservations',
        loadComponent: () => import('./Reservations/reservations.component').then((m) => m.ReservationsComponent),
        data: { title: 'Reservations' }
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then((m) => m.ProfileComponent),
        data: { title: 'Profile' }
    }
] as Routes;
