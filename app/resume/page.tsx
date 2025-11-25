"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"

export default function ResumePage() {
  const handleDownloadPDF = () => {
    // In a real application, this would trigger a PDF download
    alert("PDF download would start here")
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header with Download Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Resume</h1>
          <Button onClick={handleDownloadPDF} className="bg-amber-600 hover:bg-amber-700">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            {/* Personal Information */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Juan Reyes</h1>
              <h2 className="text-xl text-amber-600 font-semibold mb-4">Senior Frontend Developer</h2>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  (480) 435-2155
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  reyes1212@gmail.com
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Mesa, AZ
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  Portfolio
                </div>
                <div className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  GitHub
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                A dynamic and results-oriented software development professional with over 7 years of experience leading
                the design, development, and strategy for high-impact web applications. A proven expert in front-end
                engineering with a deep specialization in React, Vue, and headless CMS architectures. Combines technical
                leadership with a strong command of UI/UX principles, content strategy, and data-driven optimization to
                deliver accessible, scalable, and user-centric digital experiences that drive business growth.
              </p>
            </section>

            <Separator className="mb-8" />

            {/* Core Competencies */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Frontend & Design Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Redux",
                      "Next.js",
                      "Vue.js",
                      "Nuxt.js",
                      "JavaScript (ES6+)",
                      "HTML5",
                      "CSS3/SCSS",
                      "Storybook",
                    ].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">UI/UX & Content Strategy</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Accessibility (ADA/WCAG 2.1)",
                      "User-Centered Design",
                      "A/B Testing",
                      "Contentful",
                      "Drupal",
                      "SEO Optimization",
                    ].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Analytics & Testing</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Optimizely",
                      "Google Analytics",
                      "Amplitude",
                      "Segment",
                      "Cypress",
                      "Jest",
                      "Usability Testing",
                    ].map((skill) => (
                      <Badge key={skill} className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Leadership & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Agile/Scrum",
                      "Project Leadership",
                      "Mentorship",
                      "Jira",
                      "Confluence",
                      "Git",
                      "Docker",
                      "CI/CD",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Separator className="mb-8" />

            {/* Professional Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional Experience</h3>

              <div className="space-y-8">
                {/* PetSmart */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Senior Front End Developer</h4>
                      <p className="text-amber-600 font-medium">PetSmart | Phoenix, AZ</p>
                    </div>
                    <Badge variant="outline">Feb 2021 - Present</Badge>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>
                      Led the successful migration of the enterprise e-commerce platform to a modern React.js and
                      Contentful architecture, enhancing site performance and content management capabilities for pages
                      serving 1.2M+ monthly users
                    </li>
                    <li>
                      Engineered and governed a library of 50+ reusable components using the Sparky Design System and
                      Storybook, which reduced development time by 40% and cut redundant coding by over 80%
                    </li>
                    <li>
                      Drove a 2-3% increase in conversions by implementing and analyzing Optimizely A/B tests on
                      critical UI elements and user flows, such as a sticky checkout CTA
                    </li>
                    <li>
                      Improved Core Web Vitals and SEO rankings by implementing performance optimizations and
                      comprehensive WCAG 2.1 accessibility standards
                    </li>
                    <li>
                      Reduced production defects and support tickets by 37% by instituting rigorous code reviews,
                      mentoring junior developers, and improving cross-functional collaboration with QA and Product
                      teams
                    </li>
                  </ul>
                </div>

                {/* Hownd */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Front End Engineer</h4>
                      <p className="text-amber-600 font-medium">Hownd | Tempe, AZ</p>
                    </div>
                    <Badge variant="outline">Nov 2018 - Aug 2020</Badge>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>
                      Architected and developed new merchant-facing dashboards and customer portals using Vue.js and
                      Nuxt.js, resulting in an estimated 20% improvement in user task completion rates
                    </li>
                    <li>
                      Redesigned key UI/UX workflows for user onboarding and reporting, creating a more intuitive and
                      cohesive brand experience
                    </li>
                    <li>
                      Maintained and improved a legacy Ruby on Rails application, enhancing API stability and supporting
                      content delivery systems
                    </li>
                  </ul>
                </div>

                {/* Prism Studios */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">UX Engineer</h4>
                      <p className="text-amber-600 font-medium">Prism Studios / Clairvoyant LLC | Scottsdale, AZ</p>
                    </div>
                    <Badge variant="outline">May 2016 - May 2018</Badge>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>
                      Engineered and delivered complex, ADA-compliant dashboards for enterprise clients (including
                      American Express, PayPal) using React and Redux, enabling real-time data analysis
                    </li>
                    <li>
                      Integrated Google Analytics and Sisense to audit feature adoption and deliver actionable insights,
                      leading to a 15% improvement in content engagement for a key client
                    </li>
                    <li>
                      Managed multiple front-end projects, collaborating with clients and designers to build responsive
                      static sites, landing pages, and marketing infographics
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="mb-8" />

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Full Stack Web Development Certification</h4>
                    <p className="text-amber-600">Free Code Camp</p>
                  </div>
                  <Badge variant="outline">2016</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Bachelor of Science, Education</h4>
                    <p className="text-amber-600">Northern Arizona University</p>
                  </div>
                  <Badge variant="outline">2015</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Associate of Applied Science, Digital Photography
                    </h4>
                    <p className="text-amber-600">Phoenix College</p>
                  </div>
                  <Badge variant="outline">2011</Badge>
                </div>
              </div>
            </section>

            <Separator className="mb-8" />

            {/* Notable Projects */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Notable Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">PetSmart E-commerce Platform Migration</h4>
                  <p className="text-muted-foreground text-sm">
                    Led enterprise-scale migration to React.js and Contentful, serving 1.2M+ monthly users with improved
                    performance and developer experience
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      React.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Contentful
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Storybook
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sparky Design System</h4>
                  <p className="text-muted-foreground text-sm">
                    Engineered comprehensive component library with 50+ reusable components, reducing development time
                    by 40%
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      Design Systems
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Storybook
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                  </div>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Interested in working together? Let's connect!</p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
