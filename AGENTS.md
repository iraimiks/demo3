# AGENTS.md

## Project Overview

SvelteKit web application scaffolded with `npx sv create` using the minimal template. This is a landing page project for GreenMotors.

## Tech Stack

- **Framework**: SvelteKit 2 (`@sveltejs/kit` ^2.63.0)
- **UI Library**: Svelte 5 (`svelte` ^5.56.1) — modern runes mode is enforced
- **Language**: TypeScript ^6.0.3 (strict mode)
- **Build Tool**: Vite ^8.0.16 with `@sveltejs/vite-plugin-svelte` ^7.1.2
- **Adapter**: `@sveltejs/adapter-auto` ^7.0.1 (Node, Vercel, Netlify, Cloudflare, or Azure — auto-detected at build time)
- **i18n**: Paraglide JS (`@inlang/paraglide-js` ^2.25.2) with English (`en`, base) and Latvian (`lv`)
- **Package Manager**: npm (`package-lock.json` present)

## Commands

Run all commands from the project root.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with HMR |
| `npm run dev -- --open` | Start dev server and open in browser |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type-check using `svelte-check` (run this after changes) |
| `npm run check:watch` | Type-check in watch mode |

There is **no** ESLint, Prettier, or test runner configured in this project.

## Internationalization (i18n)

The project uses **Paraglide JS 2** (`@inlang/paraglide-js`) for English (`en`, base locale) and Latvian (`lv`).

- **Messages**: Define text in `project.inlang/settings.json`-configured message files at `messages/en.json` and `messages/lv.json`. Keys are flat camelCase (e.g. `heroTitle`).
- **Generated runtime**: `src/lib/paraglide/` is compiled output (gitignored — never edit). After adding/renaming message keys, regenerate with:
  ```sh
  npx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/lib/paraglide --emit-ts-declarations
  ```
  The Vite plugin also compiles automatically on `dev`/`build`.
- **Usage in components**: `import * as m from '$lib/paraglide/messages';` then call `m.heroTitle()`. Locale runtime comes from `$lib/paraglide/runtime` (`getLocale`, `setLocale`, `locales`), server middleware from `$lib/paraglide/server`.
- **Locale strategy** (`vite.config.ts`): `['cookie', 'preferredLanguage', 'baseLocale']` — reads the `PARAGLIDE_LOCALE` cookie (check `cookieName` in `$lib/paraglide/runtime.js`), falls back to browser language, then English. No URL prefixes, so no `reroute` hook is needed.
- **Cookies**: `PARAGLIDE_LOCALE` is a strictly necessary cookie (language preference) — no consent required. Optional cookies (analytics, preferences) are gated by the user-facing consent banner and stored in `localStorage` under `cookie-consent`. Gate any future analytics/tag-manager script behind `import { hasConsent } from '$lib/consent';` (see `consent.ts`).
- **Type-check caveat**: `npm run check` fails if `src/lib/paraglide/` is missing. Regenerate it first (command above, or run `npm run dev`/`build` once).
- `@types/node` is installed and `tsconfig.json` sets `"types": ["node"]` because the generated `server.js` runtime imports `node:async_hooks`.

## Svelte 5 Runes Mode

Runes mode is force-enabled for all project files via `vite.config.ts` (the `runes` compiler option returns `true` for any file outside `node_modules`). This means:

- **Use runes syntax**, never legacy reactive declarations. Legacy syntax like `let count = 0;` + `$:`, `{$$props}`, `onMount`, `beforeUpdate`, etc. will not work as expected.
- **`$props()`** — declare component props: `let { name, children } = $props();`
- **`$state()`** — declare reactive state: `let count = $state(0);`
- **`$derived()`** — derive reactive values: `let doubled = $derived(count * 2);`
- **`$effect()`** — run code when dependencies change (replaces lifecycle `onMount`/`afterUpdate` in most cases):
  ```ts
  $effect(() => {
    console.log(count);
  });
  ```
- **`$bindable()`** — create two-way bindable props: `let { value } = $bindable();`
- **`$ref()` / `$props.id()`** — for element refs and prop IDs in advanced cases.
- **Snippets** — use `{#snippet name()}` and `{@render name()}` for reusable markup blocks instead of slot syntax:
  ```svelte
  {#snippet header()}
    <h1>Title</h1>
  {/snippet}

  {@render header()}
  ```
