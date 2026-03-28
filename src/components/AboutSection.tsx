import { GraduationCap } from "lucide-react";

const education = [
  { degree: "MCA (AI, ML & Data Science)", school: "S-VYASA University", year: "2024–Present", score: "" },
  { degree: "BCA", school: "Bangalore Institute of Management Studies", year: "2021–2024", score: "71.15%" },
  { degree: "PU", school: "KTSV PU College", year: "", score: "76%" },
  { degree: "SSLC", school: "Pine Woods School", year: "", score: "75.36%" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="absolute top-0 right-0 w-72 h-72 bg-neon-blue/10 blur-[120px] rounded-full" />
    <div className="container relative z-10">
      <h2 className="section-heading text-center mb-4">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full mb-12" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I am a motivated MCA student with a strong foundation in web development, ERP systems, and problem-solving. What began as curiosity has evolved into a deep passion for building technology-driven solutions that create real-world impact.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I have hands-on experience in full-stack development, along with exposure to Artificial Intelligence, Machine Learning, and IoT-based systems. I enjoy designing efficient, user-friendly applications and continuously improving my technical skills through practical projects.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently specializing in AI, ML, and Data Science, I am eager to learn, adapt, and contribute to innovative solutions in a growth-oriented environment.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-heading mb-6 flex items-center gap-2">
            <GraduationCap className="text-neon-purple" size={22} /> Education
          </h3>
          <div className="relative pl-6 border-l border-glass-border space-y-6">
            {education.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 glow-dot" />
                <div className="glass-card p-4 rounded-lg hover:border-neon-purple/30 transition-colors">
                  <p className="font-semibold text-foreground">{e.degree}</p>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                    {e.year && <span>{e.year}</span>}
                    {e.score && <span className="text-neon-blue">{e.score}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
