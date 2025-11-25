export interface BlogPost {
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

export interface ImageData {
  src: string
  alt: string
  caption?: string
}

export interface WorkProject {
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

export interface PersonalProject {
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

// Professional blog posts focused on Juan's expertise
export const blogPosts: Record<string, BlogPost> = {
  "migrating-enterprise-ecommerce-to-react-contentful": {
    title: "Migrating Enterprise E-commerce to React & Contentful: Lessons from PetSmart",
    excerpt:
      "How we successfully migrated PetSmart's enterprise e-commerce platform to a modern React.js and Contentful architecture, serving 1.2M+ monthly users while improving performance and developer experience.",
    content:
      "Leading the migration of a legacy e-commerce platform serving over 1.2 million monthly users taught me invaluable lessons about enterprise-scale frontend architecture, content management, and team coordination.",
    date: "2024-01-20",
    readTime: "12 min read",
    category: "learnings",
    tags: ["React", "Contentful", "E-commerce", "Migration", "Enterprise", "Performance"],
    image: "/placeholder.svg?height=400&width=600&text=React+Migration",
    featured: true,
    lastModified: "2024-01-20",
    priority: 0.9,
  },
  "building-design-systems-at-scale": {
    title: "Building Design Systems at Scale: The Sparky Design System Story",
    excerpt:
      "How we engineered and governed a library of 50+ reusable components using Storybook, reducing development time by 40% and cutting redundant coding by over 80%.",
    content:
      "Creating a comprehensive design system for an enterprise e-commerce platform requires careful planning, strong governance, and buy-in from multiple teams. Here's how we built the Sparky Design System.",
    date: "2024-01-15",
    readTime: "10 min read",
    category: "learnings",
    tags: ["Design Systems", "Storybook", "React", "Component Library", "Enterprise"],
    image: "/placeholder.svg?height=400&width=600&text=Design+Systems",
    featured: false,
    lastModified: "2024-01-15",
    priority: 0.8,
  },
  "ab-testing-conversion-optimization": {
    title: "A/B Testing for Conversion Optimization: Driving 2-3% Increases",
    excerpt:
      "How strategic A/B testing with Optimizely on critical UI elements like sticky checkout CTAs can drive meaningful conversion improvements in e-commerce.",
    content:
      "A/B testing isn't just about changing button colors. It's about understanding user behavior, forming hypotheses, and making data-driven decisions that impact the bottom line.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "learnings",
    tags: ["A/B Testing", "Optimizely", "Conversion", "UX", "Data-Driven Design"],
    image: "/placeholder.svg?height=400&width=600&text=AB+Testing",
    featured: false,
    lastModified: "2024-01-10",
    priority: 0.7,
  },
  "vue-to-react-migration-strategies": {
    title: "Vue to React Migration: Strategies for Large Applications",
    excerpt:
      "Lessons learned from working with both Vue.js at Hownd and React.js at PetSmart, including migration strategies and framework comparison insights.",
    content:
      "Having worked extensively with both Vue.js and React in production environments, I've gained unique insights into when and how to migrate between these popular frameworks.",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "learnings",
    tags: ["Vue.js", "React", "Migration", "Framework Comparison", "Frontend Architecture"],
    image: "/placeholder.svg?height=400&width=600&text=Vue+React",
    featured: false,
    lastModified: "2024-01-05",
    priority: 0.7,
  },
  "accessibility-in-enterprise-applications": {
    title: "Implementing WCAG 2.1 in Enterprise Applications",
    excerpt:
      "How we achieved comprehensive WCAG 2.1 accessibility standards across PetSmart's e-commerce platform and the business impact of inclusive design.",
    content:
      "Accessibility isn't just about compliance—it's about creating inclusive experiences that serve all users while often improving overall usability and SEO performance.",
    date: "2023-12-28",
    readTime: "11 min read",
    category: "learnings",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "Enterprise", "UX"],
    image: "/placeholder.svg?height=400&width=600&text=Accessibility",
    featured: false,
    lastModified: "2023-12-28",
    priority: 0.8,
  },
  "mentoring-junior-developers": {
    title: "Mentoring Junior Developers: Building Strong Frontend Teams",
    excerpt:
      "Insights from mentoring junior developers and establishing coding standards that reduced production defects by 37% while fostering team growth.",
    content:
      "Effective mentoring goes beyond code reviews. It's about creating an environment where junior developers can grow, learn, and contribute meaningfully to the team.",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "thoughts",
    tags: ["Mentoring", "Team Leadership", "Code Reviews", "Professional Development"],
    image: "/placeholder.svg?height=400&width=600&text=Mentoring",
    featured: false,
    lastModified: "2023-12-20",
    priority: 0.6,
  },
  "performance-optimization-core-web-vitals": {
    title: "Optimizing Core Web Vitals for E-commerce Success",
    excerpt:
      "Practical strategies for improving Core Web Vitals and SEO rankings in large-scale e-commerce applications, with real-world examples from PetSmart.",
    content:
      "Core Web Vitals aren't just Google metrics—they directly impact user experience, conversion rates, and business success. Here's how we optimized them at scale.",
    date: "2023-12-15",
    readTime: "10 min read",
    category: "learnings",
    tags: ["Performance", "Core Web Vitals", "SEO", "E-commerce", "Optimization"],
    image: "/placeholder.svg?height=400&width=600&text=Performance",
    featured: false,
    lastModified: "2023-12-15",
    priority: 0.7,
  },
  "from-teacher-to-developer": {
    title: "From Education to Engineering: My Career Transition Story",
    excerpt:
      "How I transitioned from a Bachelor's in Education to becoming a Senior Frontend Developer, and the transferable skills that made the journey possible.",
    content:
      "Career transitions can be challenging, but the skills from teaching—communication, patience, problem-solving—have been invaluable in my development career.",
    date: "2023-12-10",
    readTime: "6 min read",
    category: "thoughts",
    tags: ["Career Change", "Education", "Personal Growth", "Teaching", "Development"],
    image: "/placeholder.svg?height=400&width=600&text=Career+Transition",
    featured: false,
    lastModified: "2023-12-10",
    priority: 0.5,
  },
  "modern-frontend-architecture-patterns": {
    title: "Modern Frontend Architecture Patterns for Enterprise Applications",
    excerpt:
      "Exploring architectural patterns that scale: from micro-frontends to component-driven development, based on experience building enterprise applications.",
    content:
      "Building scalable frontend architectures requires careful consideration of team structure, technology choices, and long-term maintainability.",
    date: "2023-12-05",
    readTime: "13 min read",
    category: "learnings",
    tags: ["Architecture", "Micro-frontends", "Scalability", "Enterprise", "Frontend"],
    image: "/placeholder.svg?height=400&width=600&text=Architecture",
    featured: false,
    lastModified: "2023-12-05",
    priority: 0.8,
  },
  "analytics-driven-development": {
    title: "Analytics-Driven Development: Making Data-Informed UI Decisions",
    excerpt:
      "How to leverage Google Analytics, Amplitude, and user behavior data to make informed frontend development decisions that improve user experience.",
    content:
      "Data should drive our development decisions. Here's how to effectively use analytics to build better user interfaces and experiences.",
    date: "2023-11-28",
    readTime: "9 min read",
    category: "learnings",
    tags: ["Analytics", "Data-Driven", "Google Analytics", "User Experience", "Metrics"],
    image: "/placeholder.svg?height=400&width=600&text=Analytics",
    featured: false,
    lastModified: "2023-11-28",
    priority: 0.7,
  },
}

// professional work datalog
export const workProjects: Record<string, WorkProject> = {
  "petsmart-ecommerce-platform": {
    title: "PetSmart E-commerce Platform Migration",
    company: "PetSmart",
    duration: "Feb 2021 - Present",
    description:
      "Led the successful migration of the enterprise e-commerce platform to a modern React.js and Contentful architecture, enhancing site performance and content management capabilities for pages serving 1.2M+ monthly users.",
    role: "Senior Front End Developer",
    team: "12+ developers, 3 designers, 2 PMs",
    challenge:
      "Legacy e-commerce platform was difficult to maintain, had poor performance, and limited content management capabilities. The existing system couldn't scale with business needs and was hindering development velocity.",
    solution:
      "Architected and led migration to React.js with Contentful CMS, implemented the Sparky Design System with Storybook, and established comprehensive testing and performance optimization practices.",
    results: [
      "Served 1.2M+ monthly users with improved performance and reliability",
      "Reduced development time by 40% with reusable component library",
      "Cut redundant coding by over 80% through design system implementation",
      "Achieved 2-3% increase in conversions through A/B testing optimization",
      "Improved Core Web Vitals and SEO rankings significantly",
      "Reduced production defects and support tickets by 37%",
    ],
    responsibilities: [
      "Led enterprise e-commerce platform migration to React.js and Contentful",
      "Engineered and governed 50+ reusable components using Sparky Design System",
      "Implemented and analyzed Optimizely A/B tests on critical UI elements",
      "Established comprehensive WCAG 2.1 accessibility standards",
      "Mentored junior developers and instituted rigorous code review processes",
      "Collaborated with cross-functional teams including QA and Product",
    ],
    tech: ["React.js", "Redux", "Next.js", "Contentful", "Storybook", "Optimizely", "Google Analytics", "WCAG 2.1"],
    liveUrl: "https://www.petsmart.com",
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&text=PetSmart+Homepage",
        alt: "PetSmart e-commerce homepage with modern React architecture",
        caption: "Redesigned PetSmart homepage built with React.js and Contentful CMS",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Design+System",
        alt: "Sparky Design System component library in Storybook",
        caption: "Sparky Design System with 50+ reusable components in Storybook",
      },
    ],
    featured: true,
    lastModified: "2024-01-25",
    priority: 0.95,
  },
  "hownd-merchant-platform": {
    title: "Hownd Merchant Web Application",
    company: "Hownd",
    duration: "Nov 2018 - Aug 2020",
    description:
      "Architected and developed new merchant-facing dashboards and customer portals using Vue.js and Nuxt.js, resulting in an estimated 20% improvement in user task completion rates through redesigned UI/UX workflows.",
    role: "Front End Engineer",
    team: "6 developers, 2 designers, 1 PM",
    challenge:
      "Fetchrev's legacy Ember-based system needed a complete overhaul to support the pivot to Hownd's no-tiered-plan web app with revamped user experience and modernized tech stack.",
    solution:
      "Built new merchant dashboards using Vue.js and Nuxt.js, redesigned key UI/UX workflows for user onboarding and reporting, and maintained legacy Ruby on Rails application during transition.",
    results: [
      "Achieved 20% improvement in user task completion rates",
      "Successfully migrated from legacy Ember to modern Vue.js architecture",
      "Improved user onboarding experience and reporting workflows",
      "Enhanced API stability and content delivery systems",
    ],
    responsibilities: [
      "Architected merchant-facing dashboards using Vue.js and Nuxt.js",
      "Redesigned UI/UX workflows for user onboarding and reporting",
      "Maintained and improved legacy Ruby on Rails application",
      "Implemented event tracking and analytics integration",
      "Collaborated on brand identity and user experience improvements",
    ],
    tech: ["Vue.js", "Nuxt.js", "Vuex", "PostCSS", "SCSS", "Axios", "Segment", "Ruby on Rails", "MySQL"],
    images: [
      {
        src: "/images/hownd.png",
        alt: "Hownd merchant dashboard interface",
        caption: "Modern merchant dashboard built with Vue.js and Nuxt.js",
      },
    ],
    featured: false,
    lastModified: "2024-01-20",
    priority: 0.85,
  },
  "plansource-insurance-dashboard": {
    title: "PlanSource Insurance Analytics Dashboard",
    company: "Prism Studios / Clairvoyant LLC",
    duration: "May 2016 - May 2018",
    description:
      "Engineered and delivered complex, ADA-compliant dashboards for enterprise clients including American Express and PayPal using React and Redux, enabling real-time data analysis and improving content engagement by 15%.",
    role: "UX Engineer",
    team: "4 developers, 2 designers, 1 PM",
    challenge:
      "Enterprise clients needed sophisticated, accessible dashboards for real-time insurance data analysis with complex reporting requirements and strict compliance standards.",
    solution:
      "Built ADA-compliant React and Redux dashboards with integrated analytics, implemented Google Analytics and Sisense for feature adoption tracking, and delivered responsive solutions for multiple enterprise clients.",
    results: [
      "Delivered ADA-compliant dashboards for major enterprise clients",
      "Achieved 15% improvement in content engagement through analytics integration",
      "Enabled real-time data analysis for insurance brokers and administrators",
      "Successfully managed multiple concurrent client projects",
    ],
    responsibilities: [
      "Engineered complex ADA-compliant dashboards using React and Redux",
      "Integrated Google Analytics and Sisense for feature adoption analysis",
      "Collaborated with enterprise clients on requirements and design",
      "Built responsive static sites, landing pages, and marketing materials",
      "Managed multiple front-end projects simultaneously",
    ],
    tech: ["React.js", "Redux", "Highcharts.js", "Semantic UI", "Google Analytics", "Sisense", "ADA Compliance"],
    images: [
      {
        src: "/images/plansource-web-app/7o-executive-summary_brief-review.png",
        alt: "PlanSource insurance dashboard executive summary",
        caption: "Executive summary dashboard for insurance analytics",
      },
    ],
    featured: false,
    lastModified: "2024-01-18",
    priority: 0.8,
  },
  "optumrx-document-portal": {
    title: "OptumRX Document Proofing Portal",
    company: "Prism Studios / Clairvoyant LLC",
    duration: "May 2016 - May 2018",
    description:
      "Developed a Document Proofing Portal to simplify complex user flows and emphasize micro-interactions in managing thousands of pending and real-time printing queues for the wider Optum application architecture.",
    role: "UX Engineer",
    team: "5 developers, 2 designers, 1 PM",
    challenge:
      "OptumRX needed a streamlined system to manage thousands of document print jobs with complex approval workflows and real-time queue management.",
    solution:
      "Created an intuitive document proofing portal with React and Semantic UI, focusing on micro-interactions and simplified user flows for managing large-scale printing operations.",
    results: [
      "Streamlined management of thousands of pending print jobs",
      "Simplified complex approval workflows with intuitive UI design",
      "Improved efficiency in document processing and queue management",
      "Enhanced user experience through thoughtful micro-interactions",
    ],
    responsibilities: [
      "Designed and developed document proofing portal interface",
      "Implemented complex user flows for print job management",
      "Created micro-interactions to enhance user experience",
      "Collaborated with stakeholders on requirements and feedback",
      "Integrated with existing Optum application architecture",
    ],
    tech: ["React.js", "Semantic UI", "SCSS/Sass", "Adobe XD", "Zeplin", "Invision", "Balsamiq"],
    images: [
      {
        src: "/images/optumrx-web-app/88-11-eob-active-file-detail-optumrx-pending-approval.png",
        alt: "OptumRX document approval interface",
        caption: "Document approval interface with pending queue management",
      },
    ],
    featured: false,
    lastModified: "2024-01-15",
    priority: 0.75,
  },
}

