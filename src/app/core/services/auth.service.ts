import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import type { AuthResponseDto } from '@/core/DTO/Auth/auth-response.interface';
import type { LoginRequestDto } from '@/core/DTO/Auth/login-request.interface';

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  city: string;
  role: 'PATIENT' | 'PHARMACYADMIN';
  pharmacyName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  override http = inject(HttpClient);

  register(payload: RegisterRequest): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(`${this.apiUrl}/Auth/register`, payload);
  }

  login(payload: LoginRequestDto): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(`${this.apiUrl}/Auth/login`, payload);
  }
}


