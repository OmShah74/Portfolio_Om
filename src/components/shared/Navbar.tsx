import Link from "next/link";
import { Button } from "@/components/ui/button";
// Optional: Import icons if needed (e.g., for mobile menu or theme toggle)
// import { Menu } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#resume-preview", label: "Resume" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo/Name */}
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Optional: Add SVG logo here */}
            <span className="font-bold sm:inline-block">
              Om Shah {/* CHANGE THIS */}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (Example - needs state/logic) */}
        {/* <div className="flex flex-1 items-center justify-end md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div> */}

        {/* Optional: Right side items (Theme Toggle, Socials) */}
        {/* <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
           Add Theme Toggle or other buttons here
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;