import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface LandingFeature {
    icon: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule, TagModule],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
    readonly features: LandingFeature[] = [
        {
            icon: 'pi pi-search',
            title: 'Search',
            description: 'Find medicines across multiple pharmacies instantly'
        },
        {
            icon: 'pi pi-map-marker',
            title: 'Locate',
            description: 'See which pharmacies have your medicine in stock'
        },
        {
            icon: 'pi pi-calendar',
            title: 'Reserve',
            description: 'Reserve your medication and pick it up when ready'
        }
    ];
}
