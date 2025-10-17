import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const Publications = () => {
  const publications = [
    {
      title: "Deep Reinforcement Learning for Adaptive Control of Nonlinear Systems",
      authors: "Smith, J., Johnson, A., Williams, M.",
      venue: "IEEE Transactions on Automatic Control, 2024",
      links: [
        { label: "Paper", url: "#" },
        { label: "arXiv", url: "#" }
      ]
    },
    {
      title: "Neural Network-Based State Estimation with Stability Guarantees",
      authors: "Johnson, A., Chen, L., Smith, J.",
      venue: "American Control Conference (ACC), 2024",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" }
      ]
    },
    {
      title: "Data-Driven System Identification Using Deep Learning",
      authors: "Williams, M., Smith, J., Brown, R.",
      venue: "Conference on Decision and Control (CDC), 2023",
      links: [
        { label: "Paper", url: "#" }
      ]
    },
    {
      title: "Robust Control via Model-Free Reinforcement Learning",
      authors: "Chen, L., Williams, M., Johnson, A.",
      venue: "International Journal of Robust and Nonlinear Control, 2023",
      links: [
        { label: "Paper", url: "#" },
        { label: "Supplement", url: "#" }
      ]
    },
    {
      title: "Learning-Based Predictive Control for Autonomous Systems",
      authors: "Smith, J., Brown, R., Chen, L.",
      venue: "IEEE Robotics and Automation Letters, 2023",
      links: [
        { label: "Paper", url: "#" },
        { label: "Video", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Publications</h1>
            <p className="text-lg text-muted-foreground">
              Recent publications from our research group.
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-foreground/70 mb-4 italic">
                    {pub.venue}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {pub.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="text-sm text-accent hover:underline"
                      >
                        {link.label}
                      </a>
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

export default Publications;
