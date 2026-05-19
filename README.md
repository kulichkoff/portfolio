# Daniel Kulichkov Portfolio

Personal portfolio site built with [Astro](https://astro.build). It presents a short bio, featured projects, and contact links.

## Tech stack

- [Astro](https://astro.build) 6 — static site generation
- [Tailwind CSS](https://tailwindcss.com) 4 — styling
- [Lucide](https://lucide.dev) — icons
- Content collections for project data and markdown bodies

## Project structure

```
src/
├── assets/           # Images (project heroes, icons)
├── components/       # Hero, projects grid, about, contact, footer
├── content/
│   └── projects/     # One .md file per project (frontmatter + body)
├── layouts/          # Project detail layout
├── pages/
│   ├── index.astro   # Home page
│   └── projects/     # Dynamic routes for each project
├── styles/
│   └── global.css
└── content.config.ts # Project collection schema
public/               # Static assets (favicon, etc.)
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start dev server         |
| `pnpm build`   | Build static site        |
| `pnpm preview` | Serve production build   |

## License

[MIT](LICENSE) © Daniel Kulichkov
