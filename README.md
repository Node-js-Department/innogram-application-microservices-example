# Microservices Structure

This directory contains the microservices implementations with empty method stubs for the Innogram social media application.

## Structure

```
microservices/
├── core_microservice/          # NestJS API Gateway & Business Logic
│   ├── src/
│   │   ├── auth/               # Authentication module (empty stubs)
│   │   ├── database/           # Database entities and configuration
│   │   ├── guards/             # Authentication guards
│   │   └── main.ts             # Application entry point
│   ├── package.json
│   └── tsconfig.json
└── auth_microservice/          # Express.js Authentication Service
    ├── src/
    │   ├── controllers/        # Route controllers (empty stubs)
    │   ├── services/           # Business logic services (empty stubs)
    │   ├── middleware/         # Express middleware
    │   ├── config/             # Configuration files
    │   └── index.ts            # Application entry point
    ├── package.json
    └── tsconfig.json
```

## Core Microservice

**Technology**: NestJS + TypeScript
**Port**: 3001
**Purpose**: API Gateway and main business logic

### Features (Empty Stubs):
- Authentication module with HTTP communication to Auth service
- Database entities (User, Account, Profile, ProfileFollow)
- JWT authentication guard
- Swagger documentation setup
- Basic CRUD operations structure

### Database Entities:
- `User` - Base user entity
- `Account` - Authentication accounts
- `Profile` - User profiles
- `ProfileFollow` - User following relationships

## Authentication Microservice

**Technology**: Express.js + TypeScript
**Port**: 3002
**Purpose**: JWT token management and OAuth

### Features (Empty Stubs):
- JWT token generation and validation
- Password hashing with bcrypt
- OAuth 2.0 integration (Google)
- Redis token storage
- Session management
- Token refresh mechanism

### API Endpoints:
- `POST /internal/auth/login` - User login
- `POST /internal/auth/validate` - Token validation
- `POST /internal/auth/refresh` - Token refresh
- `POST /internal/auth/logout` - User logout
- `GET /internal/auth/oauth/initiate` - OAuth initiation
- `POST /internal/auth/oauth/exchange-code` - OAuth code exchange

## Running the Services

### Core Microservice:
```bash
cd microservices/core_microservice
npm install
npm run start:dev
```

### Authentication Microservice:
```bash
cd microservices/auth_microservice
npm install
npm run start:dev
```

## Development Notes

- All methods throw "Method not implemented" errors
- Database entities are fully defined with relationships
- TypeScript configuration is complete
- Package.json files include all necessary dependencies
