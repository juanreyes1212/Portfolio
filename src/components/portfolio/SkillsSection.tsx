import { Code2, Palette, Zap, Users } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    icon: Code2,
    title: "Frontend & Design Systems",
    description: "React.js, Vue.js, Next.js, TypeScript, Design Systems, Storybook",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Palette,
    title: "UI/UX & Content Strategy",
    description: "Accessibility (WCAG 2.1), User-Centered Design, A/B Testing, Contentful, SEO",
    gradient: "from-accent/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Analytics & Testing",
    description: "Optimizely, Google Analytics, Amplitude, Cypress, Jest, Performance Optimization",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Users,
    title: "Leadership & Tools",
    description: "Agile/Scrum, Project Leadership, Mentorship, CI/CD, Docker",
    gradient: "from-accent/20 to-transparent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInOnScroll className="mb-16" y={20} duration={0.6}>
          <SectionHeading
            title="Core"
            highlight="Competencies"
            description="Specialized expertise in modern frontend technologies and enterprise-scale application development"
            align="center"
          />
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <FadeInOnScroll
              key={skill.title}
              delay={index * 0.1}
              className="group relative glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
