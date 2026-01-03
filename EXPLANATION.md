# AlgoZenith Recruitment Form -- Explanation

## a) What I Learned

### New Concepts

- **Full-stack form handling** using Next.js App Router
- **API routes** with server-side logic in Next.js
- **Prisma ORM** for schema-based database access
- **Client--Server separation** in modern React (Client vs Server
  Components)
- **Deployment pipelines** using Vercel

### New Tools

- **Next.js 16 (App Router)** -- frontend + backend framework
- **Prisma** -- ORM for PostgreSQL
- **PostgreSQL** -- relational database
- **Prisma Studio** -- database GUI
- **Vercel** -- hosting & CI/CD
- **Tailwind CSS** -- utility-first styling
- **Git & GitHub** -- version control

### Things I Struggled With

- Prisma client configuration in serverless environment
- Environment variables on Vercel
- Handling duplicate submissions (unique constraints)
- Understanding why local DB worked but cloud DB didn't initially

---

## b) Frontend

### Tech Used

- Next.js (React)
- Tailwind CSS
- TypeScript

### Why I Chose It

- Next.js allows frontend + backend in one project
- Tailwind is fast and consistent for UI
- TypeScript prevents runtime bugs

### How the Form Works Internally

1.  User fills form
2.  On submit → `fetch('/api/applications')`
3.  JSON payload sent to backend
4.  UI resets after success / shows error on failure

Form state is managed inside a client component and validated before
submission.

---

## c) Backend

### API Structure

- `/api/applications`
  - `POST` → create new application
  - `GET` (optional) → fetch applications (admin)

### Data Flow (Request → Response)

1.  Client sends POST request
2.  Server parses JSON body
3.  Prisma validates & inserts data
4.  Server returns:
    - `201` on success
    - `409` on duplicate roll number
    - `500` on unexpected error

### Error Handling

- Prisma error codes (e.g. `P2002`)
- Try--catch blocks
- Custom user-friendly error messages

---

## d) Database

### Schema Design

- `Application` table
- Fields:
  - id (UUID)
  - name
  - roll (unique)
  - email
  - phone
  - domain
  - resumeUrl
  - links
  - timestamps

### Why This Structure

- Normalized
- Easy to extend
- Roll number uniqueness prevents duplicate applications

### How Data Is Stored / Retrieved

- Prisma maps schema → SQL
- Data inserted using `prisma.application.create()`
- Viewed via Prisma Studio

---

## e) Challenges

### What Broke

- Prisma client on Vercel
- Environment variables mismatch
- Duplicate form submissions
- Tailwind config errors

### What I Still Don't Fully Understand

- Serverless DB connection pooling
- Prisma Accelerate vs adapters
- Best practices for large-scale deployments

---

## Final Note

Although this might not be the best-looking or most polished form UI, this project gave me a **clear idea of how full-stack applications work in real life**.

I learned:

- How frontend connects to backend
- How data flows into a database
- How deployments actually behave differently from local setups(Here I mess things up)

Overall, it was a **great learning experience**, and building this project significantly improved my understanding of real-world web development.
"""
