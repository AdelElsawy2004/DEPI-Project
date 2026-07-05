export interface AuthResponseDto {
  token: string;
  refreshToken: string;
  email: string;
  fullName: string;
  roles: string[];
  expiresAt: string;
  isAuthenticated: boolean;
}

