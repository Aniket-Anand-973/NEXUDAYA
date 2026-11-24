# NEXUDAYA Reconstruction

A full-stack Next.js reconstruction project for an internship registration and student management portal.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- PostgreSQL and Prisma
- Reusable public and dashboard components
- PDF, QR, payment, validation and password dependencies prepared

## Setup

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `DATABASE_URL`.
4. Run `npx prisma generate`.
5. Run `npx prisma db push` once PostgreSQL is available.
6. Run `npx prisma db seed` if seed configuration is added to package.json.
7. Run `npm run dev` and open `http://localhost:3000`.

## Implemented routes

`/`, `/register`, `/login`, `/verify`, `/store`, `/benefits`, `/courses`, `/blogs`, `/partner`, `/cybercafe`, `/contact`, `/privacy`, `/terms`, `/dashboard`, `/admin`.

## Demo safety

This reconstruction contains original-neutral copy and placeholder records. No official recognition, account data or private reference assets are copied. Authentication, database writes, payment verification and PDF/certificate issuance require the environment and role-authorized server workflows to be completed before launch.

## Commands

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — lint source
