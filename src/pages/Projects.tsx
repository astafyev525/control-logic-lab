import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Adaptive Control for Robotic Systems",
      description: "Developing machine learning algorithms for real-time adaptive control in robotic manipulators with uncertain dynamics.",
      tags: ["Robotics", "Adaptive Control", "Deep Learning"],
      status: "Active",
      year: "2024"
    },
    {
      title: "Neural Network-Based State Estimation",
      description: "Novel approach to state estimation in nonlinear systems using recurrent neural networks with guaranteed stability properties.",
      tags: ["Neural Networks", "State Estimation", "Stability"],
      status: "Active",
      year: "2024"
    },
    {
      title: "Reinforcement Learning for Optimal Control",
      description: "Applying model-free reinforcement learning techniques to solve complex optimal control problems in continuous domains.",
      tags: ["RL", "Optimal Control", "Continuous Systems"],
      status: "Completed",
      year: "2023"
    },
    {
      title: "Data-Driven System Identification",
      description: "Machine learning methods for identifying system dynamics from experimental data with application to aerospace systems.",
      tags: ["System ID", "Data-Driven", "Aerospace"],
      status: "Active",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Research Projects</h1>
            <p className="text-lg text-muted-foreground">
              Our current and completed research projects at the intersection of machine learning and control systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 border-border"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
