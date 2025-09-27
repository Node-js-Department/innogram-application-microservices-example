import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // TODO: Implement JWT authentication guard
    // IMPORTANT: After validating JWT token, place user data in request.user
    // Example: request.user = { id: userId, email: userEmail, role: userRole }
    // This allows CurrentUser decorator to extract user data from request
    throw new Error('Method not implemented.');
  }
}
