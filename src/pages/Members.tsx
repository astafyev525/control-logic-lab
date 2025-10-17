import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Members = () => {
  const facultyMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Principal Investigator",
      bio: "Associate Professor specializing in adaptive control and machine learning. Ph.D. from MIT.",
      email: "jsmith@university.edu",
      initials: "JS"
    }
  ];

  const phdStudents = [
    {
      name: "Alex Johnson",
      role: "Ph.D. Candidate",
      bio: "Researching neural network-based state estimation and control.",
      email: "ajohnson@university.edu",
      initials: "AJ"
    },
    {
      name: "Maria Williams",
      role: "Ph.D. Candidate",
      bio: "Working on reinforcement learning for optimal control problems.",
      email: "mwilliams@university.edu",
      initials: "MW"
    },
    {
      name: "Li Chen",
      role: "Ph.D. Student",
      bio: "Focused on data-driven system identification methods.",
      email: "lchen@university.edu",
      initials: "LC"
    }
  ];

  const undergradStudents = [
    {
      name: "Robert Brown",
      role: "Undergraduate Researcher",
      bio: "Working on simulation frameworks for control systems.",
      initials: "RB"
    },
    {
      name: "Sarah Davis",
      role: "Undergraduate Researcher",
      bio: "Developing visualization tools for neural network controllers.",
      initials: "SD"
    }
  ];

  const MemberCard = ({ member }: { member: any }) => (
    <Card className="hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <AvatarFallback>{member.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-accent mb-2">{member.role}</p>
            <p className="text-sm text-foreground/70 mb-3">{member.bio}</p>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {member.email}
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Lab Members</h1>
            <p className="text-lg text-muted-foreground">
              Meet our research team working at the intersection of machine learning and control systems.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Faculty
              </h2>
              <div className="grid gap-6">
                {facultyMembers.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Ph.D. Students</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {phdStudents.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Undergraduate Researchers</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {undergradStudents.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Members;
