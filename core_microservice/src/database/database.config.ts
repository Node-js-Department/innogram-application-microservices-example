import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST', 'localhost'),
      port: this.configService.get('POSTGRES_PORT', 5432),
      username: this.configService.get('POSTGRES_USER', 'innogram_user'),
      password: this.configService.get('POSTGRES_PASSWORD', 'innogram_password'),
      database: this.configService.get('POSTGRES_DB', 'innogram'),
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      synchronize: this.configService.get('NODE_ENV') === 'development',
      logging: this.configService.get('NODE_ENV') === 'development',
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsRun: false,
    };
  }
}
