import { Github } from "lucide-react";
import edunexusImg from "@/assets/edunexus.jpg";
import dishtributeImg from "@/assets/dishtribute.png";
import soulSoundsImg from "@/assets/soul-sounds.jpg";

const aerosenseImg = "https://i.postimg.cc/nhzRF0DR/Aero-Sense.png";

const projects = [
  {
    title: "EduNexus",
    subtitle: "Cloud ERP System",
    desc: "Full-stack ERP system with dashboards, authentication, role-based access, and academic management modules.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: edunexusImg,
    github: "https://github.com/Shashikala-05/EduNexus",
  },
  {
    title: "Dishtribute",
    subtitle: "Food Donation Platform",
    desc: "Connects food donors with receivers using location-based features and real-time notifications.",
    tech: ["React", "Firebase", "Google Maps API"],
    image: dishtributeImg,
    github: "https://github.com/Shashikala-05/Dishtribute",
  },
  {
    title: "Soul Sounds",
    subtitle: "Music Streaming App",
    desc: "Audio streaming application with playlist management, search, and responsive player interface.",
    tech: ["JavaScript", "HTML", "CSS", "Web Audio API"],
    image: soulSoundsImg,
    github: "https://github.com/Shashikala-05/Soul-Sounds",
  },
  {
    title: "AeroSense",
    subtitle: "IoT Air Quality System",
    desc: "IoT + ML based AQI monitoring and prediction system with real-time sensor data visualization.",
    tech: ["Python", "IoT", "Machine Learning", "Flask"],
    image: aerosenseImg,
    github: "https://github.com/Shashikala-05/AeroSense",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/8 blur-[150px] rounded-full" />

      <div className="container relative z-10">
        <h2 className="section-heading text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-[0_0_40px_-5px_hsl(var(--neon-purple)/0.3)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neon-blue">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="btn-primary text-xs px-4 py-2 flex items-center gap-2"
                  >
                    <Github size={16} />
                    View on GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;