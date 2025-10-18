# English Learning Platform — Starter Kit

A production-ready starter for building a full-stack English learning website with:
- **Next.js 14 (App Router)** + **React** + **Tailwind CSS**
- **NextAuth.js** with **Google OAuth 2.0**
- **PostgreSQL** via **Prisma ORM**
- **Animations** (Framer Motion) and interactive quizzes
- **Drive integration hooks** (Google Drive API ready)
- **Docker Compose** for local Postgres

## Quick Start

1. **Prereqs**: Node 18+, Docker, Git.
2. **Create env files**:
   - Copy `.env.example` to `.env`
   - Copy `apps/web/.env.example` to `apps/web/.env`
3. **Run Postgres**:
   ```bash
   docker compose up -d
   ```
4. **Install & dev**:
   ```bash
   cd apps/web
   npm i
   npx prisma migrate dev --name init
   npm run dev
   ```

Open http://localhost:3000

## Monorepo Layout
```
.
├─ apps/
│  └─ web/            # Next.js app (frontend + API routes)
├─ prisma/
│  └─ schema.prisma   # Database schema
├─ docs/              # Wireframes, API, test plan, deployment
└─ docker-compose.yml # Local Postgres
```

## Next Steps
- Fill content in `seed.ts`, add lessons/quizzes.
- Configure Google OAuth credentials & Drive scopes.
- Tighten CSP, enable HTTPS in prod.
