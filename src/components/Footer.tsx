import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-glass-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Designed with ❤️ by <span className="gradient-text font-semibold">Shashikala G</span>
      </p>
      <div className="flex gap-4">
        {[
          { icon: Mail, href: "mailto:shara.shashikala05@gmail.com" },
          { icon: Github, href: "https://github.com/Shashikala-05" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/shashikala2002" },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-purple transition-colors">
            <s.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
