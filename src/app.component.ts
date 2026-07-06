import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationPermissionDialogComponent } from './app/core/components/location-permission-dialog/location-permission-dialog.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, LocationPermissionDialogComponent],
    template: `<router-outlet></router-outlet><app-location-permission-dialog></app-location-permission-dialog>`
})
export class AppComponent {}
