import axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import { ERROR_MESSAGES } from '../constants/error-messages';

export class AuthService {
  private readonly jwtSecret: string;
  private readonly jwtExpiresIn: string;
  private readonly refreshExpiresIn: string;
  private readonly coreServiceUrl: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'your-super-secret-jwt-key-here';
    this.jwtExpiresIn = process.env.JWT_EXPIRES_IN || '15m';
    this.refreshExpiresIn = process.env.JWT_REFRESH_EXPIRES_IN || '7d';
    this.coreServiceUrl = process.env.CORE_SERVICE_URL || 'http://localhost:3001';
  }

  async registerUser(signUpDto: {
    email: string;
    password: string;
    username: string;
    displayName: string;
    birthday: string;
    bio?: string;
  }) {
    // TODO: Implement user registration logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async authenticateUser(credentials: { email: string; password: string }) {
    // TODO: Implement user authentication logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async processRefreshToken(oldRefreshTokenId: string) {
    // TODO: Implement refresh token processing logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async validateToken(accessToken: string) {
    // TODO: Implement token validation logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async exchangeCodeForTokens(code: string, provider: string) {
    // TODO: Implement OAuth code exchange logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  private generateNewTokens(userId: string, userRole: string) {
    // TODO: Implement token generation logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  private async hashPassword(password: string): Promise<string> {
    // TODO: Implement password hashing logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  private async comparePassword(password: string, hash: string): Promise<boolean> {
    // TODO: Implement password comparison logic
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }
}
