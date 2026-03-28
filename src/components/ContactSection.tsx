import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const SERVICE_ID = "service_gwlqvcm";
const TEMPLATE_ID = "template_v22dt6q";
const PUBLIC_KEY = "dowrfMkfgyjRJ9y9o";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY);
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-blue/10 blur-[120px] rounded-full" />
      <div className="container relative z-10">
        <h2 className="section-heading text-center mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Have a project? Let's talk!</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "shara.shashikala05@gmail.com", href: "mailto:shara.shashikala05@gmail.com" },
                { icon: Phone, text: "9019362895", href: "tel:9019362895" },
                { icon: MapPin, text: "Bangalore, Karnataka", href: "#" },
              ].map((c, i) => (
                <a key={i} href={c.href} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <span className="glass-card p-2.5 rounded-lg"><c.icon size={18} className="text-neon-purple" /></span>
                  <span className="text-sm">{c.text}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Shashikala-05" target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-lg hover:border-neon-purple/50 transition-colors">
                <Github size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/shashikala2002" target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-lg hover:border-neon-blue/50 transition-colors">
                <Linkedin size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card-glow p-6 rounded-xl space-y-4">
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label className="text-sm text-muted-foreground capitalize mb-1 block">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-glass-border text-foreground text-sm focus:outline-none focus:border-neon-purple/50 focus:shadow-[0_0_10px_-3px_hsl(var(--neon-purple)/0.3)] transition-all"
                />
              </div>
            ))}
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-glass-border text-foreground text-sm focus:outline-none focus:border-neon-purple/50 focus:shadow-[0_0_10px_-3px_hsl(var(--neon-purple)/0.3)] transition-all resize-none"
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50">
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
