import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        loadComponent: () => import('./app/pages/landing-page/landing-page.component').then((m) => m.LandingPageComponent)
    },
    {
        path: 'auth',
        loadChildren: () => import('./app/pages/auth/auth.routes').then((m) => m.default)
    },
    {
        path: 'patient',
        loadChildren: () => import('./app/pages/patient/patient.routes').then((m) => m.default)
    },
    {
        path: '',
        loadChildren: () => import('./app/pages/pages.routes').then((m) => m.default)
    },
    {
        path: '**',
        redirectTo: 'auth/error'
    }
];
