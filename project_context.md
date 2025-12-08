# 🎓 LMS ADMIN PANEL — PROJECT CONTEXT (PHASE 1 ONLY)

## 🧱 Tech Stack

- **Next.js App Router**
- **React 19**
- **TailwindCSS**
- **shadcn/ui components**
- **TypeScript**
- **Turborepo**
  - `apps/client` → Frontend
  - `apps/server` → Backend (Bun + Hono, NOT required for UI development yet)

## 📁 Frontend Structure (PHASE 1)

```
app/
  admin/
    layout.tsx
    dashboard/
      page.tsx
      components/
        dashboard-stats.tsx
        sales-chart.tsx
        recent-enrollments.tsx
        webinar-analytics.tsx

    courses/
      page.tsx                # Course list
      create/page.tsx         # Create course
      [id]/
        page.tsx              # Course detail (tabs)
        components/
          course-tabs.tsx
          modules-section.tsx
          lessons-section.tsx
          course-analytics.tsx

    webinars/
      page.tsx                # Webinar list
      create/page.tsx
      [id]/page.tsx

    users/
      page.tsx                # Student/Instructor list
      [id]/
        page.tsx              # User detail
        components/
          user-profile.tsx
          enrolled-courses.tsx

    certificates/
      page.tsx                # Certificate templates list
      create/page.tsx

    settings/
      page.tsx
      components/
        payment-settings.tsx
        general-settings.tsx

components/
  ui/ (shadcn)
  sections/
    stats-card.tsx
    chart-card.tsx
  search-input.tsx
  filter-panel.tsx
  empty-state.tsx

lib/
  utils.ts
  formatters.ts
  hooks.ts
  constants.ts
  types.ts
```

## 📊 PHASE 1 PAGE REQUIREMENTS

(Verified with your Proposal Document)

### ✔ Dashboard

- Total Courses
- Total Students
- Total Revenue
- Total Webinars
- Sales Analytics Chart
- Webinar Registration Chart
- Recent Enrollments List

### ✔ Courses

- Course listing with search/filter
- Create course
- Course detail page with tabs:
  - Overview
  - Modules
  - Lessons
  - Analytics (basic, not gamification)
  - Upload video/PDF (UI placeholder only)

### ✔ Modules & Lessons

- Add/edit/delete modules
- Add/edit/delete lessons
- Assign video/PDF
- Maintain order

### ✔ Webinars

- List webinars
- Create webinar
- Webinar detail page
- Registration counts

### ✔ Users

- List all students
- Search/filter
- User detail page showing:
  - Basic profile
  - Enrolled courses

### ✔ Certificates

- List certificate templates
- Create template (UI only)

### ✔ Settings

- Payment settings (Razorpay/Stripe UI placeholders)
- General platform settings (name, logo)

## ❌ REMOVED FROM PHASE 1

(These existed in the old file but must not appear anywhere)

- Points system
- Badges
- Gamification rules
- Leaderboards
- Levels
- XP
- Streaks
- Reward cards
- Engagement gamification
- Social achievements

**These are Phase 2 only (as per proposal).**

## 🚧 Completed Work So Far

- Basic admin layout concept
- Courses list initial UI
- Course creation UI (in progress)

## 🧱 Pending Tasks (PHASE 1 ONLY)

- Full admin layout
- Full dashboard
- Courses list improvements
- Course detail tabs
- Modules & lessons
- Webinars section
- Users section
- Certifications
- Settings pages

## 📌 Agent Instructions (MUST FOLLOW)

1. Follow this file exactly
2. Do NOT reintroduce gamification features
3. Follow design.md for UI styling
4. Use shadcn UI + Tailwind
5. Keep code modular & reusable
6. Never modify backend files
7. Never generate minimal UI — use modern styles
8. Before coding: describe what will be created/modified
9. After coding: list affected files
