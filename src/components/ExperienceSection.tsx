import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "S-Vyasa University",
    period: "2026",
    points: ["UI/UX improvements", "Figma to responsive design", "Performance optimization"],
  },
  {
    role: "Administrative & Billing Executive",
    company: "Navami Technical Services",
    period: "2023–2026",
    points: ["Billing & documentation", "Cross-team coordination", "Process optimization"],
  },
  {
    role: "AI/ML Intern",
    company: "Mindset IT Solutions",
    period: "2025",
    points: ["AI projects with Python", "Real-world ML applications", "Data analysis"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-pink/10 blur-[120px] rounded-full" />
    <div className="container relative z-10 max-w-3xl">
      <h2 className="section-heading text-center mb-4">
        <span className="gradient-text">Experience</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full mb-12" />

      <div className="relative pl-8 border-l border-glass-border space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink shadow-[0_0_12px_3px_hsl(var(--neon-purple)/0.5)]" />
            <div className="glass-card p-6 rounded-xl hover:border-neon-purple/30 transition-all duration-300">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div>
                  <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                    <Briefcase size={16} className="text-neon-pink" /> {exp.role}
                  </h3>
                  <p className="text-sm text-neon-blue">{exp.company}</p>
                </div>
                <span className="text-xs text-muted-foreground glass-card px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neon-purple" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
