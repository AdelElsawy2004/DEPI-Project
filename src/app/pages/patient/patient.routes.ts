import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientReservationsComponent } from './patient-reservations/patient-reservations.component';
import { PatientLayoutComponent } from '../shared/patient-layout/patient-layout.component';

export default [
    {
        path: '',
        component: PatientLayoutComponent,

        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'patient-reservations',
                component: PatientReservationsComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
] as Routes;