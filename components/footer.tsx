import Link from "next/link"
import { Code, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-amber-400" />
              <span className="font-bold text-xl">Juan Reyes</span>
            </div>
            <p className="text-slate-300 text-sm">
              Senior Frontend Developer with 7+ years of experience building accessible, scalable web applications.
              Passionate about React, Vue.js, and creating exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Professional Work
                </Link>
              </li>
              <li>
                <Link href="/personal" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Personal Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-amber-400">Blog Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog?category=learnings" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/blog?category=thoughts" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Thoughts
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-amber-400">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/juanreyes1212"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/juanreyes1212"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:reyes1212@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-slate-400 text-xs mt-4">
              Based in Mesa, AZ. Always open to interesting conversations and collaboration opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Juan Reyes. Built with Next.js, TypeScript, and Tailwind CSS. Designed with
            accessibility and performance in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
