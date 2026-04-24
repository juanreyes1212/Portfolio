

## Codebase Audit: UX, Styling, Code Quality & Accessibility

Below are findings grouped by category, each with severity (🔴 high / 🟡 medium / 🟢 low) and a concrete fix. No code changes yet — pick which items you want to apply.

---

### Accessibility

**🔴 Nested interactive elements (Work, Blog, Projects sections)**
`<Link>` wraps the entire card AND the inner `<h2>/<h3>` is also a `<Link>` to the same route (Projects card lines 87-89). Screen readers announce duplicate links; HTML spec disallows nested `<a>`. Fix: keep one anchor per card — either the card-wrapping link or a heading link, not both.

**🔴 Decorative motion not gated by `prefers-reduced-motion`**
`HeroSection`, `ProjectsSection`, `CTASection`, `Resume` all use `motion.*` with `initial/animate` but ignore the `useReducedMotion()` hook that already exists. Users with vestibular sensitivity still see slide-ups and infinite floating orbs. Fix: short-circuit `initial`/looping `animate` props when the hook returns true. The global CSS `@media (prefers-reduced-motion)` only disables CSS animations, not Framer Motion.

**🟡 Missing `<h1>` on Resume "page-level" heading semantics**
Resume has an `<h1>` for the name, but it sits inside a `glass` card with the visual page title implicit. Fine, but the page lacks a descriptive `<main id="main-content">` skip target on most pages — only `Index` sets `id="main-content"`. Skip-to-content only works on the homepage. Fix: add `id="main-content"` to `<main>` in every page or move it to `PageLayout`.

**🟡 Icon-only "Clear search" button has no visible focus contrast**
`Blog.tsx` line 87-94 — the X button uses `hover:text-foreground` but no `focus-visible` styling beyond the global outline. Fine functionally, but inconsistent with other interactive elements that explicitly add `focus-visible:ring-2`.

**🟢 Contact info in Resume not all interactive**
Phone and location are plain text; phone should be a `tel:` link, location is fine as text. Email is already linked.

---

### UX

**🟡 "Download Resume" button on CTASection links to `/resume` page, not the PDF**
Inconsistent with the actual Download button on the Resume page. Either rename to "View Resume" or point directly to `/resume.pdf`.

**🟡 Project cards have hover overlay that hides on touch devices**
`ProjectsSection` line 60-69 — the arrow-circle overlay only appears on `:hover`, invisible on mobile. The whole card is already a link via the title, but the visual affordance is lost on touch. Fix: show a persistent small arrow icon on the card corner (already done in Personal cards — apply same pattern to Work cards).

**🟡 Blog search lacks debouncing & empty-state guidance**
Filtering runs on every keystroke (fine for small lists, but worth a `useDeferredValue`). Empty state says "No articles found" but doesn't echo the query: "No articles match 'foo'" is more helpful.

**🟢 Hero animated orb runs forever**
Infinite Framer animations drain battery on mobile. Combine with reduced-motion fix above.

**🟢 No loading/skeleton state for route transitions**
`PageSkeleton.tsx` exists but isn't wired into `AnimatedRoutes`. Worth using with `Suspense` if routes are lazy-loaded, otherwise remove the dead component.

---

### Styling / Design System

**🟡 Buttons re-declare default variant classes**
`HeroSection`, `Resume`, `CTASection`, `Navigation` all pass `className="bg-primary hover:bg-primary/90 text-primary-foreground"` — that's literally the `default` variant. Drop the className; use `variant="default"` (the default).

**🟡 Outline buttons re-declare hover styles**
`className="border-border/50 hover:border-primary/50 hover:bg-primary/5"` appears 3+ times. Either make this a new button variant (e.g. `variant="outlineSubtle"`) in `buttonVariants` or accept the default `outline` variant.

**🟡 Badge color helpers are stringly-typed**
`getStatusColor`/`getCategoryColor` return raw Tailwind classes with hard-coded color names (`green-500`, `purple-500`) that bypass the design system tokens (`--primary`, `--accent`, etc.). Consider mapping to semantic tokens or adding `--success`, `--info`, `--warning` to `index.css`.

**🟡 Inconsistent bullet markers**
Resume uses `●` (line 98), Work uses `•` (line 81). Pick one. Better: use `<ul className="list-disc pl-5">` and let the browser render markers.

**🟢 Glass utility duplicated visually**
`glass` and `glass-strong` differ only by opacity/blur intensity — fine, but the cards then add `rounded-2xl` everywhere. Bake the radius into the `glass` utility or create a `card-glass` class.

**🟢 Unused tokens in `index.css`**
`--bronze`, `--copper-glow` — search confirms only `--copper-glow` is referenced via `copper.glow` in tailwind config but no component uses it. Remove if truly unused.

---

### Code Quality

**🟡 Repeated motion props across pages**
Every section uses identical `initial={{ opacity: 0, y: 30 }} whileInView={{...}} viewport={{ once: true }}`. Extract a `<FadeInOnScroll>` wrapper or a `motionPresets.ts` constants file.

**🟡 Repeated section heading pattern**
"Featured Work / Personal Projects / Skills / Experience / Education" all use `text-2xl/3xl font-bold` with optional gradient span. Extract a `<SectionHeading title highlight />` shared component.

**🟡 Index keys (`key={index}`) used in Resume**
Lines 82, 96, 153 — using array index as key. Fine here since lists are static, but switch to stable IDs (`job.company + job.role`, `edu.school`) for resilience.

**🟡 `Footer.tsx` repeats anchor markup 3 times**
Same className soup for each social link. Map over an array `[{ icon, href, label }]`.

**🟡 Twitter link in Footer points to `https://twitter.com`** (no profile path) — broken link or placeholder.

**🟢 `tailwind.config.lov.json` exists alongside `tailwind.config.ts`** — verify it's not stale.

**🟢 Mixed `<motion.section>` vs `<motion.div>` for the same purpose** — pick one for consistency.

---

### Suggested Priority Order

1. Fix nested `<a>` in Work/Blog/Projects cards (a11y blocker).
2. Wire `useReducedMotion()` into all `motion.*` components (a11y).
3. Move skip-to-content target into `PageLayout` so it works on every page.
4. Fix CTA "Download Resume" link to actually download the PDF.
5. Refactor: `SectionHeading`, `FadeInOnScroll`, Footer social-link map, dedupe button variants.
6. Replace index keys, normalize bullet markers, prune unused CSS tokens.

Reply with which items you want me to implement (or "all of category X") and I'll execute.

