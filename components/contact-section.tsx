"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      content: "Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 21 1234 5678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@ciptamudasolusi.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 18:00 WIB",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Hubungi Kami
          </h2>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-lato)] max-w-3xl mx-auto leading-relaxed">
            Siap untuk memulai proyek Anda? Mari diskusikan kebutuhan bisnis Anda dan temukan solusi terbaik bersama
            kami
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]"
                    >
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="font-[family-name:var(--font-lato)]"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="font-[family-name:var(--font-lato)]"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]"
                  >
                    Nama Perusahaan
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="font-[family-name:var(--font-lato)]"
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]"
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="font-[family-name:var(--font-lato)]"
                    placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full font-[family-name:var(--font-poppins)] font-semibold">
                  <Send className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 font-[family-name:var(--font-poppins)]">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground font-[family-name:var(--font-lato)]">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="border-border/50">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-[family-name:var(--font-lato)]">Peta Lokasi Kantor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
