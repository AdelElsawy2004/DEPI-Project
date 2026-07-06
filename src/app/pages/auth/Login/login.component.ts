import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { ToastModule } from 'primeng/toast';
import { NotificationService } from '@/core/services/notification.service';
import { AuthSessionService } from '@/core/services/auth-session.service';
import { AuthService } from '@/core/services/auth.service';
import type { LoginRequestDto } from '@/core/DTO/Auth/login-request.interface';
import type { AuthResponseDto } from '@/core/DTO/Auth/auth-response.interface';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        RouterModule,
        RippleModule,
        ToastModule,
        AppFloatingConfigurator
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class Login {
    private readonly router = inject(Router);
    private readonly notificationService = inject(NotificationService);
    private readonly authSession = inject(AuthSessionService);
    private readonly authService = inject(AuthService);

    readonly submitting = signal(false);
    readonly isSubmitting = computed(() => this.submitting());

    email: string = '';
    password: string = '';
    checked: boolean = false;

    private getBackendErrorMessage(err: any): string {
        return err?.error?.message ?? err?.error?.Message ?? err?.message ?? '';
    }

    async onSubmit(): Promise<void> {
        if (this.submitting()) return;

        const email = (this.email ?? '').trim();
        const password = this.password ?? '';

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.notificationService.error('Login Error', 'Please enter a valid email address.');
            return;
        }

        if (!password) {
            this.notificationService.error('Login Error', 'Password is required.');
            return;
        }

        const payload: LoginRequestDto = { email, password };

        this.submitting.set(true);
        try {
            const response = (await this.authService.login(payload).toPromise()) as AuthResponseDto;
            this.authSession.saveSession(response);

            const roles = response.roles ?? [];

            if (roles.includes('PATIENT')) {
                await this.router.navigate(['/patient/search']);
                return;
            }

            if (roles.includes('PHARMACYADMIN')) {
                await this.router.navigate(['/dashboard']);
                return;
            }

            // SUPERADMIN or any unsupported role
            this.authSession.clearSession();
            this.notificationService.error(
                'Login failed',
                'This role is not supported yet.'
            );
        } catch (err: any) {
            const backendMsg = this.getBackendErrorMessage(err);
            this.authSession.clearSession();
            this.notificationService.error(
                'Login failed',
                backendMsg || 'Login failed. Please try again.'
            );
        } finally {
            this.submitting.set(false);
        }
    }
}

