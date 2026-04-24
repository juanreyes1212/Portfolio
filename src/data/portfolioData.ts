// Work Projects Data
export const workProjects = [
  {
    slug: "petsmart-ecommerce",
    title: "PetSmart E-Commerce Platform",
    company: "PetSmart",
    description: "Led the frontend development of PetSmart's e-commerce platform serving 1.2M+ monthly users. Architected scalable React components and implemented performance optimizations that reduced load times by 40%.",
    tech: ["React.js", "TypeScript", "Redux", "Contentful", "GraphQL", "Jest"],
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    featured: true,
    role: "Senior Frontend Developer",
    duration: "2021 - Present",
    highlights: [
      "Reduced page load time by 40% through code splitting and lazy loading",
      "Built reusable component library used across 15+ product teams",
      "Implemented A/B testing framework that increased conversion by 25%",
      "Led migration from legacy jQuery to modern React architecture"
    ]
  },
  {
    slug: "hownd-dashboard",
    title: "Hownd Business Dashboard",
    company: "Hownd",
    description: "Built a comprehensive business analytics dashboard with real-time data visualization and performance metrics for small business owners.",
    tech: ["Vue.js", "D3.js", "Node.js", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: true,
    role: "Lead Frontend Developer",
    duration: "2019 - 2021",
    highlights: [
      "Designed real-time analytics dashboard serving 50K+ businesses",
      "Implemented WebSocket-based live updates for instant data refresh",
      "Created custom D3.js visualizations for complex business metrics",
      "Reduced dashboard load time by 60% through optimization"
    ]
  },
  {
    slug: "design-system",
    title: "Enterprise Design System",
    company: "Enterprise",
    description: "Created a scalable design system reducing development time by 40% across multiple product teams with comprehensive documentation and Storybook integration.",
    tech: ["Storybook", "React", "CSS-in-JS", "Figma", "Chromatic"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    featured: false,
    role: "Design Systems Architect",
    duration: "2020 - 2021",
    highlights: [
      "Built 100+ accessible, reusable components",
      "Reduced design-to-development handoff time by 50%",
      "Implemented visual regression testing with Chromatic",
      "Created comprehensive documentation reducing onboarding time"
    ]
  },
  {
    slug: "retail-pos",
    title: "Retail POS System",
    company: "RetailTech",
    description: "Developed a modern point-of-sale system for retail chains with offline capabilities, inventory management, and real-time sync.",
    tech: ["React Native", "TypeScript", "SQLite", "Redux Saga"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    featured: false,
    role: "Frontend Developer",
    duration: "2018 - 2019",
    highlights: [
      "Built offline-first architecture with seamless sync",
      "Implemented barcode scanning and payment processing",
      "Created inventory management module",
      "Deployed to 500+ retail locations"
    ]
  },
];

// Personal Projects Data
export const personalProjects = [
  {
    slug: "spotley-wifi",
    title: "Spotley WiFi",
    status: "Live" as const,
    description: "WiFi management platform for businesses with customer analytics, marketing automation, and captive portal customization.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    link: "https://spotley.io",
    highlights: [
      "Manages 1000+ WiFi hotspots",
      "Built-in marketing automation",
      "Custom captive portal builder",
      "Real-time analytics dashboard"
    ]
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio Site v2",
    status: "In Development" as const,
    description: "Personal portfolio showcasing projects and technical writing with modern animations and dark theme.",
    tech: ["React", "Framer Motion", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
    highlights: [
      "Modern glass-morphism design",
      "Smooth page transitions",
      "Dark theme optimized",
      "SEO optimized"
    ]
  },
  {
    slug: "code-snippets",
    title: "Code Snippets Manager",
    status: "Live" as const,
    description: "A developer tool for organizing, tagging, and quickly accessing code snippets with syntax highlighting.",
    tech: ["Electron", "React", "Monaco Editor", "SQLite"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    highlights: [
      "Cross-platform desktop app",
      "Syntax highlighting for 50+ languages",
      "Cloud sync capabilities",
      "Quick search and organization"
    ]
  },
  {
    slug: "budget-tracker",
    title: "Budget Tracker",
    status: "Archived" as const,
    description: "Personal finance app with expense tracking, budget goals, and visual spending analytics.",
    tech: ["React Native", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    highlights: [
      "Bank integration via Plaid",
      "Spending category analysis",
      "Budget goal tracking",
      "Monthly reports"
    ]
  },
];

// Blog Posts Data
export const blogPosts = [
  {
    slug: "react-helmet-json-ld-seo",
    title: "Boosting SEO in React Apps with react-helmet-async and JSON-LD",
    category: "Performance",
    excerpt: "How I implemented dynamic meta tags and structured data across a multi-page React portfolio — and the practical lessons learned about SEO in single-page applications.",
    content: `Single-page applications have a complicated relationship with SEO. Search engines have gotten better at rendering JavaScript, but relying on that is a gamble. Here's how I took control of SEO in a React app using \`react-helmet-async\` and JSON-LD structured data.

## The Problem with SPAs and SEO

By default, a React app serves a single \`index.html\` with one set of meta tags. Every route — your home page, blog posts, project pages — all share the same \`<title>\` and \`<meta description>\`. That means:

- Google sees the same title for every page
- Social media previews show generic information when links are shared
- Structured data doesn't reflect the actual content of each page

## Why react-helmet-async?

The original \`react-helmet\` library is no longer maintained and has issues with React 18's concurrent features. \`react-helmet-async\` is a drop-in replacement that:

- Supports React 18 and concurrent mode
- Is fully thread-safe (important for SSR)
- Uses a \`HelmetProvider\` context instead of side effects

\`\`\`typescript
// App.tsx — wrap your app once
import { HelmetProvider } from "react-helmet-async";

const App = () => (
  <HelmetProvider>
    <Router>
      <Routes />
    </Router>
  </HelmetProvider>
);
\`\`\`

## Building a Reusable SEO Component

Instead of scattering \`<Helmet>\` tags across every page, I built a single \`<SEO>\` component that handles all meta tags consistently:

\`\`\`typescript
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

const SEO = ({ title, description, canonical, ogImage, ogType = "website", jsonLd, noindex }: SEOProps) => {
  const fullTitle = title ? \`\${title} | Juan Reyes\` : "Juan Reyes | Senior Frontend Developer";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={\`https://juanreyes.dev\${canonical}\`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
\`\`\`

This approach gives every page unique, descriptive metadata with minimal boilerplate.

## JSON-LD: Speaking Google's Language

JSON-LD (JavaScript Object Notation for Linked Data) is Google's preferred format for structured data. It tells search engines *what* your content is — not just what it says.

### Person Schema (Home Page)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Juan Reyes",
  "jobTitle": "Senior Frontend Developer",
  "url": "https://juanreyes.dev",
  "knowsAbout": ["React.js", "Vue.js", "TypeScript"]
}
\`\`\`

This tells Google: "This page is about a specific person with these skills." It can power knowledge panels and rich results.

### BlogPosting Schema (Blog Posts)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "description": "Article excerpt...",
  "datePublished": "2025-03-15",
  "author": { "@type": "Person", "name": "Juan Reyes" }
}
\`\`\`

This enables rich snippets in search results — showing the author, date, and description directly in Google.

## Lessons Learned

### 1. Canonical URLs Prevent Duplicate Content

Without canonical tags, Google might index \`/blog/my-post\`, \`/blog/my-post?\`, and \`/blog/my-post#section\` as separate pages. Always set a canonical URL:

\`\`\`html
<link rel="canonical" href="https://juanreyes.dev/blog/my-post" />
\`\`\`

### 2. Open Graph Tags Are Not Optional

Every page shared on Twitter, LinkedIn, or Slack uses Open Graph tags for previews. Without them, you get a generic card with no image. With them, you control the narrative:

- \`og:title\` — what people see as the headline
- \`og:description\` — the preview text
- \`og:image\` — the visual that makes people click

### 3. Use \`noindex\` for Utility Pages

Your 404 page, search results, and filtered views shouldn't be indexed. Mark them explicitly:

\`\`\`html
<meta name="robots" content="noindex,nofollow" />
\`\`\`

### 4. Test with Real Tools

Don't assume your meta tags work — validate them:

- **Google Rich Results Test** — validates JSON-LD
- **Facebook Sharing Debugger** — previews Open Graph cards
- **Twitter Card Validator** — checks Twitter card rendering

### 5. Helmet Renders Last Wins

If multiple \`<Helmet>\` components set the same tag, the deepest one in the component tree wins. This is actually useful — set defaults at the layout level and override per page.

## The Impact

After implementing per-page SEO:

- Each page has a unique, descriptive title under 60 characters
- Meta descriptions are tailored to content, under 160 characters
- Blog posts show rich snippets in Google with author and date
- Social shares display proper previews with images
- The 404 page is excluded from indexing

## Key Takeaway

SEO in React isn't hard — it's just intentional. A reusable \`<SEO>\` component with \`react-helmet-async\` and JSON-LD structured data gives you full control over how search engines and social platforms see every page of your app.`,
    date: "Mar 28, 2025",
    readTime: "10 min read",
    tags: ["SEO", "React Helmet", "JSON-LD"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    slug: "tdd-legacy-react",
    title: "Implementing TDD in Legacy React Codebases",
    category: "Testing",
    excerpt: "How I retrofitted a test-driven development workflow into an existing React project using Vitest and React Testing Library — and why writing tests first changed the way I ship code.",
    content: `Adopting TDD in a greenfield project is one thing. Retrofitting it into a codebase with zero tests, implicit dependencies, and no test infrastructure? That's a different challenge entirely. Here's how I did it — and what I learned along the way.

## Starting from Zero

The project had no test runner, no testing utilities, and no CI gate for tests. The first step wasn't writing tests — it was building the foundation:

- **Vitest** as the test runner (fast, native ESM, excellent Vite integration)
- **React Testing Library** for component testing
- **jsdom** as the browser environment
- **\`@testing-library/jest-dom\`** for expressive assertions

\`\`\`typescript
// vitest.config.ts
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
\`\`\`

## The Red-Green-Refactor Loop

TDD follows a simple cycle:

1. **Red** — Write a failing test that describes the behavior you want
2. **Green** — Write the minimum code to make it pass
3. **Refactor** — Clean up without changing behavior

The discipline is in *not* writing production code before you have a failing test. It feels slow at first, but it eliminates entire categories of bugs.

## What I Tested First

I started with the components that had the highest risk and the most surface area:

### Navigation Component
- Renders all nav links with correct routes
- Highlights the active route
- Mobile menu opens and closes
- Menu closes on route change
- External links (mailto) work correctly

### PageLayout Component
- Renders children content
- Includes Navigation and Footer
- Optionally shows SkipToContent for accessibility

### 404 Page
- Renders the error heading
- "Return Home" link points to the correct route
- Uses the PageLayout wrapper

## Writing Testable Components

TDD forces you to write components that are testable by design:

- **Props over internal state** — components become predictable
- **Semantic HTML** — \`getByRole\` queries just work
- **Separation of concerns** — logic is extractable and testable in isolation

\`\`\`typescript
// Testing behavior, not implementation
it('closes mobile menu on route change', () => {
  render(<Navigation />, { wrapper: MemoryRouter });
  fireEvent.click(screen.getByLabelText(/open menu/i));
  expect(screen.getByRole('navigation')).toBeVisible();
  // Simulate route change...
  expect(screen.queryByRole('navigation')).not.toBeVisible();
});
\`\`\`

## Lessons Learned

1. **Start with integration tests** — they catch more real bugs per test than unit tests
2. **Use \`screen\` queries** — they're more readable and closer to how users interact
3. **Wrap renders in \`MemoryRouter\`** — any component using \`Link\` or \`useLocation\` needs routing context
4. **Mock sparingly** — the more you mock, the less your tests tell you

## The Payoff

After setting up TDD, every subsequent feature got tests *before* implementation. Refactoring became fearless. The 12 initial tests caught two regressions within the first week.

TDD isn't about writing more tests — it's about writing *better* code.`,
    date: "Mar 15, 2025",
    readTime: "9 min read",
    tags: ["TDD", "Vitest", "React Testing Library"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
  },
  {
    slug: "yagni-codebase-pruning",
    title: "YAGNI in Practice: Auditing and Pruning a Real Codebase",
    category: "Architecture",
    excerpt: "I deleted 41 unused components and removed 35 npm dependencies from a production codebase. Here's the process, the tools, and why less code is always better.",
    content: `YAGNI — "You Aren't Gonna Need It" — is one of those principles every developer agrees with in theory but rarely practices. I recently put it into action on a real project, and the results were dramatic.

## The Problem

The project had accumulated 47 UI components in \`src/components/ui/\`. Only 6 were actually imported anywhere. The rest were scaffolded by a component generator and never used. The \`package.json\` had 50+ dependencies, many tied to those unused components.

Dead code isn't free. It:

- Increases bundle size (even with tree-shaking, some side effects slip through)
- Slows down IDE indexing and TypeScript compilation
- Creates confusion about what's "real" vs. scaffolded
- Adds maintenance burden during dependency updates

## The Audit Process

### Step 1: Identify What's Actually Used

I traced imports from the entry point (\`main.tsx\`) through every page and component:

\`\`\`bash
# Quick grep for imports from the ui directory
grep -r "from.*components/ui" src/ --include="*.tsx" --include="*.ts" | sort -u
\`\`\`

This revealed that only **badge**, **button**, **input**, **toast**, **toaster**, **sonner**, and **tooltip** were imported.

### Step 2: Map Dependencies to Components

Each unused component had associated npm packages:

| Component | Dependencies |
|-----------|-------------|
| accordion | @radix-ui/react-accordion |
| calendar | react-day-picker, date-fns |
| carousel | embla-carousel-react |
| chart | recharts |
| form | react-hook-form, @hookform/resolvers, zod |
| drawer | vaul |
| command | cmdk |

### Step 3: Delete with Confidence

With the import analysis complete, I deleted 41 component files and removed 35 npm dependencies in a single pass. The key was doing it atomically — all deletions in one commit — so reverting would be trivial if something broke.

## The Results

| Metric | Before | After |
|--------|--------|-------|
| UI components | 47 | 6 |
| npm dependencies | 50+ | ~15 |
| \`node_modules\` size | ~180MB | ~95MB |
| TypeScript check time | ~8s | ~4s |

## When to Prune

Make YAGNI audits a regular practice:

1. **After major milestones** — scope tends to bloat during rapid development
2. **Before onboarding new team members** — fewer files = faster ramp-up
3. **During dependency update cycles** — why update what you don't use?

## The Principle

Every line of code is a liability. The best code is no code. YAGNI isn't about being lazy — it's about being intentional. Keep what serves the product, remove everything else.`,
    date: "Feb 20, 2025",
    readTime: "7 min read",
    tags: ["Architecture", "Code Quality", "YAGNI"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
  },
  {
    slug: "axe-core-accessibility-audit",
    title: "Running a Full Accessibility Audit with axe-core",
    category: "Accessibility",
    excerpt: "How I programmatically audited every page of a React app for WCAG violations using axe-core, and the surprising issues I found hiding in plain sight.",
    content: `Manual accessibility testing is essential, but it doesn't scale. For a recent project, I ran a programmatic audit using axe-core across every route — and found violations I never would have caught by eye.

## Setting Up Programmatic Auditing

axe-core can run in any JavaScript environment. I wrote a script that:

1. Renders each page in jsdom
2. Runs axe-core's \`run()\` function
3. Reports violations with severity and remediation guidance

\`\`\`typescript
import axe from 'axe-core';

const results = await axe.run(document.body);
console.log(\`Found \${results.violations.length} violations\`);
results.violations.forEach(v => {
  console.log(\`[\${v.impact}] \${v.id}: \${v.description}\`);
});
\`\`\`

## What I Found

### 1. \`aria-required-children\` Violation (Critical)

The footer had social media links inside a \`div\` with \`role="list"\`, but the children weren't wrapped in \`li\` elements. Screen readers expected list items and got divs.

**Fix:** Replaced the \`div[role="list"]\` with a semantic \`<ul>\` and wrapped each link in an \`<li>\`.

### 2. \`link-name\` Violations (Serious)

Project cards had overlay links with no accessible name. The link contained only an SVG icon (\`ArrowUpRight\`) — no text, no \`aria-label\`, no \`title\`.

**Fix:** Added descriptive \`aria-label\` attributes: \`"View {project.title} details"\`.

### 3. Icon-Only Interactive Elements

Several buttons and links used only icons without accessible labels. sighted users understood the visual affordance, but screen reader users heard "link" with no context.

**Fix:** Added \`aria-hidden="true"\` to decorative icons and \`aria-label\` to their parent interactive elements.

## The Audit Across All Pages

I ran the audit on six routes:

| Page | Violations Before | Violations After |
|------|-------------------|------------------|
| Home | 3 | 0 |
| Work | 1 | 0 |
| Personal | 1 | 0 |
| Blog | 0 | 0 |
| Resume | 0 | 0 |
| 404 | 0 | 0 |

## Integrating into CI

To prevent regressions, I added axe-core checks to the test suite:

\`\`\`typescript
it('has no accessibility violations', async () => {
  const { container } = render(<Page />);
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});
\`\`\`

## Key Takeaways

- **Automated tools catch ~30% of issues** — but they catch the *easy-to-miss* ones
- **Semantic HTML prevents most violations** — use \`<button>\`, \`<nav>\`, \`<ul>\` instead of styled divs
- **Every interactive element needs a name** — if it's clickable, it needs to be announced
- **Run audits on every page** — violations hide in components you don't look at

Accessibility isn't a feature — it's a quality standard.`,
    date: "Jan 25, 2025",
    readTime: "8 min read",
    tags: ["Accessibility", "axe-core", "WCAG"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
  },
  {
    slug: "six-month-enterprise-contract",
    title: "Lessons from a 6-Month Enterprise Contract",
    category: "Leadership",
    excerpt: "What I learned leading a frontend rebuild for a fintech client under NDA — navigating enterprise processes, earning trust, and shipping under pressure.",
    content: `Contract work teaches you things full-time employment never will. Last year I spent six months embedded with a fintech company, leading their frontend rebuild. I can't share specifics due to NDA, but the lessons are universal.

## Earning Trust as an Outsider

Walking into an established team as a contractor puts you in an awkward position. You're expected to lead, but you haven't earned trust yet. My approach:

1. **Listen first** — Spend the first two weeks understanding the codebase, the team dynamics, and the unspoken rules
2. **Quick wins** — Fix a painful bug or improve a slow build pipeline in week one
3. **Document everything** — Contractors who leave documentation earn permanent goodwill
4. **Respect existing decisions** — Don't immediately critique the architecture. Understand *why* before suggesting changes.

## Navigating Enterprise Processes

Enterprise development moves differently than startup development:

- **Change management** — Even CSS changes go through review boards
- **Security reviews** — Every dependency needs approval
- **Compliance requirements** — Financial data has strict handling rules
- **Multiple stakeholders** — Product, design, compliance, security all have sign-off authority

I learned to build these cycles into my estimates instead of fighting them.

## The Technical Challenge

The client needed to modernize a legacy frontend while maintaining feature parity with the existing system. The constraints:

- Zero downtime during migration
- Regulatory compliance for all financial displays
- Support for IE11 (yes, in fintech, legacy browser support is real)
- Pixel-perfect design implementation from a 200-page Figma file

## Leading Without Authority

As a contractor, you don't have organizational authority. You lead through:

- **Competence** — Your code and decisions speak for you
- **Communication** — Over-communicate timelines, risks, and trade-offs
- **Mentorship** — Help the team grow; they'll advocate for your approach
- **Results** — Nothing builds trust like shipping on time

## What I'd Do Differently

- **Negotiate scope earlier** — Feature creep is worse in enterprise because the feedback loop is longer
- **Establish async communication norms** — Meetings consume contractor hours fast
- **Build CI/CD first** — The deployment pipeline was the biggest bottleneck and I should have tackled it in week one

## The Handoff

The most important phase of contract work is the handoff. I spent the final two weeks:

- Writing comprehensive documentation
- Recording architectural decision videos
- Pair programming with the team on complex areas
- Creating a maintenance runbook

A clean handoff is the difference between being called back and being forgotten.`,
    date: "Apr 10, 2024",
    readTime: "10 min read",
    tags: ["Contract Work", "Leadership", "Enterprise"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
  },
  {
    slug: "three-month-contract-healthtech",
    title: "Shipping Fast on a 3-Month Contract",
    category: "Leadership",
    excerpt: "Rapid prototyping and MVP delivery for a healthtech startup under a compressed timeline — lessons in scope management, speed, and knowing when good enough is good enough.",
    content: `Three months. That's all the runway we had to go from Figma mockups to a production-ready MVP. The client was a healthtech startup preparing for a funding round, and the frontend needed to impress investors while being robust enough for beta users.

## Week 1: Setting the Foundation

With only 12 weeks, every decision in week one compounds. I focused on:

- **Tech stack selection** — React + TypeScript + Tailwind. No debates, no experiments. Use what ships fast.
- **Project structure** — Feature-based folder organization from day one
- **CI/CD pipeline** — Automated deployments before writing a single feature
- **Design token system** — Extract colors, spacing, and typography from Figma into CSS variables

## Weeks 2-4: Core Features

The MVP had three critical flows:

1. Patient onboarding
2. Provider dashboard
3. Appointment scheduling

I built them in parallel using mock data, then integrated the API layer once the backend team caught up. This decoupling was the single biggest time-saver.

## Weeks 5-8: Integration and Polish

This is where compressed timelines get dangerous. The temptation is to keep adding features. Instead, I:

- **Froze scope** at week 5 — no new features, only refinement
- **Prioritized mobile** — investors would demo on phones
- **Added loading and error states** — empty screens kill demos
- **Performance optimized** — first load under 2 seconds

## Weeks 9-12: Hardening

The final sprint focused on:

- Cross-browser testing
- Accessibility basics (keyboard nav, screen reader labels)
- Error boundary implementation
- Analytics integration for investor metrics

## Scope Management Lessons

The hardest conversations were about what *not* to build:

- **"Can we add real-time chat?"** — No, but we can add a chat placeholder that shows it's planned
- **"The design has animations everywhere"** — We'll animate the hero and key transitions, not everything
- **"We need admin features"** — Phase 2. The MVP is patient-facing only.

Saying no kindly but firmly is the most valuable skill in contract work.

## The Result

The MVP launched on time. The client secured their funding round. Three months later, they brought me back for a follow-up engagement to build the features we'd deferred.

## Key Takeaways

1. **Velocity comes from decisions, not typing speed** — decide fast, build fast
2. **Mock data unblocks everything** — don't wait for the backend
3. **Scope freezes save projects** — pick a date and hold the line
4. **Good enough ships; perfect doesn't** — polish what users see, skip what they don't`,
    date: "Feb 5, 2024",
    readTime: "8 min read",
    tags: ["Contract Work", "MVP", "Startups"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
  },
  {
    slug: "wcag-certification-journey",
    title: "Earning My WCAG 2.1 Certification: What I Learned",
    category: "Accessibility",
    excerpt: "My journey to becoming IAAP WAS certified — the study process, the exam experience, and how it fundamentally changed how I write code.",
    content: `I've cared about accessibility for years, but studying for the IAAP Web Accessibility Specialist (WAS) certification showed me how much I didn't know. Here's the full story.

## Why Get Certified?

I'd been building "accessible" websites for years, but my knowledge was patchy:

- I knew about alt text and color contrast
- I understood semantic HTML basics
- I could fix issues flagged by automated tools

But I couldn't confidently answer: *"Does this component meet WCAG 2.1 Level AA?"* The certification forced me to fill those gaps systematically.

## The Study Plan

I spent three months preparing, roughly 5-7 hours per week:

### Month 1: WCAG Deep Dive
- Read every WCAG 2.1 success criterion (all 78 of them)
- Studied the "Understanding" documents for each criterion
- Practiced identifying which criteria apply to specific components

### Month 2: Assistive Technology
- Used VoiceOver daily for all web browsing
- Tested with NVDA on a Windows VM
- Learned JAWS keyboard shortcuts
- Understood how screen readers parse ARIA roles and states

### Month 3: Practice and Review
- Audited five real websites using the WCAG-EM methodology
- Took practice exams from Deque University
- Reviewed every criterion I'd gotten wrong

## Surprising Things I Learned

### 1. ARIA is a Last Resort
The first rule of ARIA is *don't use ARIA*. Native HTML elements provide built-in accessibility that ARIA can only approximate. I was over-using ARIA roles on elements that already had semantic meaning.

### 2. Focus Management is Hard
Modal dialogs, dropdown menus, and single-page app route changes all require careful focus management. The focus should move predictably, and users should always know where they are.

### 3. Cognitive Accessibility Matters
WCAG 2.1 added criteria for cognitive and learning disabilities:
- **Identify Input Purpose** (1.3.5) — autocomplete attributes help password managers and assistive tech
- **Reflow** (1.4.10) — content should work at 400% zoom
- **Text Spacing** (1.4.12) — users may override your CSS for readability

### 4. Mobile Accessibility is Different
Touch targets need to be at least 44x44 CSS pixels. Gesture-based interactions need alternatives. Screen reader behavior differs significantly between iOS and Android.

## The Exam

The WAS exam is 75 multiple-choice questions in 2 hours:

- ~40% WCAG knowledge (criteria, conformance levels, principles)
- ~30% testing methodology (tools, techniques, reporting)
- ~30% implementation (HTML, ARIA, CSS techniques)

The hardest questions weren't about knowing the rules — they were about applying judgment to ambiguous scenarios.

## How It Changed My Code

Since earning the certification, I:

- **Start with semantic HTML** and only add ARIA when native elements fall short
- **Test with keyboard first** before even looking at the visual design
- **Include accessibility criteria** in every user story's definition of done
- **Run axe-core in CI** to catch regressions automatically
- **Advocate for accessibility** in design reviews, not just code reviews

## Is It Worth It?

Absolutely. The certification didn't teach me accessibility — it taught me to *think* about accessibility. Every component I build now, I instinctively consider: how does this work without a mouse? Without sight? Without perfect cognition?

That mental model is worth more than the credential itself.`,
    date: "Nov 12, 2023",
    readTime: "11 min read",
    tags: ["Accessibility", "WCAG", "Certification"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
  },
  {
    slug: "continuous-learning-practice",
    title: "Leveling Up: Building a Continuous Learning Practice",
    category: "learnings",
    excerpt: "How I structure my professional development — balancing certifications, side projects, conference talks, and hands-on learning without burning out.",
    content: `The frontend ecosystem moves fast. Frameworks evolve, best practices shift, and new tools emerge constantly. Staying current isn't optional — but it also can't consume every waking hour. Here's how I've built a sustainable learning practice.

## The 70-20-10 Framework

I structure my learning time roughly as:

- **70% hands-on work** — Learning by building real things (side projects, contract work, open source)
- **20% social learning** — Code reviews, mentoring, conference talks, community discussions
- **10% formal education** — Courses, certifications, books, structured curricula

This ratio keeps learning grounded in practical application.

## Certifications: Strategic, Not Compulsive

I pursue certifications when they fill a specific knowledge gap:

- **IAAP WAS** — Filled gaps in my accessibility knowledge and gave me credibility in design reviews
- **AWS Cloud Practitioner** — Gave me enough backend context to have informed architecture discussions

I don't collect certifications for resume padding. Each one should change how I work.

## Side Projects as Learning Labs

Side projects are my primary learning tool. Each one has a learning objective:

| Project | Learning Goal |
|---------|--------------|
| Spotley WiFi | Next.js app router, Supabase, Stripe integration |
| Code Snippets Manager | Electron, desktop app patterns, SQLite |
| Portfolio v2 | Framer Motion, advanced Tailwind, performance optimization |

The key is *finishing* projects, not starting them. A shipped side project teaches more than five abandoned ones.

## Conference Talks and Writing

Teaching forces you to understand deeply. I commit to:

- **2-3 blog posts per quarter** on topics I'm actively learning
- **1 conference talk per year** on something I've shipped in production
- **Weekly tech discussions** with my team or community

Writing this blog is itself a learning practice. Explaining TDD or accessibility auditing to others solidified my own understanding.

## Structured Reading

I maintain a reading queue with three categories:

### Technical Depth
- Language and framework documentation (yes, actually reading the docs)
- RFCs and proposals for upcoming features
- Academic papers on relevant CS topics

### Technical Breadth
- Blogs from engineers at companies I admire
- Conference talk recordings from events I couldn't attend
- Newsletters like JavaScript Weekly and Frontend Focus

### Non-Technical
- Books on leadership and communication
- Product management perspectives
- Design thinking and UX research

## Avoiding Burnout

The most important part of continuous learning is sustainability:

1. **Set boundaries** — No learning after 8pm. Weekends are optional.
2. **Follow curiosity** — Forced learning doesn't stick. Learn what excites you.
3. **Celebrate progress** — Keep a "things I learned" log. Review it monthly.
4. **Take breaks** — Some months I learn nothing new and that's fine.
5. **Say no** — Not every new framework deserves your attention.

## The Compound Effect

Individual learning sessions feel small. But over years, they compound:

- Year 1: "I can build React components"
- Year 3: "I can architect frontend systems"
- Year 5: "I can lead teams and make technology decisions"
- Year 7+: "I can mentor others through the same journey"

The key is consistency, not intensity. Thirty minutes of focused learning daily beats an occasional weekend binge.

## My Current Learning Queue

For the curious, here's what I'm studying right now:

- **React Server Components** — Understanding the mental model shift
- **View Transitions API** — Native browser animations for page transitions
- **AI-assisted development** — Integrating LLMs into development workflows thoughtfully
- **System design** — Scaling frontend architectures beyond single applications

The learning never stops — and that's what makes this career exciting.`,
    date: "Jul 8, 2023",
    readTime: "9 min read",
    tags: ["Learning", "Career", "Professional Development"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop",
  },
  {
    slug: "scalable-design-systems",
    title: "Building Scalable Design Systems for Enterprise Applications",
    category: "Architecture",
    excerpt: "How to create and maintain design systems that scale across multiple product teams while ensuring consistency and developer experience.",
    content: `Design systems are the backbone of modern enterprise applications. After building and maintaining design systems across multiple organizations, I've learned that success depends on three core principles: consistency, flexibility, and documentation.

## The Foundation: Tokens First

Before diving into components, establish your design tokens. These are the atomic values—colors, spacing, typography, shadows—that form the foundation of your entire system. Using CSS custom properties or a tool like Style Dictionary allows you to:

- Maintain a single source of truth
- Support theming and dark mode
- Enable platform-specific implementations

## Component Architecture

When building components, I follow a layered approach:

1. **Primitive components** - Basic building blocks like Box, Text, and Flex
2. **Composite components** - Buttons, Inputs, Cards built from primitives
3. **Pattern components** - Complex UI patterns like Forms, Modals, Navigation

Each layer builds upon the previous, creating a predictable and maintainable hierarchy.

## Documentation is Everything

A design system without documentation is just a component library. Invest heavily in:

- Interactive examples with code snippets
- Accessibility guidelines for each component
- Do's and Don'ts with visual examples
- Migration guides for version updates

Tools like Storybook combined with MDX make this process seamless.

## Governance and Adoption

The hardest part isn't building the system—it's getting teams to adopt it. Establish a governance model that includes:

- Regular office hours for questions
- A contribution process for new components
- Metrics tracking adoption across teams
- Champions within each product team

Remember: a design system is a product, not a project. It requires ongoing investment and iteration to remain valuable.`,
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["Design Systems", "React", "Architecture"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
  },
  {
    slug: "react-performance-optimization",
    title: "Performance Optimization Strategies for React Applications",
    category: "Performance",
    excerpt: "Deep dive into React performance patterns including memoization, lazy loading, bundle optimization, and runtime performance monitoring.",
    content: `Performance is crucial for user experience. After optimizing applications serving millions of users, here are the strategies that consistently deliver results.

## Measure First, Optimize Second

Before making any changes, establish baselines using:

- **Lighthouse** for overall performance scores
- **React DevTools Profiler** for component render analysis
- **Web Vitals** for real-user metrics (LCP, FID, CLS)

Without measurements, you're just guessing.

## Code Splitting and Lazy Loading

The fastest code is code that never loads. Implement route-based code splitting:

\`\`\`javascript
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
\`\`\`

Combine with Suspense boundaries and loading skeletons for a smooth experience.

## Memoization Done Right

React.memo, useMemo, and useCallback are powerful but often misused. Only memoize when:

- The computation is genuinely expensive
- The component renders frequently with the same props
- You've measured and confirmed a performance issue

Over-memoization adds complexity without benefits.

## Virtual Lists for Large Data

Rendering thousands of items kills performance. Use virtualization libraries like react-window or TanStack Virtual to only render visible items.

## Bundle Analysis

Regularly analyze your bundle with tools like webpack-bundle-analyzer. Common issues include:

- Importing entire libraries when you need one function
- Duplicate dependencies across chunks
- Large images or fonts embedded in JavaScript

## The 40% Rule

In my experience, focusing on the biggest bottlenecks typically yields 40% improvements before hitting diminishing returns. Identify your top 3 performance issues and tackle those first.`,
    date: "Nov 28, 2024",
    readTime: "12 min read",
    tags: ["React", "Performance", "Optimization"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  },
  {
    slug: "leading-frontend-teams",
    title: "Leading Frontend Teams: Lessons from the Trenches",
    category: "Leadership",
    excerpt: "Insights on technical leadership, mentoring developers, code reviews, and fostering a culture of continuous improvement.",
    content: `Leading a frontend team requires balancing technical expertise with people skills. Here's what I've learned mentoring developers and leading teams over the years.

## Technical Leadership vs Management

As a tech lead, your job isn't to write all the code—it's to multiply your team's effectiveness. This means:

- **Unblocking** team members when they're stuck
- **Architecting** solutions that the team can implement
- **Reviewing** code to maintain quality and share knowledge
- **Mentoring** to grow individual capabilities

## Code Reviews as Teaching Moments

Code reviews are your highest-leverage activity. I approach them with three goals:

1. **Catch bugs and issues** - The obvious purpose
2. **Share knowledge** - Explain the "why" behind suggestions
3. **Maintain consistency** - Ensure code aligns with team standards

Always start with what's good about the PR. Lead with praise, then suggestions.

## Building a Learning Culture

Create space for growth through:

- **Weekly tech talks** where team members share learnings
- **Pair programming** sessions for complex features
- **Documentation** as a first-class citizen
- **Blameless postmortems** when things go wrong

## Managing Technical Debt

Every codebase accumulates debt. The key is managing it intentionally:

- Maintain a tech debt backlog with prioritization
- Allocate 20% of each sprint to improvements
- Tie debt reduction to business outcomes
- Celebrate cleanup work, not just features

## The Human Side

Remember that your team members are humans first, developers second. Invest time in:

- Understanding career goals
- Providing regular feedback
- Advocating for their growth
- Creating psychological safety

The best code comes from teams that feel supported and challenged.`,
    date: "Oct 10, 2024",
    readTime: "6 min read",
    tags: ["Leadership", "Teams", "Culture"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Codebases",
    category: "TypeScript",
    excerpt: "Practical TypeScript patterns and practices that improve code quality, maintainability, and developer productivity.",
    content: `TypeScript has become essential for large-scale JavaScript applications. Here are practices that have proven valuable across codebases of all sizes.

## Strict Mode from Day One

Enable strict mode in tsconfig.json immediately:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

It's much harder to add strictness to an existing codebase than to start with it.

## Type Inference is Your Friend

Let TypeScript infer types when obvious:

\`\`\`typescript
// ❌ Verbose
const items: string[] = ['a', 'b', 'c'];

// ✅ Inferred
const items = ['a', 'b', 'c'];
\`\`\`

Explicit types when documenting APIs, inference for implementation details.

## Discriminated Unions for State

Model complex state with discriminated unions:

\`\`\`typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
\`\`\`

TypeScript will narrow the type based on the status field.

## Utility Types Are Powerful

Master built-in utility types:

- \`Partial<T>\` - Make all properties optional
- \`Required<T>\` - Make all properties required
- \`Pick<T, K>\` - Select specific properties
- \`Omit<T, K>\` - Exclude specific properties
- \`Record<K, V>\` - Create object types

## Avoid 'any' Like the Plague

Every 'any' is a hole in your type safety. When you need flexibility:

- Use \`unknown\` for truly unknown types
- Use generics for reusable patterns
- Use type guards to narrow types safely

## Organize Types Thoughtfully

For large codebases:

- Co-locate types with their implementations
- Export shared types from dedicated modules
- Use barrel files sparingly (they can hurt tree-shaking)
- Consider a \`types/\` directory for cross-cutting concerns`,
    date: "Sep 5, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
  },
  {
    slug: "accessibility-frontend",
    title: "Making Accessibility a Priority in Frontend Development",
    category: "Accessibility",
    excerpt: "A comprehensive guide to building accessible web applications that work for everyone, including WCAG compliance strategies.",
    content: `Accessibility isn't just a checkbox—it's about creating inclusive experiences that work for everyone. Here's how to build accessibility into your development process.

## Understanding WCAG

The Web Content Accessibility Guidelines (WCAG) are organized around four principles (POUR):

- **Perceivable** - Information must be presentable to users
- **Operable** - UI components must be operable
- **Understandable** - Information and UI must be understandable
- **Robust** - Content must be robust enough for assistive technologies

Aim for WCAG 2.1 Level AA as your baseline.

## Semantic HTML is the Foundation

Before reaching for ARIA, use semantic HTML:

\`\`\`html
<!-- ❌ Div soup -->
<div class="button" onclick="submit()">Submit</div>

<!-- ✅ Semantic -->
<button type="submit">Submit</button>
\`\`\`

Native elements provide keyboard support, focus management, and screen reader announcements for free.

## Keyboard Navigation

Every interactive element must be keyboard accessible:

- Tab order should follow visual order
- Focus states must be visible
- Escape should close modals/dropdowns
- Arrow keys for navigation within components

Test by unplugging your mouse and navigating your entire application.

## Color and Contrast

- Maintain 4.5:1 contrast ratio for normal text
- 3:1 for large text and UI components
- Never use color alone to convey information
- Test with color blindness simulators

## Screen Reader Testing

Regularly test with screen readers:

- **VoiceOver** (Mac) - Built into macOS
- **NVDA** (Windows) - Free and widely used
- **JAWS** (Windows) - Enterprise standard

Listen to how your content sounds, not just how it looks.

## Automated Testing

Integrate accessibility testing into your CI/CD:

- **eslint-plugin-jsx-a11y** for static analysis
- **axe-core** for runtime testing
- **Lighthouse** for overall audits

Automated tools catch about 30% of issues—manual testing is still essential.`,
    date: "Aug 18, 2024",
    readTime: "9 min read",
    tags: ["Accessibility", "WCAG", "UX"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
  },
  {
    slug: "vue-to-react-migration",
    title: "Migrating from Vue.js to React: A Practical Guide",
    category: "Migration",
    excerpt: "Step-by-step approach to migrating a large Vue.js application to React while maintaining business continuity.",
    content: `Framework migrations can be daunting, but with the right strategy, you can migrate incrementally while maintaining business continuity. Here's the approach I used for a 100K+ line codebase.

## Why Migrate?

Before starting, ensure you have valid reasons:

- Team expertise shifting toward React
- Ecosystem requirements (specific libraries)
- Hiring considerations
- Performance requirements

Don't migrate just because React is popular. Vue is excellent.

## The Strangler Fig Pattern

Instead of a big-bang rewrite, use the strangler fig pattern:

1. Build new features in React
2. Gradually replace Vue components
3. Eventually remove all Vue code

This approach reduces risk and delivers value continuously.

## Setting Up the Hybrid Architecture

Use module federation or a micro-frontend approach to run both frameworks:

\`\`\`javascript
// Shell application loads either Vue or React
const loadComponent = (framework, path) => {
  if (framework === 'vue') {
    return loadVueComponent(path);
  }
  return loadReactComponent(path);
};
\`\`\`

## Component Migration Strategy

Migrate bottom-up, starting with leaf components:

1. **Utilities and hooks** - Pure functions translate directly
2. **Presentational components** - Stateless components are straightforward
3. **Container components** - State management requires more thought
4. **Page components** - Migrate last, as they orchestrate everything

## State Management Translation

| Vue Concept | React Equivalent |
|-------------|------------------|
| data() | useState |
| computed | useMemo |
| watch | useEffect |
| methods | Regular functions |
| Vuex | Redux/Zustand |

## Testing During Migration

Maintain test coverage throughout:

- Keep existing Vue tests running
- Write new tests for React components
- Integration tests ensure feature parity
- E2E tests validate user journeys

## Timeline Expectations

For a 100K+ line codebase with a team of 5:

- Setup and tooling: 2-4 weeks
- First features in React: 4-6 weeks
- 50% migration: 6-12 months
- Complete migration: 12-18 months

Plan for the long haul and celebrate incremental wins.`,
    date: "Jul 22, 2024",
    readTime: "15 min read",
    tags: ["Vue.js", "React", "Migration"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
  },
  {
    slug: "state-management-2024",
    title: "Modern State Management in React: Beyond Redux",
    category: "React",
    excerpt: "Exploring modern state management solutions including Zustand, Jotai, and React Query for different use cases.",
    content: `The React state management landscape has evolved significantly. Redux isn't always the answer anymore. Let's explore when to use what.

## The State Categories

First, categorize your state:

1. **Server state** - Data from APIs (use React Query/SWR)
2. **Client state** - UI state, form state (use local state/Zustand)
3. **URL state** - Filters, pagination (use router state)
4. **Form state** - Input values, validation (use React Hook Form)

Each category has optimal solutions.

## React Query for Server State

React Query has revolutionized how we handle server state:

\`\`\`typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
\`\`\`

It handles caching, background refetching, optimistic updates, and more.

## Zustand for Simple Client State

Zustand provides a minimal, hook-based API:

\`\`\`typescript
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

Perfect for global client state without boilerplate.

## Jotai for Atomic State

Jotai excels at fine-grained reactivity:

\`\`\`typescript
const countAtom = atom(0);
const doubleAtom = atom((get) => get(countAtom) * 2);
\`\`\`

Great for complex derived state and avoiding unnecessary re-renders.

## When Redux Still Makes Sense

Redux remains valuable for:

- Complex state with many reducers
- Time-travel debugging requirements
- Strong TypeScript support with RTK
- Teams already familiar with Redux patterns

## My Recommendations

- Start with React's built-in state
- Add React Query for server state early
- Use Zustand when you need global client state
- Consider Jotai for complex atomic state
- Use Redux for large teams with complex requirements

The best state management is the minimum state management needed.`,
    date: "Jun 15, 2024",
    readTime: "11 min read",
    tags: ["React", "State Management", "Zustand"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    slug: "testing-strategies-frontend",
    title: "Testing Strategies for Frontend Applications",
    category: "Testing",
    excerpt: "A practical approach to testing React applications with Jest, React Testing Library, and Cypress for confidence in production.",
    content: `Testing frontend applications requires a balanced approach. Here's how to build a testing strategy that provides confidence without slowing down development.

## The Testing Pyramid (Updated)

The traditional pyramid needs adjustment for frontend:

- **E2E tests** - Few but critical user journeys
- **Integration tests** - Most of your tests should be here
- **Unit tests** - For complex utilities and edge cases

Integration tests at the component level provide the best ROI.

## React Testing Library Philosophy

RTL encourages testing behavior, not implementation:

\`\`\`typescript
// ❌ Testing implementation
expect(component.state.isOpen).toBe(true);

// ✅ Testing behavior
expect(screen.getByRole('dialog')).toBeVisible();
\`\`\`

Test what users see and do, not internal state.

## What to Test

Focus testing efforts on:

- **User flows** - Complete journeys through your app
- **Edge cases** - Error states, loading states, empty states
- **Accessibility** - Keyboard navigation, ARIA attributes
- **Business logic** - Complex calculations, validations

Don't test:

- Third-party libraries
- Framework internals
- Trivial implementations

## Mocking Strategy

Mock at the network boundary:

\`\`\`typescript
import { rest } from 'msw';

const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  }),
];
\`\`\`

MSW (Mock Service Worker) provides realistic API mocking.

## E2E with Cypress

Reserve E2E for critical paths:

- Authentication flows
- Payment processing
- Core feature happy paths

\`\`\`javascript
describe('Checkout', () => {
  it('completes purchase successfully', () => {
    cy.login();
    cy.addToCart('product-1');
    cy.checkout();
    cy.contains('Order confirmed');
  });
});
\`\`\`

## Continuous Integration

Run tests on every PR:

- Unit/integration tests on every commit
- E2E tests on merge to main
- Visual regression tests for UI changes

Fast feedback loops catch issues early.`,
    date: "May 20, 2024",
    readTime: "10 min read",
    tags: ["Testing", "Jest", "Cypress"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
  },
];

// Resume Data
export const resumeData = {
  name: "Juan Reyes",
  title: "Senior Frontend Developer",
  location: "Mesa, AZ",
  email: "reyes1212@gmail.com",
  phone: "(480) 435-2155",
  summary: "Results-oriented software development professional with over 7 years of experience leading the design, development, and strategy for high-impact web applications. Expert in React, Vue.js, and enterprise-scale frontend architecture.",
  experience: [
    {
      company: "PetSmart",
      role: "Senior Frontend Developer",
      duration: "2021 - Present",
      location: "Phoenix, AZ",
      highlights: [
        "Lead frontend development for e-commerce platform serving 1.2M+ monthly users",
        "Architected React component library reducing development time by 40%",
        "Implemented performance optimizations reducing page load time by 40%",
        "Mentored team of 5 junior developers"
      ]
    },
    {
      company: "Hownd",
      role: "Lead Frontend Developer",
      duration: "2019 - 2021",
      location: "Tempe, AZ",
      highlights: [
        "Built real-time analytics dashboard for 50K+ small businesses",
        "Led Vue.js to React migration for core platform",
        "Implemented A/B testing framework increasing conversion by 25%",
        "Established frontend coding standards and review processes"
      ]
    },
    {
      company: "RetailTech Solutions",
      role: "Frontend Developer",
      duration: "2017 - 2019",
      location: "Scottsdale, AZ",
      highlights: [
        "Developed React Native POS system for 500+ retail locations",
        "Built offline-first architecture with seamless data sync",
        "Created inventory management module with real-time updates"
      ]
    }
  ],
  skills: {
    frontend: ["React.js", "Vue.js", "Next.js", "TypeScript", "JavaScript ES6+", "HTML5/CSS3"],
    styling: ["Tailwind CSS", "Styled Components", "SCSS", "CSS-in-JS"],
    state: ["Redux", "Zustand", "React Query", "Vuex"],
    testing: ["Jest", "Cypress", "React Testing Library", "Playwright"],
    tools: ["Git", "Docker", "CI/CD", "Webpack", "Vite", "Storybook"],
    design: ["Figma", "Adobe XD", "Design Systems", "Accessibility (WCAG 2.1)"]
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Arizona State University",
      year: "2017"
    }
  ]
};
