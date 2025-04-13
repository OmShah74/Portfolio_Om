import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react"; // Example icons

const Hero = () => {
  return (
    <section id="hero" className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-6 py-10 text-center md:py-12 lg:py-16">
      <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm Om Shah {/* CHANGE NAME */}
        <br className="hidden sm:inline" />
        <span className="text-primary">Full-Stack Web Developer</span> {/* CHANGE TITLE */}
      </h1>
      <p className="max-w-[750px] text-balance text-lg text-muted-foreground sm:text-xl">
         {/* --- CHANGE PITCH --- */}
        Passionate about building modern, performant, and user-friendly web applications. Turning ideas into interactive digital experiences with clean code and thoughtful design.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="#projects">
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
           {/* --- Ensure PDF name matches file in /public --- */}
           <Link href="/OmShah_Resume.pdf" download target="_blank" rel="noopener noreferrer">
              <FileDown className="mr-2 h-5 w-5" />
              Download Resume
           </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;