// personal projects data
export const personalProjects: Record<string, PersonalProject> = {
  "pushpup-fitness-tracker": {
    title: "PushPup Fitness Tracker",
    description:
      "A comprehensive fitness tracking application focused on bodyweight exercises and progressive training. Features workout logging, progress tracking, and personalized training plans.",
    motivation:
      "Wanted to create a simple, focused fitness app that emphasizes bodyweight exercises and progressive overload without the complexity of gym-based tracking apps.",
    challenge:
      "Most fitness apps are overly complex or focus on gym equipment. I needed a clean, simple solution for tracking bodyweight exercises and monitoring progress over time.",
    solution:
      "Built a React-based web application with intuitive workout logging, visual progress tracking, and customizable training plans specifically designed for bodyweight fitness enthusiasts.",
    features: [
      "Workout logging and tracking",
      "Progress visualization with charts",
      "Customizable training plans",
      "Exercise library with instructions",
      "Personal records tracking",
      "Mobile-responsive design",
    ],
    lessons: [
      "Learned advanced React patterns for state management",
      "Implemented data visualization with Highcharts",
      "Gained experience with fitness tracking algorithms",
      "Improved skills in responsive design and mobile UX",
    ],
    tech: ["React.js", "Highcharts.js", "Semantic UI", "Local Storage", "Progressive Web App"],
    status: "Live",
    duration: "4 months",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      {
        src: "/images/plansource-web-app/7o-executive-summary_brief-review.png",
        alt: "PushPup fitness dashboard",
        caption: "Main dashboard showing workout progress and statistics",
      },
    ],
    lastModified: "2024-01-20",
    priority: 0.8,
  },
  "eorzean-compass-ffxiv": {
    title: "Eorzean Compass - FFXIV Guide",
    description:
      "A comprehensive guide and tracking application for Final Fantasy XIV players, featuring quest tracking, item databases, and character progression tools.",
    motivation:
      "As an avid FFXIV player, I wanted to create a better tool for tracking quests, items, and character progression that was more user-friendly than existing solutions.",
    challenge:
      "Existing FFXIV databases were either outdated, difficult to navigate, or lacked modern UX design. Players needed a more intuitive way to track their progress.",
    solution:
      "Developed a modern React application with clean UI/UX, comprehensive search functionality, and personalized tracking features for FFXIV players.",
    features: [
      "Quest and achievement tracking",
      "Item database with search",
      "Character progression tools",
      "Crafting calculators",
      "Mobile-responsive interface",
      "User progress synchronization",
    ],
    lessons: [
      "Learned to work with large datasets and complex search algorithms",
      "Implemented advanced filtering and sorting mechanisms",
      "Gained experience with game data APIs",
      "Improved understanding of user-centered design for gaming communities",
    ],
    tech: ["React.js", "Semantic UI", "SCSS/Sass", "Adobe XD", "Zeplin", "Invision"],
    status: "In Development",
    duration: "6 months",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      {
        src: "/images/optumrx-web-app/88-11-eob-active-file-detail-optumrx-pending-approval.png",
        alt: "Eorzean Compass quest tracking interface",
        caption: "Quest tracking interface with progress indicators",
      },
    ],
    lastModified: "2024-01-18",
    priority: 0.7,
  },
  "az-trails-guide": {
    title: "Arizona Trails Guide",
    description:
      "A mobile-first web application for discovering and tracking hiking trails throughout Arizona, featuring GPS integration, difficulty ratings, and user reviews.",
    motivation:
      "Living in Arizona, I wanted to create a comprehensive resource for local hikers that combined trail information with modern mobile features and community input.",
    challenge:
      "Existing trail apps either lacked local Arizona content or had poor mobile experiences. Hikers needed offline capabilities and accurate trail conditions.",
    solution:
      "Built a progressive web app with offline functionality, GPS integration, and community-driven content for Arizona's diverse hiking trails.",
    features: [
      "GPS-enabled trail discovery",
      "Offline map functionality",
      "Difficulty ratings and reviews",
      "Photo sharing and trail conditions",
      "Weather integration",
      "Progressive Web App capabilities",
    ],
    lessons: [
      "Implemented PWA features and offline functionality",
      "Learned geolocation APIs and mapping integration",
      "Gained experience with mobile-first design principles",
      "Improved skills in performance optimization for mobile devices",
    ],
    tech: ["Nuxt.js", "Vue.js", "Vuex", "PostCSS", "SCSS", "PWA", "Geolocation API"],
    status: "Live",
    duration: "5 months",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      {
        src: "/images/az-trails-guide.png",
        alt: "Arizona Trails Guide mobile interface",
        caption: "Mobile trail discovery interface with GPS integration",
      },
    ],
    lastModified: "2024-01-15",
    priority: 0.75,
  },
  "threadly-social-platform": {
    title: "Threadly Social Platform",
    description:
      "A minimalist social platform focused on meaningful conversations and community building, with features designed to encourage thoughtful discussion over viral content.",
    motivation:
      "Frustrated with the noise and negativity of mainstream social media, I wanted to create a platform that prioritizes quality conversations and genuine community connections.",
    challenge:
      "Social media platforms often prioritize engagement over meaningful interaction. Users needed a space for thoughtful discussion without algorithmic manipulation.",
    solution:
      "Developed a clean, minimalist social platform using modern web technologies with features designed to encourage quality over quantity in social interactions.",
    features: [
      "Thread-based conversations",
      "Community moderation tools",
      "Minimalist, distraction-free interface",
      "Quality-focused content algorithms",
      "Privacy-first approach",
      "Real-time messaging",
    ],
    lessons: [
      "Learned about social platform architecture and scalability",
      "Implemented real-time features with WebSocket technology",
      "Gained experience with content moderation systems",
      "Improved understanding of privacy and security considerations",
    ],
    tech: ["Ember.js", "Handlebars", "jQuery", "AJAX", "CSS/Less/SCSS", "Ruby on Rails", "MySQL"],
    status: "Complete",
    duration: "8 months",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      {
        src: "/images/threadly.png",
        alt: "Threadly conversation interface",
        caption: "Clean conversation interface focused on meaningful discussions",
      },
    ],
    lastModified: "2024-01-12",
    priority: 0.7,
  },
  "quote-generator-app": {
    title: "Inspirational Quote Generator",
    description:
      "A simple, elegant web application that generates inspirational quotes with beautiful typography and sharing capabilities, perfect for daily motivation.",
    motivation:
      "Wanted to create a clean, beautiful way to discover and share inspirational quotes while practicing modern frontend development techniques.",
    challenge:
      "Most quote apps are cluttered with ads or have poor design. Users needed a clean, fast, and beautiful way to discover inspirational content.",
    solution:
      "Built a minimalist Vue.js application with beautiful typography, smooth animations, and easy sharing features for inspirational quotes.",
    features: [
      "Random quote generation",
      "Beautiful typography and design",
      "Social media sharing",
      "Favorite quotes collection",
      "Category filtering",
      "Responsive design",
    ],
    lessons: [
      "Focused on typography and visual design principles",
      "Implemented smooth animations and micro-interactions",
      "Learned about API integration and data management",
      "Improved skills in minimalist UI design",
    ],
    tech: ["Vue.js", "Vuex", "Axios", "SCSS", "CSS Animations"],
    status: "Complete",
    duration: "2 months",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      {
        src: "/images/quote-generator.png",
        alt: "Quote generator interface with beautiful typography",
        caption: "Minimalist quote display with elegant typography",
      },
    ],
    lastModified: "2024-01-10",
    priority: 0.6,
  },
}

// Helper functions to get project data
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug]
}

export function getAllBlogPosts(): Array<{ slug: string; post: BlogPost }> {
  return Object.entries(blogPosts).map(([slug, post]) => ({ slug, post }))
}

// Helper functions for work projects
export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects[slug]
}

export function getAllWorkProjects(): Array<{ slug: string; project: WorkProject }> {
  return Object.entries(workProjects).map(([slug, project]) => ({ slug, project }))
}

// Helper functions for personal projects
export function getPersonalProject(slug: string): PersonalProject | undefined {
  return personalProjects[slug]
}

export function getAllPersonalProjects(): Array<{ slug: string; project: PersonalProject }> {
  return Object.entries(personalProjects).map(([slug, project]) => ({ slug, project }))
}

// Pagination helper functions
export function paginateItems<T>(
  items: T[],
  page: number,
  itemsPerPage: number,
): { items: T[]; totalPages: number; currentPage: number } {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedItems = items.slice(startIndex, endIndex)
  const totalPages = Math.ceil(items.length / itemsPerPage)

  return {
    items: paginatedItems,
    totalPages,
    currentPage: page,
  }
}
