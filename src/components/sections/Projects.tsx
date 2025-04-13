import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard"; // Adjust path if you moved ProjectCard

const Projects = () => {
  return (
    <section id="projects" className="container py-16 md:py-20 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Projects
      </h2>
      {/* Check if projectsData is empty */}
      {projectsData.length > 0 ? (
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
            ))}
         </div>
      ) : (
         <p className="text-center text-muted-foreground">More projects coming soon!</p>
      )}

    </section>
  );
};

export default Projects;