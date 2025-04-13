import { experienceData, educationData } from "@/lib/data"; // Import data
import { Briefcase, GraduationCap } from "lucide-react"; // Icons

const ResumePreview = () => {
  return (
    <section id="resume-preview" className="container py-16 md:py-20 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Career Highlights
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Experience Column */}
        <div>
          <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold">
             <Briefcase className="h-7 w-7 text-primary" />
             Work Experience
          </h3>
          <div className="relative space-y-8 border-l-2 border-primary/20 pl-6">
            {experienceData.length > 0 ? (
              experienceData.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-background bg-primary"></div> {/* Timeline dot */}
                <p className="text-xs text-muted-foreground">{exp.duration}</p>
                <h4 className="font-semibold text-lg">{exp.role}</h4>
                <p className="text-sm font-medium text-primary/80">{exp.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{exp.description}</p>
              </div>
              ))
            ) : (
               <p className="text-muted-foreground">Experience details coming soon.</p>
            )}
          </div>
        </div>

        {/* Education Column */}
        <div>
           <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold">
             <GraduationCap className="h-7 w-7 text-primary" />
             Education
          </h3>
           <div className="relative space-y-8 border-l-2 border-primary/20 pl-6">
             {educationData.length > 0 ? (
               educationData.map((edu) => (
                <div key={edu.id} className="relative">
                    <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-background bg-primary"></div> {/* Timeline dot */}
                     <p className="text-xs text-muted-foreground">{edu.duration}</p>
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-sm font-medium text-primary/80">{edu.institution}</p>
                </div>
                ))
             ) : (
               <p className="text-muted-foreground">Education details coming soon.</p>
             )}
           </div>
        </div>
      </div>

       {/* Optional: Add another download button here maybe */}
    </section>
  );
};

export default ResumePreview;