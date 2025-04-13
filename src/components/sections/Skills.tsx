import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Use Card component
import { skillsData } from "@/lib/data"; // Import data

const Skills = () => {
  return (
    <section id="skills" className="container py-16 md:py-20 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
        My Technical Skills
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{category.replace(/_/g, ' & ')}</CardTitle> {/* Replace underscore for display */}
            </CardHeader>
            <CardContent className="flex flex-grow flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;