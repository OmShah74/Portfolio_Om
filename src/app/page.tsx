import About from "@/components/sections/About";
import ContactForm from "@/components/sections/ContactForm";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ResumePreview from "@/components/sections/ResumePreview";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      {/* Render sections in desired order */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ResumePreview />
      <ContactForm />
    </>
  );
}