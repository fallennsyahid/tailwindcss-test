"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Andi Wijaya",
      position: "CEO, TechStart Indonesia",
      company: "TechStart Indonesia",
      content:
        "Cipta Muda Solusi berhasil mengembangkan platform e-commerce kami dengan hasil yang melebihi ekspektasi. Tim mereka sangat profesional dan responsif terhadap kebutuhan bisnis kami.",
      rating: 5,
      image: "/professional-ceo-portrait.png",
    },
    {
      name: "Sari Indah",
      position: "Direktur IT, Bank Mandiri Regional",
      company: "Bank Mandiri Regional",
      content:
        "Implementasi sistem core banking yang dilakukan oleh Cipta Muda Solusi sangat memuaskan. Mereka memahami kompleksitas industri perbankan dan memberikan solusi yang tepat.",
      rating: 5,
      image: "/professional-woman-director.png",
    },
    {
      name: "Rudi Hartono",
      position: "Founder, EduTech Solutions",
      company: "EduTech Solutions",
      content:
        "Platform pembelajaran online yang dikembangkan sangat user-friendly dan scalable. Dukungan teknis mereka juga luar biasa, selalu siap membantu 24/7.",
      rating: 5,
      image: "/founder-portrait.png",
    },
    {
      name: "Maya Kusuma",
      position: "COO, Retail Chain Indonesia",
      company: "Retail Chain Indonesia",
      content:
        "Sistem inventory management yang mereka buat sangat membantu operasional toko kami. Real-time tracking dan analytics dashboard memberikan insight yang valuable.",
      rating: 5,
      image: "/professional-coo-woman.png",
    },
    {
      name: "Bambang Sutrisno",
      position: "General Manager, Logistics Corp",
      company: "Logistics Corp",
      content:
        "Aplikasi tracking dan fleet management yang dikembangkan sangat membantu efisiensi operasional kami. ROI yang didapat sangat signifikan dalam 6 bulan pertama.",
      rating: 5,
      image: "/general-manager-portrait.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Testimoni Klien
          </h2>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-lato)] max-w-3xl mx-auto leading-relaxed">
            Dengarkan pengalaman klien kami yang telah merasakan manfaat dari solusi teknologi yang kami berikan
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="h-12 w-12 text-primary/30" />
              </div>

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-muted-foreground font-[family-name:var(--font-lato)] leading-relaxed italic mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary font-medium font-[family-name:var(--font-poppins)]">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-sm text-muted-foreground font-[family-name:var(--font-lato)]">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                index === currentIndex ? "border-primary bg-accent" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-2 border-2 border-primary/20">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-medium text-foreground font-[family-name:var(--font-poppins)]">
                {testimonial.name}
              </div>
              <div className="text-xs text-muted-foreground font-[family-name:var(--font-lato)]">
                {testimonial.company}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
