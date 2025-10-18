# Deployment Guide

## Local
- `docker compose up -d` to start Postgres
- `cd apps/web && npm i && npx prisma migrate dev && npm run dev`

## Production
- **App host**: Vercel / Fly.io / Render
- **DB**: Managed Postgres (Neon, Supabase, RDS, etc.)
- **Secrets**: Set env vars from `.env.example`
- **Migrations**: `npx prisma migrate deploy`
- **Domains/SSL**: handled by host

## Env Vars
- NEXTAUTH_URL
- NEXTAUTH_SECRET
- GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET
- DATABASE_URL
- GOOGLE_DRIVE_API_KEY (optional)
- GOOGLE_DRIVE_PICKER_CLIENT_ID (optional)

## Post-Deploy
- Seed initial lessons/quizzes
- Monitor logs, enable alerts
