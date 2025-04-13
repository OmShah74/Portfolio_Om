import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="container py-16 md:py-20 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
        About Me
      </h2>
      <div className="mx-auto max-w-3xl space-y-6 text-lg text-muted-foreground">
        {/* --- CHANGE CONTENT --- */}
        <p className="text-balance">
          Hello! I'm Om Shah, a dedicated web developer with a strong foundation in both frontend and backend technologies. My journey into code started with [mention your starting point or inspiration], and since then, I've been captivated by the power of the web to connect people and solve problems.
        </p>
        <p className="text-balance">
          I specialize in building responsive and interactive applications using modern stacks like React, Next.js, and Node.js. I thrive on tackling complex challenges, optimizing for performance, and ensuring a seamless user experience. I'm always eager to learn new technologies and improve my craft.
        </p>
        <p className="text-balance">
          Beyond coding, I enjoy [mention a hobby or interest, e.g., exploring new hiking trails, reading tech blogs, contributing to open source]. I believe in continuous learning and collaboration.
        </p>
      </div>
       {/* Optional: Add another download button here if desired */}
       <div className="mt-12 flex justify-center">
         <Button asChild variant="default" size="lg">
             {/* --- Ensure PDF name matches file in /public --- */}
            <Link href="/OmShah_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume Again
            </Link>
         </Button>
       </div>
    </section>
  );
};

export default About;