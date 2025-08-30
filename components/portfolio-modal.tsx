"use client"

import { useState } from "react"
import { X, ExternalLink, Github, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const allProjects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description:
        "Aplikasi mobile banking dengan keamanan tinggi, UI/UX yang intuitif, dan fitur-fitur perbankan digital lengkap.",
      image: "/mobile-banking-app.png",
      tags: ["React Native", "Firebase", "Biometric Auth"],
      year: "2024",
    },
    {
      title: "HR Management System",
      category: "Enterprise Software",
      description:
        "Sistem manajemen SDM terintegrasi untuk mengelola karyawan, payroll, attendance, dan performance evaluation.",
      image: "/placeholder-4hvwp.png",
      tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
      year: "2023",
    },
    {
      title: "IoT Monitoring Dashboard",
      category: "IoT & Analytics",
      description:
        "Dashboard real-time untuk monitoring perangkat IoT dengan visualisasi data yang interaktif dan alert system.",
      image: "/iot-monitoring-dashboard.png",
      tags: ["Angular", "Python", "InfluxDB", "MQTT"],
      year: "2023",
    },
    {
      title: "Learning Management System",
      category: "EdTech",
      description:
        "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking untuk institusi pendidikan.",
      image: "/online-learning-platform.png",
      tags: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
      year: "2024",
    },
    {
      title: "Supply Chain Management",
      category: "Logistics",
      description:
        "Sistem manajemen supply chain untuk tracking inventory, supplier management, dan optimasi distribusi.",
      image: "/supply-chain-dashboard.png",
      tags: ["React", "Express.js", "Redis", "Microservices"],
      year: "2023",
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      description:
        "Sistem manajemen rumah sakit dengan fitur appointment scheduling, medical records, dan billing system.",
      image: "/healthcare-management-dashboard.png",
      tags: ["React", "Django", "PostgreSQL", "Docker"],
      year: "2024",
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description:
        "Platform properti dengan fitur pencarian advanced, virtual tour, dan sistem CRM untuk agen properti.",
      image: "/real-estate-platform.png",
      tags: ["Next.js", "Prisma", "Stripe", "MapBox"],
      year: "2023",
    },
    {
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "Aplikasi food delivery dengan real-time tracking, multiple payment options, dan rating system.",
      image: "/food-delivery-app.png",
      tags: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      year: "2024",
    },
  ]

  const categories = ["All", ...Array.from(new Set(allProjects.map((project) => project.category)))]

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
          <div>
            <h2 className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Portfolio Lengkap
            </h2>
            <p className="text-muted-foreground font-[family-name:var(--font-lato)]">
              Semua proyek yang telah kami kerjakan
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full h-10 w-10 p-0 hover:bg-white/80">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-border bg-background/50">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-[family-name:var(--font-lato)]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="font-[family-name:var(--font-poppins)] text-sm"
                >
                  <Filter className="h-3 w-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-primary">
                    {project.year}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 flex-1"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 flex-1"
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-xs text-primary font-medium mb-2 font-[family-name:var(--font-poppins)]">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 font-[family-name:var(--font-lato)] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full font-[family-name:var(--font-poppins)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full font-[family-name:var(--font-poppins)]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-[family-name:var(--font-lato)]">
                Tidak ada proyek yang ditemukan dengan kriteria tersebut.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
