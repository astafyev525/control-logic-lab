import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Cpu, Network } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and reinforcement learning techniques for intelligent control systems."
    },
    {
      icon: Cpu,
      title: "Adaptive Control",
      description: "Real-time adaptive algorithms that learn and adjust to system uncertainties and changing dynamics."
    },
    {
      icon: Network,
      title: "System Identification",
      description: "Data-driven methods for discovering system models from experimental observations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Machine Learning & Control Systems Laboratory
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advancing the intersection of artificial intelligence and control theory to create intelligent, adaptive systems
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="gap-2">
                  Explore Our Research
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/publications">
                <Button size="lg" variant="outline">
                  View Publications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Focus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our lab explores cutting-edge approaches at the convergence of machine learning and control systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 w-fit">
                    <area.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="bg-muted/50 border-y py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Highlights</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>New Paper Accepted at ACC 2024</CardTitle>
                  <CardDescription>March 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Our work on neural network-based state estimation with stability guarantees has been accepted for presentation at the American Control Conference.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Open Source Release</CardTitle>
                  <CardDescription>February 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Released our adaptive control toolkit with PyTorch integration, providing state-of-the-art implementations for the research community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p>ML & Control Systems Laboratory • Department of Engineering • University</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
