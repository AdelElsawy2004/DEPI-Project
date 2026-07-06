import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientReservationsComponent } from './patient-reservations/patient-reservations.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PatientLayoutComponent } from '@/layout/patient-layout/patient-layout.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

export default [
    {
        path: '',
        component: PatientLayoutComponent,

        children: [
            {
                path: 'search',
                component: HomeComponent
            },
            {
                path: 'home',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'search-results',
                component: SearchResultsComponent
            },
            {
                path: 'patient-reservations',
                component: PatientReservationsComponent
            },
            {
                path: 'profile',
                component: PatientProfileComponent
            },
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            }
        ]
    }
] as Routes;
