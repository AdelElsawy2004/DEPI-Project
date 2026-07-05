import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AuthSessionService } from '@/core/services/auth-session.service';
import { type AuthResponseDto } from '@/core/DTO/Auth/auth-response.interface';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { NotificationService } from '@/core/services/notification.service';
import { AuthService, type RegisterPatientRequest } from '@/core/services/auth.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    AppFloatingConfigurator
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);
  private readonly authService = inject(AuthService);
  private readonly authSession = inject(AuthSessionService);

  readonly submitting = signal(false);
  readonly accountType = computed(() => {
    const t = this.route.snapshot.queryParamMap.get('type');
    return t ?? 'patient';
  });

  readonly form = this.fb.group({
    fullName: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    city: ['', [Validators.required, Validators.maxLength(50)]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      this.passwordPolicyValidator()
    ]],
    confirmPassword: ['', [Validators.required]]
  });

  private readonly passwordControl = computed(() => this.form.controls.password);

  constructor() {
    this.form.controls.confirmPassword.setValidators([
      Validators.required,
      this.matchPasswordValidator(this.passwordControl())
    ]);
  }

  private matchPasswordValidator(passwordCtrl: AbstractControl) {
    return (control: AbstractControl) => {
      const confirm = control.value ?? '';
      const password = passwordCtrl.value ?? '';
      return confirm === password ? null : { confirmPasswordMismatch: true };
    };
  }

  private passwordPolicyValidator() {
    return (control: AbstractControl) => {
      const value = (control.value ?? '') as string;
      if (!value) return null;

      const hasUppercase = /[A-Z]/.test(value);
      const hasNonAlphanumeric = /[^a-zA-Z0-9]/.test(value);

      if (hasUppercase && hasNonAlphanumeric) return null;

      return { passwordPolicy: true };
    };
  }

  private getFirstInvalidReason(): string {
    const fullName = this.form.controls.fullName;
    if (fullName.invalid) {
      if (fullName.errors?.['required']) return 'Full Name is required.';
      if (fullName.errors?.['maxlength']) return 'Full Name must be at most 100 characters.';
    }

    const email = this.form.controls.email;
    if (email.invalid) {
      if (email.errors?.['required']) return 'Please enter your email address.';
      if (email.errors?.['email']) return 'Please enter a valid email address.';
    }

    const city = this.form.controls.city;
    if (city.invalid) {
      if (city.errors?.['required']) return 'City is required.';
      if (city.errors?.['maxlength']) return 'City must be at most 50 characters.';
    }

    const password = this.form.controls.password;
    if (password.invalid) {
      if (password.errors?.['required']) return 'Password is required.';
      if (password.errors?.['minlength'] || password.errors?.['passwordPolicy']) {
        return 'Password must be at least 6 characters and include one uppercase letter and one special character.';
      }
    }

    const confirm = this.form.controls.confirmPassword;
    if (confirm.invalid) {
      if (confirm.errors?.['required']) return 'Confirm Password is required.';
      if (confirm.errors?.['confirmPasswordMismatch']) return 'Passwords do not match.';
    }

    return 'Registration Error. Please check the form and try again.';
  }

  private getBackendErrorMessage(err: any): string {
    return err?.error?.message ?? err?.error?.Message ?? err?.message ?? '';
  }

  async onSubmit(): Promise<void> {
    if (this.submitting()) return;

    const type = this.route.snapshot.queryParamMap.get('type');

    if (type === 'pharmacy') {
      // Backend Pharmacy registration is not ready yet.
      this.notificationService.info(
        'Pharmacy registration',
        'Pharmacy registration is being prepared. Please sign in if you already have an account.'
      );
      return;
    }

    if (type !== 'patient') {
      this.notificationService.error('Registration failed', 'Unsupported account type.');
      return;
    }

    this.form.markAllAsTouched();
    if (this.form.invalid) {
      const msg = this.getFirstInvalidReason();
      this.notificationService.error('Registration Error', msg);
      return;
    }


    this.submitting.set(true);
    try {
      const payload: RegisterPatientRequest = {
        fullName: this.form.value.fullName ?? '',
        email: this.form.value.email ?? '',
        password: this.form.value.password ?? '',
        city: this.form.value.city ?? '',
        role: 'PATIENT'
      };

      const response = (await this.authService.register(payload).toPromise()) as AuthResponseDto;

      this.authSession.saveSession(response);

      const roles = response.roles ?? [];
      if (roles.includes('PATIENT')) {
        await this.router.navigate(['/patient/search']);
        this.notificationService.success('Account created successfully');
        return;
      }

      this.authSession.clearSession();
      this.notificationService.error(
        'Registration failed',
        'Account created successfully, but role is not supported for patient navigation.'
      );
    } catch (err: any) {
      const backendMsg = this.getBackendErrorMessage(err);
      this.notificationService.error(
        'Registration failed',
        backendMsg || 'Registration failed. Please try again.'
      );
    } finally {
      this.submitting.set(false);
    }
  }

  readonly isSubmitting = computed(() => this.submitting());
}

