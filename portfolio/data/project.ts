interface TechNote {
    title: string;
    stack: string[];
}

interface ProjectDetails {
    images: string[];
    techNotes: TechNote[];
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    coverImage: string;
    details: ProjectDetails;
}

// The main projects array
export const projects = [
    {
        id: 46181298,
        title: "Hownd Merchant web app",
        slug: "hownd-merchant-web-app",
        description: "Fetchrev's branding re-haul and product pivot to a no tiered-plan web app with a revamped user experience. Leveraged a modernized tech stack required to expand on Fetchrev's legacy campaign promo offerings paradigm, Hownd's MyHownd consumer mobile app functionality, and continuously evolving data-model needs from new feature-functionalities.",
        coverImage: "/images/hownd.png",
        details: {
            images: [], // We will add the detail images later
            techNotes: [
                {
                    title: "Front End",
                    stack: ["Nuxt", "Vuex", "PostCSS (CSS/SCSS)", "Axios", "Segment", "HappyFox", "WalkMe", "in-house form generator"]
                },
                {
                    title: "Back End",
                    stack: ["Ruby/Rails", "MySQL", "AWS EC2 (live instances of database to query one-off data changes)"]
                },
                {
                    title: "Design",
                    stack: ["Ideation", "UX", "Information Architecture", "User Flows", "User Journeys", "Brand Identity", "Testing"]
                },
                {
                    title: "DevOps",
                    stack: ["Netlify", "Github Actions", "Docker", "Terraform", "AWS (CLI 1, CLI 2, IAM, OpsWorks, EC2, ECS)"]
                }
            ]
        }
    },
    {
        id: 46181656,
        title: "Fetchrev web app",
        slug: "fetchrev-web-app",
        description: "Revenue-sharing web app for increasing a Merchant's customer engagement through tiered-plans that offer different levels of \"do-it-for me\" promotional offering campaign editors, email marketing, customer list management, and metrics.",
        coverImage: "/images/fetchrev.png",
        details: {
            images: [],
            techNotes: [
                {
                    title: "Front End",
                    stack: ["Ember", "Handlebars", "JQuery", "AJAX", "CSS/Less/SCSS"]
                },
                {
                    title: "Back End",
                    stack: ["Ruby/Rails", "MySQL"]
                }
            ]
        }
    },
    {
        id: 46181657,
        title: "Fetchrev Spotley Wifi web app",
        slug: "fetchrev-spotley-wifi-web-app",
        description: "Admin app to manage Spotley Wifi login portals, user-facing portal landings, and sign-up offerings to encourage email sign-up.",
        coverImage: "/images/fetchrev-spotley.png",
        details: {
            images: [],
            techNotes: [
                {
                    title: "Front End",
                    stack: ["Vue.js", "Vuex", "Axios", "SCSS"]
                }
            ]
        }
    },
    {
        id: 43859942,
        title: "PlanSource web app",
        slug: "plansource-web-app",
        description: "Insurance brokerage administrative dashboard that bridged the gap between policy performance and reporting for administrators in one place from their existing integrations.",
        coverImage: "/images/plansource.png",
        details: {
            images: [
                "7p-login.png",
                "7o-executive-summary_brief-review.png",
                "7m-psa.png",
                "7n-psa-participation.png",
                "7q-psa-employer-groups.png",
                "7r-product-performance.png",
                "7s-participation.png",
                "7t-renewal-overview.png",
                "7u-renewal-inprogress.png",
                "7v-broker.png",
                "7w-plansource-executive-summary.png"
            ],
            techNotes: [
                {
                    title: "Methods/Tech Used",
                    stack: ["Ideation/UX/User Journeys/User Flows/Brand Identity/Testing", "Design", "Figma", "React JS", "Highcharts JS", "Semantic UI"]
                }
            ]
        }
    },
    {
        id: 43860130,
        title: "OptumRX web app",
        slug: "optumrx-web-app",
        description: "Document Proofing Portal (document print job queuer) to simplify complex user flows and emphasize micro-interactions in managing thousands of pending and real-time printing queues for the wider Optum application architecture.",
        coverImage: "/images/optum.png",
        details: {
            images: [
                "83-1-login.png",
                "84-15-archive-search-result.png",
                "85-14-archive-landing.png",
                "86-13-eob-active-file-detail-post-approval.png",
                "87-12-eob-active-file-detail-filter-type.png",
                "88-11-eob-active-file-detail-optumrx-pending-approval.png",
                "89-10-eob-active-file-list.png",
                "8a-9-tb-active-file-detail.png",
                "8b-8-tb-active-file-list-date-picker.png",
                "8c-7-tb-active-file-list.png",
                "8d-6-active-landing-time-stamp-tooltip.png",
                "8e-5-active-landing-logout.png",
                "8f-4-active-landing-viewing-filter.png",
                "8g-3-active-landing.png",
                "8h-2-active-landing-company-filter.png",
                "8i-16-archive-search-result-expanded.png",
                "8j-17-archive-search-result-detail.png",
                "8k-18-archive-detail-reprint.png",
                "8l-styleguide.png"
            ],
            techNotes: [
                {
                    title: "Methods/Tech Used",
                    stack: ["UX/Information Architecture/User Flows/Brand Identity", "Design", "Adobe XD", "Zeplin (stakeholder feedback comments and developer specs)", "Invision (clickable protype)", "Balsamiq (ideation-directed mockups)", "React JS", "Semantic UI", "SCSS/Sass"]
                }
            ]
        }
    },
    {
        id: 43860209,
        title: "Hudson & Marshall web site",
        slug: "hudson-marshall-web-site",
        description: "Real estate property auction company looking to modernize their legacy application while directing a wider audience towards their bidding and purchasing process.",
        coverImage: "/images/hudson-marshall.png",
        details: {
            images: [
                "91-home.visionary.png",
                "92-srp-mvp-map-view-v7.png",
                "93-srp-mvp-map-view-v7-scrolleddown.png",
                "94-srp-mvp-list-view-v5-cards.png",
                "95-pdp.png",
                "96-confirm-account-email.png",
                "97-bid-now-confirmation-confirmation.png",
                "98-bid-now-registration-concept-1.png",
                "99-bid-now-registration-concept-2-1.png",
                "9a-search-page-results.v1.1.png",
                "9b-search-page-filters.v1.png"
            ],
            techNotes: [
                {
                    title: "Methods/Tech Used",
                    stack: ["Ideation/UX/Information Architecture/User Journeys/Brand Identity/Testing", "Design and Prototype", "Adobe XD", "Zeplin (stakeholder feedback and developer specs)", "Balsamiq", "Umbraco CMS", "HTML/CSS/JS", "Bootstrap"]
                }
            ]
        }
    },
    {
        id: 43860154,
        title: "SmartPort web app",
        slug: "smartport-web-app",
        description: "International port shipment tracking and logistical workflows centered around porter certifications and shipping documentation for more accurate and secure container shipments.",
        coverImage: "/images/smartport.png",
        details: {
            images: [
                "8m-registration-step1.png",
                "8n-registration-step2.png",
                "8o-registration-step3.png",
                "8p-login-forgot-password-step1.png",
                "8q-login-forgot-password-step2.png",
                "8r-login-forgot-password-step3.png",
                "8s-approval-process.png",
                "8t-port-operators.png",
                "8u-agency-detail-agents.png",
                "8v-agent-profile.png",
                "8w-aan-document.png",
                "8x-attach-files-.png",
                "8y-activity.png",
                "8z-stylesheet.png"
            ],
            techNotes: [
                {
                    title: "Methods/Tech Used",
                    stack: ["Ideation/UX/Information Architecture/User Flows/Branding Identity/Testing", "Design", "Figma", "Zeplin (stakeholder feedback on iterations)", "React JS", "SCSS/Sass"]
                }
            ]
        }
    },
    {
        id: 43860230,
        title: "GCU teacher/student web app",
        slug: "gcu-teacher-student-web-app",
        description: "Student portal document submission and plagiarism checker to reduce hands-on management of student-to-teacher document submissions used for integrity checking, grammar feedback, admin functionality, and user testing.",
        coverImage: "/images/gcu.png",
        details: {
            images: [
                "9c-upload-page-submitted-table5.png",
                "9d-upload-page-submitted-table.png",
                "9e-upload-page-submitted-table2.png",
                "9f-upload-page-submitted-table3.png",
                "9g-upload-page-submitted-table4.png",
                "9h-main-student.png",
                "9i-main-student-source-expanded.png",
                "9j-main-student-grammar-expanded.png",
                "9k-main-student-undo-grammar.png",
                "9l-main-student-feedback-expanded.png",
                "9m-main-student-summary-report.png",
                "9n-main-student-view-source.png",
                "9o-main-options.png",
                "9p-style-guide.png"
            ],
            techNotes: [
                {
                    title: "Tech Used",
                    stack: ["Ideation/UX/User Flows/Brand Identity/Testing", "Design", "Sketch", "Invision", "Balsamiq", "React JS", "SCSS/Sass", "Hotjar (A/B and usage testing)"]
                }
            ]
        }
    },
    {
        id: 43859952,
        title: "SanosHealth landing page and mobile app",
        slug: "sanoshealth-app",
        description: "\"On-demand doctor consultation at the palm of your hand when you need it most.\"",
        coverImage: "/images/sanos.png",
        details: {
            images: [
                "7x-landing-page.png",
                "7y-mobile.png"
            ],
            techNotes: [
                {
                    title: "Methods/Tech Used",
                    stack: ["Ideation/UX/User Flows/Brand Identity/Testing", "Design", "Sketch", "Invision", "Balsamiq", "HTML/CSS/JS", "Bootstrap", "jQuery"]
                }
            ]
        }
    },
    {
        id: 43860061,
        title: "JobDocs landing page",
        slug: "jobdocs-landing-page",
        description: "Professional certification tracker and document locker primarily for working professionals in fields that require updated certifications in a neatly organized and easily shareable way.",
        coverImage: "/images/jobdocs.png",
        details: {
            images: [
                "7z-landingpage.png",
                "80-landingpage-2.png"
            ],
            techNotes: [
                {
                    title: "Methods/Tech Used",
                    stack: ["Ideation/UX/Brand Identity", "Design", "Sketch", "Balsamiq", "HTML/CSS/JS", "Bootstrap", "Less", "jQuery"]
                }
            ]
        }
    },
    {
        id: 43860095,
        title: "Kogni Landing Page",
        slug: "kogni-landing-page",
        description: "Landing page for new centralized tooling for data lake/big data analytics and security.",
        coverImage: "/images/kogni.png",
        details: {
            images: [
                "81-kogni-landing-page.png",
                "82-kogni-landing-page-white-header-blog.png"
            ],
            techNotes: [
                {
                    title: "Methods/Tech Used",
                    stack: ["Ideation/UX/Brand Identity", "Design", "Sketch", "Balsamiq", "Hugo static page templating", "HTML/CSS/JS", "Bootstrap", "Sass", "jQuery", "Hotjar (A/B testing)"]
                }
            ]
        }
    },
    {
        id: 43860205,
        title: "UHG web app",
        slug: "uhg-web-app",
        description: "Dynamic insurance policy builder for United Health Care Group to begin a phased push towards a more modern UX and tech stack.",
        coverImage: "/images/uhg.png",
        details: {
            images: [
                "90-dynamic-book-builder-home.png"
            ],
            techNotes: [
                {
                    title: "Tech Used",
                    stack: ["Angular JS (Angular 1)", "Bootstrap", "Less"]
                }
            ]
        }
    }
];