import { Injectable } from '@angular/core';
import { AuthResponseDto } from '@/core/DTO/Auth/auth-response.interface';

const AUTH_STORAGE_KEYS = {
  token: 'medfinder_auth_token',
  refreshToken: 'medfinder_auth_refresh_token',
  roles: 'medfinder_auth_roles',
  expiresAt: 'medfinder_auth_expires_at',
  isAuthenticated: 'medfinder_auth_is_authenticated',
  email: 'medfinder_auth_email',
  fullName: 'medfinder_auth_full_name'
} as const;

@Injectable({
  providedIn: 'root',
})
export class AuthSessionService {
  private isExpired(expiresAtIso?: string | null): boolean {
    if (!expiresAtIso) return true;
    const expiry = new Date(expiresAtIso).getTime();
    if (Number.isNaN(expiry)) return true;
    return Date.now() >= expiry;
  }

  saveSession(response: AuthResponseDto): void {
    localStorage.setItem(AUTH_STORAGE_KEYS.token, response.token);
    localStorage.setItem(AUTH_STORAGE_KEYS.refreshToken, response.refreshToken);
    localStorage.setItem(AUTH_STORAGE_KEYS.roles, JSON.stringify(response.roles ?? []));
    localStorage.setItem(AUTH_STORAGE_KEYS.expiresAt, response.expiresAt);
    localStorage.setItem(AUTH_STORAGE_KEYS.isAuthenticated, JSON.stringify(!!response.isAuthenticated));

    localStorage.setItem(AUTH_STORAGE_KEYS.email, response.email);
    localStorage.setItem(AUTH_STORAGE_KEYS.fullName, response.fullName);
  }

  private restoreOrClear(): boolean {
    const expiresAt = localStorage.getItem(AUTH_STORAGE_KEYS.expiresAt);
    if (this.isExpired(expiresAt)) {
      this.clearSession();
      return false;
    }
    return true;
  }

  getToken(): string | null {
    if (!this.restoreOrClear()) return null;
    return localStorage.getItem(AUTH_STORAGE_KEYS.token);
  }

  getRefreshToken(): string | null {
    if (!this.restoreOrClear()) return null;
    return localStorage.getItem(AUTH_STORAGE_KEYS.refreshToken);
  }

  getRoles(): string[] {
    if (!this.restoreOrClear()) return [];
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEYS.roles);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as string[]) : [];
    } catch {
      return [];
    }
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  isAuthenticated(): boolean {
    if (!this.restoreOrClear()) return false;
    const raw = localStorage.getItem(AUTH_STORAGE_KEYS.isAuthenticated);
    if (raw == null) return false;
    try {
      return !!JSON.parse(raw);
    } catch {
      return false;
    }
  }

  clearSession(): void {
    localStorage.removeItem(AUTH_STORAGE_KEYS.token);
    localStorage.removeItem(AUTH_STORAGE_KEYS.refreshToken);
    localStorage.removeItem(AUTH_STORAGE_KEYS.roles);
    localStorage.removeItem(AUTH_STORAGE_KEYS.expiresAt);
    localStorage.removeItem(AUTH_STORAGE_KEYS.isAuthenticated);
    localStorage.removeItem(AUTH_STORAGE_KEYS.email);
    localStorage.removeItem(AUTH_STORAGE_KEYS.fullName);
  }
}

