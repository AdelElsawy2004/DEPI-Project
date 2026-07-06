import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

export type LocationPromptRole = 'PATIENT' | 'PHARMACYADMIN';

export interface PatientCoordinates {
    latitude: number;
    longitude: number;
}

@Injectable({
    providedIn: 'root'
})
export class LocationPermissionService extends ApiService {
    private readonly promptVisible = signal(false);
    private readonly promptRole = signal<LocationPromptRole | null>(null);
    private readonly patientCoordinates = signal<PatientCoordinates | null>(null);
    private readonly promptHandledKey = 'medfinder_location_prompt_handled';

    readonly isPromptVisible = this.promptVisible.asReadonly();
    readonly activeRole = this.promptRole.asReadonly();

    constructor(private readonly notificationService: NotificationService) {
        super();
    }

    showForRole(role: LocationPromptRole): void {
        if (this.hasPromptBeenHandledInSession()) {
            return;
        }

        this.promptRole.set(role);
        this.promptVisible.set(true);
    }

    dismiss(): void {
        this.markPromptHandledInSession();
        this.promptVisible.set(false);
        this.promptRole.set(null);
    }

    clearSessionState(): void {
        sessionStorage.removeItem(this.promptHandledKey);
        this.promptVisible.set(false);
        this.promptRole.set(null);
        this.patientCoordinates.set(null);
    }

    setPatientCoordinates(coordinates: PatientCoordinates | null): void {
        this.patientCoordinates.set(coordinates);
    }

    getPatientCoordinates(): PatientCoordinates | null {
        return this.patientCoordinates();
    }

    requestCurrentPosition(): Observable<PatientCoordinates> {
        return new Observable((observer) => {
            if (typeof navigator === 'undefined' || !('geolocation' in navigator)) {
                observer.error(new Error('Geolocation is not supported by this browser.'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    observer.next({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    observer.complete();
                },
                (error) => {
                    observer.error(this.mapGeolocationError(error));
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000
                }
            );
        });
    }

    savePharmacyLocation(latitude: number, longitude: number): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/Pharmacy/me/location`, {
            latitude,
            longitude
        });
    }

    private hasPromptBeenHandledInSession(): boolean {
        return sessionStorage.getItem(this.promptHandledKey) === '1';
    }

    private markPromptHandledInSession(): void {
        sessionStorage.setItem(this.promptHandledKey, '1');
    }

    notifySuccess(summary: string, detail?: string): void {
        this.notificationService.success(summary, detail);
    }

    notifyError(summary: string, detail?: string): void {
        this.notificationService.error(summary, detail);
    }

    private mapGeolocationError(error: GeolocationPositionError): Error {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                return new Error('Location permission denied.');
            case error.POSITION_UNAVAILABLE:
                return new Error('Unable to access your current location.');
            case error.TIMEOUT:
                return new Error('Location request timed out.');
            default:
                return new Error('Unable to get current location.');
        }
    }
}
