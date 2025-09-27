import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

import { ERROR_MESSAGES } from '../constants/error-messages';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async handleSignUp(signUpDto: SignUpDto) {
    // TODO: Forward registration data to Authentication Microservice
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async handleLogin(credentials: LoginDto) {
    // TODO: Forward credentials to Authentication Microservice
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async handleOAuthInit(provider: string) {
    // TODO: Make HTTP request to Authentication Microservice for OAuth URL
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async handleOAuthCallback(provider: string, authorizationCode: string) {
    // TODO: Forward authorization code to Authentication Microservice
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async handleRefresh(refreshTokenId: string) {
    // TODO: Forward refresh token to Authentication Microservice
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async handleLogout(refreshTokenId: string) {
    // TODO: Forward logout request to Authentication Microservice
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }

  async validateToken(accessToken: string) {
    // TODO: Validate token with Authentication Microservice
    throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED);
  }
}
