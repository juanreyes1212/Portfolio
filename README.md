# Juan Reyes - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing professional work, personal projects, and technical insights.

## 🚀 Project Overview

This portfolio website serves as a comprehensive showcase of Juan Reyes' 7+ years of frontend development experience, featuring:

- **Professional Work**: Enterprise-scale projects from PetSmart, Hownd, and other companies
- **Personal Projects**: Side projects demonstrating technical exploration and problem-solving
- **Blog & Insights**: Technical articles on frontend development, architecture, and leadership
- **Resume**: Comprehensive professional background and skills

### Key Features

- ⚡ **Performance Optimized**: Core Web Vitals monitoring, image optimization, lazy loading
- 🎨 **Modern Design**: Clean, professional UI with dark/light mode support
- 📱 **Fully Responsive**: Mobile-first design with touch optimization
- ♿ **Accessible**: WCAG 2.1 compliant with comprehensive accessibility features
- 🔍 **SEO Optimized**: Structured data, sitemaps, and meta optimization
- 🔧 **Developer Experience**: TypeScript, ESLint, Prettier, and modern tooling

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React hooks (no external state library needed)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

### Project Structure

\`\`\`
├── app/                          # Next.js App Router pages
│   ├── (routes)/                 # Route groups
│   │   ├── work/                 # Professional work pages
│   │   ├── personal/             # Personal projects pages
│   │   ├── blog/                 # Blog and articles
│   │   └── resume/               # Resume page
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Homepage
│   ├── robots.ts                 # SEO robots configuration
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/                   # Reusable React components
│   ├── ui/                       # shadcn/ui base components
│   ├── theme-provider.tsx        # Dark/light mode provider
│   ├── navigation.tsx            # Main navigation component
│   ├── footer.tsx                # Site footer
│   ├── search-filters.tsx        # Advanced search and filtering
│   ├── pagination.tsx            # Pagination component
│   ├── image-gallery.tsx         # Project image galleries
│   ├── newsletter-signup.tsx     # Email subscription component
│   ├── loading-skeleton.tsx      # Loading state components
│   ├── error-boundary.tsx        # Error handling
│   ├── scroll-to-top.tsx         # Scroll to top functionality
│   └── performance-monitor.tsx   # Core Web Vitals tracking
├── lib/                          # Utility functions and data
│   ├── utils.ts                  # Utility functions (cn, etc.)
│   └── projects.ts               # Project data and helper functions
├── public/                       # Static assets
│   └── images/                   # Project images and assets
└── tailwind.config.ts            # Tailwind CSS configuration
\`\`\`

### Data Architecture

The project uses a file-based data approach with TypeScript interfaces:

\`\`\`typescript
// Core data types
interface BlogPost {
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
  lastModified: string
  priority: number
}

interface WorkProject {
  title: string
  company: string
  duration: string
  description: string
  role: string
  team: string
  challenge: string
  solution: string
  results: string[]
  responsibilities: string[]
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  images?: ImageData[]
  featured?: boolean
  lastModified: string
  priority: number
}

interface PersonalProject {
  title: string
  description: string
  motivation: string
  challenge: string
  solution: string
  features: string[]
  lessons: string[]
  tech: string[]
  status: string
  duration: string
  liveUrl: string
  githubUrl: string
  images?: ImageData[]
  lastModified: string
  priority: number
}
\`\`\`

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Optional: Analytics and monitoring
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_VERCEL_URL=your-domain.com

# Optional: Contact form (if implementing)
CONTACT_EMAIL=your-email@domain.com
\`\`\`

## 📋 Key Areas & Functions

### 1. Content Management (`lib/projects.ts`)

**Purpose**: Central data store for all portfolio content

**Key Functions**:
- `getAllBlogPosts()` - Retrieves all blog posts with metadata
- `getAllWorkProjects()` - Fetches professional work projects
- `getAllPersonalProjects()` - Gets personal side projects
- `paginateItems()` - Handles pagination logic
- `getBlogPost(slug)` - Retrieves individual blog post
- `getWorkProject(slug)` - Gets specific work project
- `getPersonalProject(slug)` - Fetches personal project details

**Adding New Content**:
\`\`\`typescript
// Add to blogPosts object in lib/projects.ts
"new-blog-post-slug": {
  title: "Your Blog Post Title",
  excerpt: "Brief description...",
  content: "Full content...",
  date: "2024-01-01",
  readTime: "5 min read",
  category: "learnings", // or "thoughts"
  tags: ["React", "TypeScript"],
  image: "/path/to/image.jpg",
  featured: false,
  lastModified: "2024-01-01",
  priority: 0.7
}
\`\`\`

### 2. Navigation & Routing (`components/navigation.tsx`)

**Purpose**: Main site navigation with responsive design

**Key Features**:
- Mobile-responsive hamburger menu
- Active route highlighting
- Dark/light mode toggle integration
- Accessibility-compliant navigation

**Customization**:
\`\`\`typescript
const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Personal", href: "/personal" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
]
\`\`\`

### 3. Search & Filtering (`components/search-filters.tsx`)

**Purpose**: Advanced search and filtering for blog posts and projects

**Key Features**:
- Text search across titles, descriptions, and tags
- Category filtering
- Tag-based filtering
- Mobile-responsive filter panel
- Active filter display with clear options

**Usage**:
\`\`\`typescript
<SearchFilters
  searchQuery={searchQuery}
  onSearchChange={setSearchQuery}
  selectedCategory={selectedCategory}
  onCategoryChange={setSelectedCategory}
  categories={categories}
  selectedTags={selectedTags}
  onTagsChange={setSelectedTags}
  availableTags={availableTags}
  placeholder="Search..."
/>
\`\`\`

### 4. Image Management (`components/image-gallery.tsx`)

**Purpose**: Responsive image galleries for project showcases

**Key Features**:
- Lightbox modal for full-size viewing
- Keyboard navigation (arrow keys, escape)
- Thumbnail navigation for multiple images
- Mobile-optimized touch interactions
- Lazy loading and performance optimization

**Image Structure**:
\`\`\`typescript
interface ImageData {
  src: string        // Image path or URL
  alt: string        // Accessibility description
  caption?: string   // Optional caption
}
\`\`\`

### 5. Theme Management (`components/theme-provider.tsx`)

**Purpose**: Dark/light mode functionality

**Key Features**:
- System preference detection
- Manual theme switching
- Persistent theme selection
- Smooth transitions between themes

**Theme Variables** (in `globals.css`):
\`\`\`css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 25 95% 53%;        /* Amber primary color */
  /* ... other CSS variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}
\`\`\`

## 🔄 Key User Flows

### 1. Homepage → Project Discovery
\`\`\`
Homepage → Featured Work/Personal Projects → Project Detail Page → Related Projects
\`\`\`

**Key Components**: 
- Homepage project cards
- Project detail pages with galleries
- Related project suggestions

### 2. Blog Content Discovery
\`\`\`
Homepage/Navigation → Blog Listing → Search/Filter → Article Detail → Related Posts
\`\`\`

**Key Components**:
- Blog listing with pagination
- Search and filter functionality
- Individual blog post pages
- Newsletter signup integration

### 3. Professional Showcase
\`\`\`
Navigation → Work Page → Project Details → Resume → Contact
\`\`\`

**Key Components**:
- Work project listings
- Detailed project case studies
- Resume page with downloadable PDF
- Contact information and CTAs

### 4. Mobile Experience
\`\`\`
Mobile Navigation → Touch-Optimized Cards → Responsive Galleries → Mobile-First Forms
\`\`\`

**Key Considerations**:
- Touch-friendly interface elements
- Optimized image loading
- Responsive typography
- Mobile navigation patterns

## 🛠️ Development Guidelines

### Adding New Pages

1. **Create page file** in appropriate `app/` directory
2. **Add navigation link** in `components/navigation.tsx`
3. **Update sitemap** in `app/sitemap.ts`
4. **Add metadata** for SEO optimization

### Styling Guidelines

- **Use Tailwind classes** for styling
- **Leverage CSS variables** for theme consistency
- **Follow mobile-first** responsive design
- **Maintain accessibility** with proper ARIA labels

### Performance Considerations

- **Image optimization**: Use Next.js `Image` component
- **Lazy loading**: Implement for below-fold content
- **Code splitting**: Leverage Next.js automatic splitting
- **Core Web Vitals**: Monitor with `components/performance-monitor.tsx`

### SEO Best Practices

- **Structured data**: Implement JSON-LD for projects
- **Meta tags**: Use Next.js metadata API
- **Sitemap generation**: Dynamic sitemap in `app/sitemap.ts`
- **Robot.txt**: Configure in `app/robots.ts`

## 📦 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables**
3. **Deploy automatically** on push to main branch

### Manual Deployment

\`\`\`bash
# Build the project
npm run build

# Start production server
npm run start
\`\`\`

## 🔧 Maintenance

### Regular Updates

- **Content updates**: Modify `lib/projects.ts`
- **Dependency updates**: Run `npm update` regularly
- **Performance monitoring**: Check Core Web Vitals
- **SEO monitoring**: Verify sitemap and meta tags

### Adding New Features

1. **Plan component structure**
2. **Implement with TypeScript**
3. **Add proper error handling**
4. **Test responsive design**
5. **Verify accessibility compliance**

## 📞 Support

For questions or issues:
- **Email**: reyes1212@gmail.com
- **LinkedIn**: [Juan Reyes](https://linkedin.com/in/juanreyes1212)
- **GitHub**: [juanreyes1212](https://github.com/juanreyes1212)

---

**Built with ❤️ by Juan Reyes** | Senior Frontend Developer | Mesa, AZ
