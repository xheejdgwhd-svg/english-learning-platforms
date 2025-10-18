# Architecture Blueprint

## Tech Stack
- **Frontend**: Next.js 14 (App Router), React, Tailwind, Framer Motion
- **Auth**: NextAuth.js (Google OAuth 2.0)
- **DB**: PostgreSQL + Prisma
- **API**: Next.js Route Handlers (`/app/api/*`)
- **Storage/Media**: External CDN (optional), user-upload via Drive (optional)
- **Infra**: Docker Compose (dev), Vercel/Fly/Render (prod)

## Key Modules
- **Auth & Profiles**: Google Login, email/password (optional), profile & settings
- **Curriculum**: Lessons, Units, Quizzes, Attempts, Progress
- **Gamification**: XP, badges, streaks
- **Analytics**: Lesson completion, accuracy, time-on-task
- **Integrations**: Google Drive (Picker API + Drive API)

## Security
- Least-privilege OAuth scopes
- Prisma schema with foreign keys & cascade rules
- Rate limiting on mutation routes
- CSRF via NextAuth, cookie hardened; secure session strategy
- GDPR-friendly data export/delete endpoints

