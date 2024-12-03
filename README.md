# Welcome to Microservices Project using node js

## Microservices Architecture with Monorepo

```
This project is a microservices-based architecture using Node.js for backend services and React for the frontend.

Each service operates independently and communicates with others through well-defined interfaces. The monorepo structure enables efficient development and maintenance.

simple project contains graphQL , Caching , Authentication , API Authorization , Socket(if required)
```

## Project Structure

```bash
monorepo/
├── apps/
│   ├── user-management-backend/
│   │   ├── src/
│   │   ├── tests/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── role-management-backend/
│   │   ├── src/
│   │   ├── tests/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── auth-service/
│   │   ├── src/
│   │   ├── tests/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── frontend/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── tsconfig.json
├── libs/
│   ├── utils/
│   │   ├── logger.ts
│   │   ├── errorHandler.ts
│   │   └── index.ts
│   └── types/
│       ├── user.ts
│       ├── role.ts
│       └── index.ts
├── docker-compose.yml
├── package.json
├── nx.json / lerna.json
└── tsconfig.base.json
```

## Communication Flow

```
Services communicate using RESTful APIs, JWT-based authentication, and message queues for event-driven interactions.

Workflow:
The Auth Service handles authentication and issues JWTs.
Services validate JWTs to authorize requests.

Inter-service communication occurs via REST APIs or asynchronous messaging (e.g., RabbitMQ).
```

## Features

```
Authentication: Centralized authentication using the Auth Service and JWT.
Scalability: Each service can scale independently.
Modularity: Services are modular and loosely coupled.
Shared Code: Shared libraries (libs/) improve maintainability.
```
