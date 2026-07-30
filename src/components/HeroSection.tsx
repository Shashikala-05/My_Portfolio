import { useEffect, useState } from "react";
import { Github, Linkedin, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["MCA Student", "Full Stack Developer", "AI/ML Enthusiast", "IoT Explorer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-purple/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-pink/15 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/10 blur-[150px]" />

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <p className="text-neon-pink font-semibold text-lg">Hello<span className="glow-dot inline-block ml-1 w-2 h-2 align-middle" /></p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
            I'm <span className="gradient-text">Shashikala G</span>
          </h1>
          <div className="text-xl md:text-2xl font-heading text-muted-foreground h-8">
            {text}<span className="animate-pulse text-neon-purple">|</span>
          </div>
          <p className="text-muted-foreground max-w-lg">
            Building innovative solutions using Web Development, AI & IoT
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/Shashikala_G.pdf" download className="btn-outline flex items-center gap-2"><Download size={16} /> Download CV</a>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/Shashikala-05" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-purple transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-neon-blue opacity-60 blur-2xl scale-110" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-glass-border">
              <img src={profileImg} alt="Shashikala G" className="w-full h-full object-cover" width={512} height={512} />
            </div>
            {/* Decorative corner brackets */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-neon-purple rounded-tl-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-neon-pink rounded-br-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
