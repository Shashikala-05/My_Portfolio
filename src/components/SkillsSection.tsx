const categories = [
  { title: "Programming", skills: ["Python", "R", "PHP", "Julia", "C", "Java", "JavaScript"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React.js", "Bootstrap"] },
  { title: "Backend", skills: ["Node.js", "Express.js"] },
  { title: "Database", skills: ["MySQL", "MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "Figma", "Visily", "Relume"] },
  { title: "Data Tools", skills: ["Excel", "Power BI"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-purple/10 blur-[120px] rounded-full" />
    <div className="container relative z-10">
      <h2 className="section-heading text-center mb-4">
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full mb-12" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="glass-card-glow p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
            <h3 className="font-heading font-semibold text-lg mb-4 text-neon-purple">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
