export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string; // Path relative to /public directory (e.g., /images/project1.png)
    tags: string[];
    liveUrl?: string; // Optional live demo link
    repoUrl?: string; // Optional repository link
  }
  
  export const projectsData: Project[] = [
    // --- ADD YOUR ACTUAL PROJECTS HERE ---
    {
      id: 1,
      title: "Modern Portfolio Website",
      description: "This very website! Built with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Resend for emails.",
      imageUrl: "/images/portfolio-placeholder.png", // Create this image
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI", "Resend"],
      // liveUrl: "https://your-deployed-link.com", // Add your live link
      repoUrl: "https://github.com/yourusername/your-repo-name", // Add your repo link
    },
    {
      id: 2,
      title: "E-commerce Platform Concept",
      description: "A conceptual design and frontend for an e-commerce site focusing on clean UI and state management.",
      imageUrl: "/images/ecommerce-placeholder.png", // Create this image
      tags: ["React", "Zustand", "Styled Components", "Figma"],
      // liveUrl: "#",
      // repoUrl: "#",
    },
    {
      id: 3,
      title: "API Service for X",
      description: "Developed a RESTful API using Node.js and Express to handle specific business logic.",
      imageUrl: "/images/api-placeholder.png", // Create this image
      tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
      // liveUrl: "#", // APIs might not have a live UI link
      repoUrl: "#",
    },
    // Add more projects...
  ];
  
  // Resume Preview Data (Example - can be structured differently)
  export const experienceData = [
      { id: 1, role: "Your Current/Last Role", company: "Company Name", duration: "YYYY - Present/YYYY", description: "Key responsibilities and achievements using specific technologies."},
      { id: 2, role: "Previous Role", company: "Previous Company", duration: "YYYY - YYYY", description: "Responsibilities and accomplishments."},
  ];
  export const educationData = [
      { id: 1, degree: "Your Degree (e.g., B.S. in Computer Science)", institution: "University Name", duration: "YYYY - YYYY"},
      // Add other relevant education
  ];
  
  // Skills Data (Example)
  export const skillsData = {
      Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python", "SQL"],
      Frameworks_Libraries: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
      Databases: ["PostgreSQL", "MongoDB", "MySQL"],
      Tools_Platforms: ["Git", "Docker", "Vercel", "AWS (S3, EC2 basics)", "Figma", "Jira"],
      Concepts: ["REST APIs", "State Management", "SSR/SSG", "CI/CD (Basic)", "Agile/Scrum"],
  };
  
  
  // --- REMEMBER ---
  // Create a `public/images` directory in your project root.
  // Add placeholder images (e.g., `portfolio-placeholder.png`, `ecommerce-placeholder.png`)
  // Replace placeholder text and links with your actual information.