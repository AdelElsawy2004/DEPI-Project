import { computed, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { PharmacyAdminProfileDto } from '@/core/DTO/Profile/pharmacy-admin-profile.interface';
import { PatientProfileDto } from '@/core/DTO/Profile/patient-profile.interface';

@Injectable({
    providedIn: 'root'
})
export class CurrentUserProfileService extends ApiService {
    private readonly pharmacyAdminProfileState =
        signal<PharmacyAdminProfileDto | null>(null);

    private readonly patientProfileState =
        signal<PatientProfileDto | null>(null);

    readonly pharmacyAdminProfile = computed(
        () => this.pharmacyAdminProfileState()
    );

    readonly patientProfile = computed(
        () => this.patientProfileState()
    );

    loadPharmacyAdminProfile(): Observable<PharmacyAdminProfileDto> {
        return this.http
            .get<PharmacyAdminProfileDto>(
                `${this.apiUrl}/Pharmacy/me/profile`
            )
            .pipe(
                tap((profile) => {
                    this.pharmacyAdminProfileState.set(profile);
                })
            );
    }

    loadPatientProfile(): Observable<PatientProfileDto> {
        return this.http
            .get<PatientProfileDto>(
                `${this.apiUrl}/Auth/me/profile`
            )
            .pipe(
                tap((profile) => {
                    this.patientProfileState.set(profile);
                })
            );
    }

    clearProfile(): void {
        this.pharmacyAdminProfileState.set(null);
        this.patientProfileState.set(null);
    }
}