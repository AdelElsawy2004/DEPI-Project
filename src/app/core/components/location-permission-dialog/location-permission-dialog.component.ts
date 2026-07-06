import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { LocationPermissionService } from '@/core/services/location-permission.service';

@Component({
    selector: 'app-location-permission-dialog',
    standalone: true,
    imports: [CommonModule, ButtonModule, DialogModule],
    template: `
        <p-dialog
            [(visible)]="visible"
            [modal]="true"
            [closable]="false"
            [draggable]="false"
            [resizable]="false"
            [dismissableMask]="false"
            [showHeader]="false"
            styleClass="location-permission-dialog"
            [style]="{ width: 'min(92vw, 420px)' }"
        >
            <div class="location-permission-dialog__content">
                <div class="location-permission-dialog__icon" aria-hidden="true">
                    <i class="pi pi-map-marker"></i>
                </div>
                <h3 class="location-permission-dialog__title">Enable Location</h3>
                <p class="location-permission-dialog__text">
                    {{ message }}
                </p>
                <div class="location-permission-dialog__actions">
                    <button pButton type="button" class="p-button-primary" (click)="allow()">Allow</button>
                    <button pButton type="button" class="p-button-text p-button-secondary" (click)="ignore()">Ignore</button>
                </div>
            </div>
        </p-dialog>
    `,
    styles: [
        `:host { display: block; }`,
        `.location-permission-dialog__content { display: flex; flex-direction: column; align-items: center; gap: 0.9rem; padding: 0.4rem 0.2rem 0.2rem; text-align: center; }`,
        `.location-permission-dialog__icon { display: inline-flex; align-items: center; justify-content: center; width: 3.25rem; height: 3.25rem; border-radius: 999px; background: rgba(59, 130, 246, 0.12); color: #2563eb; font-size: 1.4rem; }`,
        `.location-permission-dialog__title { margin: 0; font-size: 1.15rem; font-weight: 700; color: #0f172a; }`,
        `.location-permission-dialog__text { margin: 0; color: #475569; line-height: 1.55; font-size: 0.95rem; }`,
        `.location-permission-dialog__actions { display: flex; gap: 0.75rem; width: 100%; justify-content: center; margin-top: 0.25rem; }`,
        `:host ::ng-deep .location-permission-dialog .p-dialog-content { padding: 1.25rem 1.25rem 1rem; border-radius: 1rem; }`,
        `:host ::ng-deep .location-permission-dialog .p-dialog { border-radius: 1rem; }`
    ]
})
export class LocationPermissionDialogComponent {
    private readonly locationPermissionService = inject(LocationPermissionService);

    visible = false;
    message = '';

    constructor() {
        effect(() => {
            this.visible = this.locationPermissionService.isPromptVisible();
        });

        effect(() => {
            const role = this.locationPermissionService.activeRole();
            this.message = role === 'PHARMACYADMIN'
                ? 'We use your location so patients can find your pharmacy and see accurate distance information.'
                : 'We use your location to find nearby pharmacies and calculate medicine search distance.';
        });
    }

    allow(): void {
        const role = this.locationPermissionService.activeRole();
        this.locationPermissionService.dismiss();
        this.locationPermissionService.requestCurrentPosition().subscribe({
            next: (coordinates) => {
                this.locationPermissionService.setPatientCoordinates(coordinates);
                if (role === 'PHARMACYADMIN') {
                    this.locationPermissionService.savePharmacyLocation(coordinates.latitude, coordinates.longitude).subscribe({
                        next: () => {
                            this.locationPermissionService.notifySuccess('Location saved', 'Pharmacy location saved successfully.');
                        },
                        error: (err) => {
                            this.locationPermissionService.notifyError('Location update failed', err?.error?.Message || err?.message || 'Unable to save pharmacy location.');
                        }
                    });
                }
            },
            error: (err) => {
                this.locationPermissionService.notifyError('Location unavailable', err?.message || 'Unable to get current location.');
            }
        });
    }

    ignore(): void {
        this.locationPermissionService.dismiss();
    }
}
