import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Example social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { href: "https://github.com/yourusername", icon: Github, label: "GitHub" }, // CHANGE LINK
    { href: "https://linkedin.com/in/yourprofile", icon: Linkedin, label: "LinkedIn" }, // CHANGE LINK
    { href: "mailto:your_personal_email@example.com", icon: Mail, label: "Email" }, // CHANGE LINK
  ]

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row md:justify-between">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} Om Shah. All Rights Reserved. {/* CHANGE NAME */}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
             <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
             </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;