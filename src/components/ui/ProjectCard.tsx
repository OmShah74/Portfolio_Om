import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/data"; // Import the interface
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="p-0"> {/* Remove padding for image */}
        <div className="relative aspect-video w-full"> {/* Use aspect ratio for consistent image size */}
            <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill // Use fill and object-cover
                className="object-cover" // Ensure image covers the area
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Optimize image loading
            />
        </div>
      </CardHeader>
      {/* Add padding back for content */}
      <div className="flex flex-grow flex-col p-6">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-4 flex-grow text-muted-foreground">{project.description}</CardDescription>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <CardFooter className="mt-auto flex justify-end gap-2 p-0 pt-4"> {/* Adjust padding */}
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-4 w-4" /> Live
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" /> Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;