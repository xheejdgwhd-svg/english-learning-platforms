# Test Plan

## Scope
Functional, UX, Performance, Security, Cross-browser/device.

## Functional
- Auth: login/logout, session persistence, error states
- Lessons: pagination, resume, completion
- Quizzes: submit, feedback, scoring, retry logic
- Progress: metrics correctness, charts load

## UX
- Mobile nav, keyboard accessibility, focus rings
- Animations < 200ms for micro-interactions

## Performance
- LCP < 2.5s (p95), TTI < 3.5s on mid-range mobile
- API p95 < 300ms for cached reads

## Security
- OAuth scopes minimal; drive access limited
- CSRF protection, rate limits on write routes
- SQL injection protection via Prisma

## Cross-Env
- Chrome, Firefox, Safari, Edge
- iOS Safari, Android Chrome

## Tooling
- Vitest/RTL for components
- Playwright for E2E
- Lighthouse CI
