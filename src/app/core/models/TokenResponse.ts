export interface TokenResponse {
  message?: string;
  token: string;
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role: 'admin' | 'user';
  };
}