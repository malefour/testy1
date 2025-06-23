# OpenTicket Backend

This is the backend API for the OpenTicket platform, built with NestJS 10.x and TypeScript.

## Getting Started

### Install dependencies

```
yarn install
```

### Run the development server

```
yarn start:dev
```

The API will be available at http://localhost:3000

## Project Structure

- `src/main.ts` — NestJS entrypoint
- `src/app.module.ts` — Root module
- `src/config/` — Centralized config management
- `src/modules/` — Feature modules (auth, users, events, etc.)
- `src/database/` — Prisma ORM and migrations
- `src/common/` — Shared utilities, DTOs, enums
- `src/jobs/` — Background jobs
- `src/logger/` — Logger service

---

For more details, see the monorepo root README. 