# Portfolio — Ayodabo Tomisin

Personal portfolio site for Ayodabo Tomisin Kolawole, Data & AI Engineer.

Live: https://tomisin-portfolio.netlify.app

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- Tailwind CSS + shadcn/ui
- Framer Motion for animation
- Formspree for the contact form
- Deployed on Netlify

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

```
src/app/            App Router pages (home, /blog, /blog/[slug])
components/          Section components (hero, projects, skills, contact, blog)
components/ui/       shadcn/ui primitives
public/images/       Project and blog imagery
```

## Content

- **Projects** — `src/app/page.tsx`. Private/client work uses `isPrivate` on `<ProjectCard>` to
  render a "Private / client work" label instead of repo links.
- **Skills** — `components/skills-section.tsx` (grouped by category).
- **Writing** — `components/featured-blogs.tsx` and `src/app/blog/`.
- **Contact form** — `components/contact-form.tsx`, posts to the Formspree endpoint defined at the
  top of that file.
