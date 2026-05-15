<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Agent Quick Guide

- **Router & layout**: This project uses the App Router (`/app`). Pages live at `app/<route>/page.tsx`.
- **Components**: Shared UI lives in `src/components` (e.g. `top-navbar`, `back-button`, `footer`). Prefer reusing these components rather than duplicating layout code.
- **Static assets**: Images and other public files are under `public/`. Reference them with `/file.jpg` or import static files when needed for `next/image`.
- **Images**: Use `next/image` for optimization. For full-bleed images use a `relative` wrapper with a fixed height and `Image fill` + `className="object-cover"`.
- **Header + anchors**: There is a fixed header. Use `scroll-margin-top` on anchor targets (e.g. `#materi`) to avoid being covered by the header.
- **Hash links**: Client navigation via `next/link` may not auto-scroll to hashes — either use plain `<a href="#id">` for same-page anchors or attach an `onClick` that calls `document.getElementById(...).scrollIntoView()` and `history.pushState`.
- **Styling**: Tailwind v4 is configured. Avoid unnecessary arbitrary values when a Tailwind utility is available (the linter may suggest alternatives like `h-107.5`). Keep classes consistent with existing pattern (`max-w-170`, `font-serif`, `text-neutral-*`).
- **Run / build**: Use the project `package.json` scripts:
	- `pnpm dev` or `npm run dev` — development server (`next dev`)
	- `pnpm build` or `npm run build` — production build (`next build`)

If something looks unfamiliar (Next version differences, image API changes), consult `node_modules/next/dist/docs/` before making changes. Ask for clarification if a change might affect multiple pages or shared components.

---
_If you'd like, I can add a short `.github/copilot-instructions.md` stub that references this file and highlights testing commands._
