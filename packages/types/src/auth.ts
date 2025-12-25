export interface SignupRequest {
  email: string;
  password: string;
}

export interface signinRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}
