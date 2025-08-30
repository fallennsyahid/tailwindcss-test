"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import PortfolioModal from "@/components/portfolio-modal"

export default function PortfolioSection() {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false)

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description:
        "Aplikasi mobile banking dengan keamanan tinggi, UI/UX yang intuitif, dan fitur-fitur perbankan digital lengkap.",
      image: "/mobile-banking-app.png",
      tags: ["React Native", "Firebase", "Biometric Auth"],
    },
    {
      title: "HR Management System",
      category: "Enterprise Software",
      description:
        "Sistem manajemen SDM terintegrasi untuk mengelola karyawan, payroll, attendance, dan performance evaluation.",
      image: "/placeholder-4hvwp.png",
      tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
    },
    {
      title: "IoT Monitoring Dashboard",
      category: "IoT & Analytics",
      description:
        "Dashboard real-time untuk monitoring perangkat IoT dengan visualisasi data yang interaktif dan alert system.",
      image: "/iot-monitoring-dashboard.png",
      tags: ["Angular", "Python", "InfluxDB", "MQTT"],
    },
    {
      title: "Learning Management System",
      category: "EdTech",
      description:
        "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking untuk institusi pendidikan.",
      image: "/online-learning-platform.png",
      tags: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
    },
    {
      title: "Supply Chain Management",
      category: "Logistics",
      description:
        "Sistem manajemen supply chain untuk tracking inventory, supplier management, dan optimasi distribusi.",
      image: "/supply-chain-dashboard.png",
      tags: ["React", "Express.js", "Redis", "Microservices"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Portfolio Proyek
          </h2>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-lato)] max-w-3xl mx-auto leading-relaxed">
            Beberapa proyek terbaik yang telah kami kerjakan dengan berbagai teknologi dan industri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2 font-[family-name:var(--font-poppins)]">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-[family-name:var(--font-lato)] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-[family-name:var(--font-poppins)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="font-[family-name:var(--font-poppins)] font-semibold bg-transparent"
            onClick={() => setIsPortfolioModalOpen(true)}
          >
            Lihat Semua Proyek
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <PortfolioModal isOpen={isPortfolioModalOpen} onClose={() => setIsPortfolioModalOpen(false)} />
    </section>
  )
}
