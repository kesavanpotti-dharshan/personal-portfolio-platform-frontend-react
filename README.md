# Dharshan Kesavan Potti — Portfolio

Personal portfolio site for Dharshan Kesavan Potti, Lead .NET Developer / Cloud Architect. Built as a single-page React app showcasing experience, skills, projects, certifications, and a contact section.

## Features

- Responsive navigation with active-section highlighting and a mobile slide-down menu
- Animated scroll-progress bar and scroll-triggered reveal animations
- Sections for Experience, Skills, Projects, Certifications & Education, and Contact
- Downloadable resume link
- Contact form (currently client-side only — see [Notes](#notes))

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and build
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app locally:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
├── App.tsx        # Main app component — layout, sections, interactions
├── data.ts         # Content: personal info, experience, skills, projects, certs, education
├── types.ts        # Shared TypeScript interfaces for the content above
└── resume/
    └── Dharshan_Kesavan_Potti_Resume.pdf
```

To update site content (experience, skills, projects, etc.), edit `data.ts` — no changes to `App.tsx` are needed for content updates.

## Deployment

This is a static Vite app and deploys cleanly to [Vercel](https://vercel.com/):

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Notes

- The contact form currently only logs submissions to the browser console (no email is actually sent). Wire it up to a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/) before relying on it.
- Make sure `resume/Dharshan_Kesavan_Potti_Resume.pdf` exists in the `public` folder so the download links resolve correctly.

## Contact

- Email: kesavanpotti.dharshan@gmail.com
- GitHub: [@kesavanpotti-dharshan](https://github.com/kesavanpotti-dharshan)
- LinkedIn: [dharshankesavan](https://www.linkedin.com/in/dharshankesavan/)
