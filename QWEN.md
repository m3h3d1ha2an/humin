# Qwen Context: Humin Project

This document provides a comprehensive overview of the Humin project, intended to serve as a foundational context for AI-driven development assistance.

## 1. Project Overview

**Humin** is a "Smart Employee Data & Reporting Platform" designed to simplify HR management. It serves as a full-stack portfolio project showcasing modern web development expertise. The primary goal is to serve as a living resume, demonstrating proficiency in building scalable, high-quality applications using the latest industry-standard technologies. The project is currently in Phase 1 - Foundation & Marketing Showcase, focusing on building a polished, public-facing marketing website to communicate the project's vision.

### Key Technologies

- **Framework**: [Next.js](https://nextjs.org/) 16 (with App Router)
- **UI Library**: [React](https://react.dev/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Component Library**: [HeroUI](https://heroui.io/)
- **Tooling**: [Biome](https://biomejs.dev/) (for linting and formatting)
- **Package Manager**: [Bun](https://bun.sh/)

### Architecture

The project is a modern web application built on Next.js, utilizing the server-centric App Router model. Configuration is cleanly separated from UI components, as seen with the `src/config/site.ts` file, which centralizes site-wide metadata. The Next.js configuration (`next.config.ts`) is set up to use modern, performance-oriented features like the React Compiler, Typed Routes, and component caching.

## 2. Deployment

The project is deployed on Vercel with the following production URL:

- **Production URL**: https://humin.vercel.app

## 4. Project Roadmap

The project follows a phased development approach outlined in the roadmap:

### Phase 1: Foundation & Marketing Showcase
**Goal:** Create a polished, professional marketing website that impresses potential employers and clearly communicates the project's vision and value proposition.

- **1. Enhance Project Documentation:**
  - Create comprehensive documentation (including this `QWEN.md`).
  - Write a comprehensive, showcase-worthy `README.md`.

- **2. Design & Build Marketing Pages:**
  - **Landing Page:** A visually appealing homepage that serves as the main entry point.
  - **Features Page:** A page detailing the planned (even if not yet implemented) features of the SaaS platform.
  - **Pricing Page:** A simple, placeholder pricing page to complete the SaaS look and feel.
  - **About Page:** A page to talk about the project's mission.

- **3. UI/UX Polish:**
  - Ensure all pages are fully responsive and visually consistent.
  - Implement subtle animations and transitions to enhance the user experience.
  - Select a professional color scheme and typography.

- **4. Deployment:**
  - Set up a new project on Vercel.
  - Configure the GitHub repository for automatic deployments on every push to the `main` branch.

### Phase 2: Application Backend & Authentication
**Goal:** Build the foundational backend systems required for a secure, multi-user application.

- **1. Database & ORM:**
  - Choose and integrate a database (e.g., Vercel Postgres).
  - Set up an ORM (e.g., Prisma or Drizzle) for type-safe database access.

- **2. Authentication:**
  - Implement a robust authentication solution (e.g., NextAuth.js or Clerk).
  - Create sign-up, sign-in, and sign-out flows.
  - Protect application routes, making them accessible only to authenticated users.

- **3. API Structure:**
  - Define and implement the initial API routes for core application functionalities (e.g., managing users, fetching data).

### Phase 3: Core Application Features (MVP)
**Goal:** Implement the Minimum Viable Product (MVP) features that bring the "Smart Employee Data & Reporting Platform" to life.

- **1. Application Dashboard:**
  - Design and build the main dashboard view that users see after logging in.

- **2. Employee Data Management:**
  - Implement full CRUD (Create, Read, Update, Delete) functionality for employee records.
  - Create intuitive forms for data entry and editing.

- **3. Reporting Engine:**
  - Develop the initial version of the report generation feature.
  - Allow users to export reports in a basic format (e.g., CSV or PDF).

### Phase 4: Evolution to a Real SaaS Product
**Goal:** Add features required for a commercial, multi-tenant SaaS product.

- **1. Subscription & Billing:**
  - Integrate a payment provider like Stripe to manage subscriptions.

- **2. Team Management & Roles:**
  - Allow organizations to invite multiple users.
  - Implement role-based access control (RBAC) (e.g., Admin, Editor, Viewer).

- **3. Advanced Features:**
  - HR Analytics and Visualizations.
  - Integrations with third-party services (e.g., payroll, accounting).
  - Audit logs and activity tracking.

## 5. Building and Running

All commands should be executed using `bun`, as indicated by the presence of a `bun.lock` file.

- **Run the development server:**
  ```bash
  bun dev
  ```
  The application will be available at [http://localhost:3000](http://localhost:3000).

- **Create a production build:**
  ```bash
  bun run build
  ```

- **Start the production server:**
  ```bash
  bun start
  ```

- **Run the linter:**
  ```bash
  bun run lint
  ```

- **Format the code:**
  ```bash
  bun run format
  ```

## 6. Development Conventions

- **Code Style & Formatting**: Enforced by Biome. Key rules from `biome.json` include:
  - Indent Style: 2 spaces
  - Line Width: 100 characters
  - Imports are organized automatically on save.

- **Type Safety**: The project uses TypeScript in `strict` mode (`tsconfig.json`), requiring strong type checking.

- **Path Aliases**: The alias `@/*` is configured to map to the `src/*` directory for cleaner import paths.

- **Configuration Management**: Site-specific constants, metadata, and configuration are stored in `src/config/site.ts`. This convention should be followed for any new site-wide settings.

- **UI Components**: The project uses HeroUI for its component library. New UI elements should leverage this library where possible to maintain consistency.

- **Performance Optimization**: The project uses Next.js features like React Compiler, component caching, and import optimization for better performance.

## Qwen Added Memories
- The Humin project is deployed on Vercel with the production URL: https://humin.vercel.app