- **`{@render children()}`** — layout/component children are passed as a snippet prop, not `<slot />`. Example already in `src/routes/+layout.svelte`.

## Design Tokens & Theming

All visual styling flows through **CSS custom properties** defined in `src/lib/styles/tokens.css` (imported once in `+layout.svelte`). Never hardcode raw colors/radii/shadows in component CSS — always reference a token.

- **Token groups**: colors (semantic: `--color-primary`, `--color-primary-hover`, `--color-text`, `--color-text-secondary`, `--color-text-muted`, `--color-border`, `--color-surface`, `--color-surface-muted`, `--color-surface-inverse`, `--color-text-inverse`, `--color-text-inverse-muted`, `--color-focus-ring`, status colors), typography (`--font-sans`, `--font-display`), radii (`--radius-sm/md/lg/full`), shadows (`--shadow-sm/md`), layout (`--container-width: 1120px`).
- **Light/dark themes**: `:root` holds light values; `[data-theme="dark"]` overrides them (plus `color-scheme`). Themes are implemented entirely via token overrides — new themes are just another `[data-theme="…"]` block.
- **Theme bootstrapping**: `src/app.html` runs a tiny inline script that sets `data-theme` on `<html>` from `localStorage` → `prefers-color-scheme` → light, preventing a flash of the wrong theme. `src/lib/components/layout/ThemeToggle.svelte` flips the attribute and persists the choice (accessible, `aria-label` from `themeToggle` message).
- **Rebranding**: change one palette in `src/lib/styles/tokens.css`. **Changing fonts**: edit `--font-sans`/`--font-display` (e.g. a Google Fonts `@import` + stack).
- The `tokens.css` file also ships a `prefers-reduced-motion` block; keep it when adding animations.

## Site Configuration

Brand identity and navigation are centralized in `src/lib/config.ts` (`site.name/title/description`, `nav` with translated `labelKey`s). Header, Footer, and the `Seo` component read from it. Do not hardcode the brand name in components — no literal copy-paste forks: copy the project, then edit `config.ts` + `messages/*.json` + `tokens.css`.

## UI Kit

Reusable components in `src/lib/components/`:

- `layout/` — `Header`, `Footer`, `ThemeToggle`
- `sections/` — `Hero` (landing hero)
- `ui/` — `Container`, `Button` (variants: `primary|secondary|ghost`, sizes `sm|md|lg`), `Section` (container + vertical padding, `spacing: compact|normal|wide`), `SectionHeading` (eyebrow + title + lead, `as` for heading level), `Card`, `Badge`, `Grid` (`cols: 1-4`, `gap`), `Divider`
- `form/` — `Label`, `Input`, `Textarea` (bindable `value` via `$bindable()`), ready for a contact form
- `consent/` — `CookieBanner` (GDPR-footer banner, accept/decline, client-only after hydration, powered by `consent.ts`; the strict `PARAGLIDE_LOCALE` cookie is never gated)
- `meta/` — `Seo` (`<svelte:head>` title/description/og from `site` config)

Each page composes these; new pages should reuse them instead of repeating markup.

## Spin Up a New Landing Page

1. Copy the project folder (rename, `npm install`).
2. `src/lib/config.ts` — set `site.name`, `title`, `description`, and the `nav` entries (labels come from `labelKey`s in the message files).
3. `src/lib/styles/tokens.css` — adjust primary palette and fonts for the brand.
4. `messages/en.json` + `messages/lv.json` — rewrite page copy; add/remove keys as needed (regenerate with the compile command above).
5. Build pages by composing kit components (`Section` + `SectionHeading` + `Grid` + `Card`, `Seo` per page).
6. Verify: `npm run check` and `npm run build`, then test at 320 / 375 / 768 / 1024 / 1440 in both themes.

## File Structure

