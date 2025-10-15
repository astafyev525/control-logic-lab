import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Code = () => {
  const repositories = [
    {
      name: "adaptive-control-toolkit",
      description: "Python toolkit for adaptive control algorithms with PyTorch integration for neural network-based controllers.",
      language: "Python",
      stars: "124",
      topics: ["control-systems", "adaptive-control", "pytorch"]
    },
    {
      name: "rl-control-suite",
      description: "Reinforcement learning environments and benchmarks for control system applications.",
      language: "Python",
      stars: "89",
      topics: ["reinforcement-learning", "control", "benchmarks"]
    },
    {
      name: "system-id-ml",
      description: "Machine learning methods for system identification including neural ODE and physics-informed networks.",
      language: "Python",
      stars: "67",
      topics: ["system-identification", "neural-ode", "physics-informed"]
    },
    {
      name: "robust-nn-control",
      description: "MATLAB/Simulink implementations of robust neural network controllers with stability certificates.",
      language: "MATLAB",
      stars: "45",
      topics: ["robust-control", "neural-networks", "stability"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Open Source Code</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Our research software and tools are publicly available on GitHub. Feel free to use, modify, and contribute to these projects.
            </p>
            <Button variant="default" className="gap-2">
              <Github className="h-4 w-4" />
              View Organization on GitHub
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>

          <div className="grid gap-6">
            {repositories.map((repo, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        {repo.name}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {repo.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/70">{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-foreground/70">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      {repo.stars}
                    </div>
                    <div className="flex flex-wrap gap-2 ml-auto">
                      {repo.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
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

export default Code;
