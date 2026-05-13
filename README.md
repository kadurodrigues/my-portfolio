# Carlos Rodrigues Portfolio

Editorial-style personal portfolio for Carlos Rodrigues, a Senior Frontend Engineer focused on scalable UI systems, design systems, and micro-frontends.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router
- Vercel Analytics

## Pages

- `/` Home
- `/about` About
- `/experience` Experience
- `/case-studies/design-system` Design system case study
- `/case-studies/micro-frontends` Micro-frontends case study
- `/articles` Articles
- `/contact` Contact

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

App runs on the local Vite URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - type-check and build production assets
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Deployment Notes

- Production deploy target is Vercel.
- `vercel.json` rewrites all paths to `/`, so React Router routes work with direct navigation and refresh.

## Project Structure

```text
src/
  components/
    case-study/
    layout/
  pages/
  App.tsx
  index.css
  main.tsx
```
