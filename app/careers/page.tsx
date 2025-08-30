"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase, ChevronRight, Search } from "lucide-react"

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("Semua")
  const [searchTerm, setSearchTerm] = useState("")

  const departments = ["Semua", "Engineering", "Design", "Marketing", "Sales", "HR"]

  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      experience: "3-5 tahun",
      description:
        "Kami mencari Senior Full Stack Developer yang berpengalaman untuk bergabung dengan tim engineering kami.",
      requirements: ["React.js, Node.js", "Database Management", "API Development", "Git Version Control"],
      posted: "2 hari yang lalu",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      experience: "2-4 tahun",
      description:
        "Bergabunglah dengan tim kreatif kami sebagai UI/UX Designer untuk menciptakan pengalaman digital yang luar biasa.",
      requirements: ["Figma, Adobe Creative Suite", "User Research", "Prototyping", "Design Systems"],
      posted: "1 minggu yang lalu",
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      experience: "1-3 tahun",
      description:
        "Kami membutuhkan Digital Marketing Specialist yang kreatif untuk mengembangkan strategi pemasaran digital.",
      requirements: ["SEO/SEM", "Social Media Marketing", "Content Creation", "Analytics"],
      posted: "3 hari yang lalu",
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Sales",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      experience: "4-6 tahun",
      description: "Posisi strategis untuk mengembangkan bisnis dan membangun hubungan dengan klien enterprise.",
      requirements: ["B2B Sales", "Relationship Building", "Strategic Planning", "Presentation Skills"],
      posted: "5 hari yang lalu",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      experience: "3-5 tahun",
      description: "Bergabung dengan tim infrastructure untuk mengelola dan mengoptimalkan sistem cloud kami.",
      requirements: ["AWS/Azure", "Docker, Kubernetes", "CI/CD Pipelines", "Monitoring Tools"],
      posted: "1 hari yang lalu",
    },
    {
      id: 6,
      title: "HR Generalist",
      department: "HR",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      experience: "2-4 tahun",
      description: "Kami mencari HR Generalist untuk mendukung berbagai aspek manajemen sumber daya manusia.",
      requirements: ["Recruitment", "Employee Relations", "Performance Management", "HR Policies"],
      posted: "1 minggu yang lalu",
    },
  ]

  const filteredJobs = jobListings.filter((job) => {
    const matchesDepartment = selectedDepartment === "Semua" || job.department === selectedDepartment
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesDepartment && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Bergabung dengan{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tim Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-[family-name:var(--font-lato)]">
            Wujudkan karir impian Anda bersama Cipta Muda Solusi. Kami mencari talenta terbaik untuk bergabung dalam
            misi menciptakan solusi teknologi inovatif.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-[family-name:var(--font-lato)]">50+ Tim Profesional</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="font-[family-name:var(--font-lato)]">Lingkungan Kerja Fleksibel</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-[family-name:var(--font-lato)]">Jakarta & Remote</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search & Filter */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Cari posisi yang Anda inginkan..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-[family-name:var(--font-lato)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept)}
                  className="font-[family-name:var(--font-poppins)]"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6 font-[family-name:var(--font-lato)]">
            Menampilkan {filteredJobs.length} posisi tersedia
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground font-[family-name:var(--font-lato)]">
                        {job.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="font-[family-name:var(--font-poppins)]">
                      {job.department}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-[family-name:var(--font-lato)]">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-[family-name:var(--font-lato)]">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-[family-name:var(--font-lato)]">{job.experience}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                      Keahlian yang Dibutuhkan:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="font-[family-name:var(--font-lato)]">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-[family-name:var(--font-lato)]">
                      Diposting {job.posted}
                    </span>
                    <Button className="font-[family-name:var(--font-poppins)]">
                      Lamar Sekarang
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
              Mengapa Bergabung dengan Kami?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-lato)]">
              Kami menawarkan lingkungan kerja yang mendukung pertumbuhan karir dan inovasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pertumbuhan Karir",
                description: "Program pengembangan karir yang jelas dengan mentoring dari senior",
                icon: "📈",
              },
              {
                title: "Work-Life Balance",
                description: "Fleksibilitas waktu kerja dan opsi remote work untuk keseimbangan hidup",
                icon: "⚖️",
              },
              {
                title: "Teknologi Terdepan",
                description: "Bekerja dengan teknologi dan tools terbaru di industri",
                icon: "🚀",
              },
              {
                title: "Tim yang Solid",
                description: "Bergabung dengan tim profesional yang saling mendukung",
                icon: "🤝",
              },
              {
                title: "Benefit Menarik",
                description: "Paket kompensasi kompetitif dengan berbagai tunjangan",
                icon: "💎",
              },
              {
                title: "Lingkungan Inovatif",
                description: "Budaya kerja yang mendorong kreativitas dan inovasi",
                icon: "💡",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-[family-name:var(--font-lato)]">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Tidak Menemukan Posisi yang Cocok?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-[family-name:var(--font-lato)]">
            Kirimkan CV Anda kepada kami. Kami akan menghubungi Anda ketika ada posisi yang sesuai dengan keahlian Anda.
          </p>
          <Button size="lg" className="font-[family-name:var(--font-poppins)] font-semibold">
            Kirim CV Anda
          </Button>
        </div>
      </section>
    </div>
  )
}
