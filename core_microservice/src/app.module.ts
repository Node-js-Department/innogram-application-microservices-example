import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

// Modules
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';

// Database configuration
import { DatabaseConfig } from './database/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    CacheModule.register({
      isGlobal: true,
      // Redis configuration will be added here
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    // Feature modules
    AuthModule,
    UsersModule,
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
