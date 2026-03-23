// types.ts
import { NextApiRequest, NextApiResponse } from 'next';

// User types
enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

type User = {
  id: number;
  email: string;
  password: string;
  role: Role;
};

// API request types
type ApiRequest = NextApiRequest & {
  userId?: number;
  user?: User;
};

type ApiResponse<T> = NextApiResponse<T> & {
  error?: string;
  message?: string;
  data?: T;
};

// JWT token types
interface JWTPayload {
  id: number;
  email: string;
  role: Role;
  exp: number;
}

// Other types
type PasswordUpdate = {
  currentPassword: string;
  newPassword: string;
};

type EmailUpdate = {
  email: string;
};