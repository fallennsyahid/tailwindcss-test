import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Ahmad Rizki",
      position: "CEO & Founder",
      description:
        "Visioner dengan pengalaman 10+ tahun di industri teknologi. Memimpin strategi perusahaan dan inovasi produk.",
      image: "/professional-ceo-portrait.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Putri",
      position: "CTO",
      description:
        "Expert dalam arsitektur sistem dan teknologi cloud. Bertanggung jawab atas semua aspek teknis perusahaan.",
      image: "/professional-cto-woman.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Budi Santoso",
      position: "Lead Developer",
      description:
        "Full-stack developer berpengalaman dengan keahlian dalam berbagai teknologi modern dan best practices.",
      image: "/professional-developer-portrait.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Maya Sari",
      position: "UI/UX Designer",
      description: "Designer kreatif yang fokus pada user experience dan interface design yang intuitif dan menarik.",
      image: "/placeholder-7qxws.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Doni Pratama",
      position: "DevOps Engineer",
      description:
        "Specialist dalam infrastructure automation, CI/CD, dan cloud deployment untuk memastikan sistem yang reliable.",
      image: "/devops-engineer-portrait.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Lisa Wijaya",
      position: "Project Manager",
      description:
        "Berpengalaman dalam mengelola proyek kompleks dan memastikan delivery yang tepat waktu dengan kualitas terbaik.",
      image: "/professional-woman-pm.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Tim Profesional Kami
          </h2>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-lato)] max-w-3xl mx-auto leading-relaxed">
            Bertemu dengan tim ahli yang berdedikasi untuk memberikan solusi teknologi terbaik bagi bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group text-center border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent group-hover:border-primary transition-colors duration-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-4 font-[family-name:var(--font-poppins)]">
                  {member.position}
                </div>
                <p className="text-muted-foreground mb-6 font-[family-name:var(--font-lato)] leading-relaxed">
                  {member.description}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-10 h-10 bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