```
src/
  app.d.ts              # App namespace type declarations (Error, Locals, PageData, etc.)
  app.html              # HTML shell template (theme bootstrap script)
  lib/                  # Shared code; importable via $lib alias
    index.ts            # Barrel export for lib modules
    assets/             # Static assets such as icons
    config.ts           # Brand identity + navigation (site.name, nav)
    consent.ts          # Consent store (accept/decline, localStorage-backed, SSR-safe)
    styles/tokens.css   # Design tokens + light/dark themes
    components/
      layout/           # Header, Footer, ThemeToggle
      sections/         # Hero
      ui/               # Container, Button, Section, SectionHeading, Card, Badge, Grid, Divider
      form/             # Label, Input, Textarea
      consent/          # CookieBanner
      meta/             # Seo
  routes/
    +layout.svelte      # Root layout (uses {@render children()} for nested routes)
    +page.svelte        # Root page
```

- Anything under `src/lib/` is importable via the `$lib` alias (e.g. `import Button from '$lib/components/ui/Button.svelte';`).
- Routes use SvelteKit's file-based routing; filenames prefixed with `+` are route components.
- Custom path aliases (beyond `$lib`) can be defined in `tsconfig.json` inside `compilerOptions.paths` — currently none are defined.

## TypeScript Configuration

- `tsconfig.json` extends `.svelte-kit/tsconfig.json` (auto-generated during `svelte-kit sync`; do not edit the generated file).
- `strict: true`, `allowJs: true`, `checkJs: true`, `moduleResolution: "bundler"`, `rewriteRelativeImportExtensions: true`.
- `.svelte-kit/` is generated and should never be committed or edited directly.

## Code Conventions

- **Indentation**: Tabs (existing `.svelte`, `.ts`, and config files all use tabs).
- **Script tags**: Use `<script lang="ts">` in all components.
- **Imports**: Always use `$lib` alias for `src/lib/` imports; prefer relative imports only within the same directory.
- **Components**: Prefer component-driven structure. Shared/reusable UI lives in `src/lib/components/` (create this directory as needed).
- **No comments**: Do not add code comments unless specifically asked (matching the existing codebase style, which is comment-free).
- **Double quotes** are not enforced by a linter; follow the existing file style (the current files use no opinionated quote usage since there are no formatters).
- **File naming**: Keep SvelteKit route conventions (`+page.svelte`, `+layout.svelte`, `+server.ts`, `+page.ts`, etc.).

## Responsive Design Rules

All components are built mobile-first and must work from ~320px phones up to desktop. Rules:

- **Global `box-sizing: border-box`** is set in `+layout.svelte` (`:global(*, *::before, *::after)`). All width/padding calculations rely on this; never use `content-box` assumptions.
- **Mobile-first CSS**: Write base styles for the smallest screens; enhance layout only inside `min-width` media queries.
- **Breakpoints** (fixed scale, used across the app): `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
- **Fluid type & spacing**: Use `clamp(min, pref, max)` for large headings and section padding instead of fixed `px` sizes (e.g. `font-size: clamp(2.5rem, 8vw + 1rem, 3rem)`).
- **No fixed layout widths**: Use `width: 100%` + `max-width`; multi-column layouts via grid `repeat(auto-fit, minmax(min(240px, 100%), 1fr))` or a `min-width` media query. Single column by default.
- **Media/content**: Images and videos use `max-width: 100%; height: auto`. Long strings (emails, URLs) in user-facing rows use `overflow-wrap: anywhere`.
- **Touch targets**: Interactive controls (buttons, nav items, links) are ≥ 44px tall/wide. Prefer the `@media (pointer: coarse)` query where behavior must differ for touch.
- **Units**: Use `rem`/`%`/`fr`/`vw` for sizing; reserve `px` for borders and small details. No `px`-width layout containers.
- **No horizontal overflow**: Content must never overflow a 320px viewport; check at widths 320 / 375 / 768 / 1024 / 1440 after changes.
- **Navigation**: The header collapses into a hamburger menu below `md`; the toggle has `aria-expanded`/`aria-controls` and closes on link tap and language change.

## Deployment

`@sveltejs/adapter-auto` auto-selects an adapter based on the host platform (Node, Vercel, Netlify, Cloudflare Pages, Azure). To target a specific platform, replace it with the corresponding adapter package (e.g. `@sveltejs/adapter-vercel`). See https://svelte.dev/docs/kit/adapters.

## Useful References

- SvelteKit docs: https://svelte.dev/docs/kit
- Svelte 5 runes docs: https://svelte.dev/docs/svelte/what-are-runes
- Adapter-auto supported environments: https://svelte.dev/docs/kit/adapter-auto