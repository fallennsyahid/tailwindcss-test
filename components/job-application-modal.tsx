"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Upload, User, FileText, Send, CheckCircle } from "lucide-react"

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
  department: string
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle, department }: JobApplicationModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    portfolio: "",
    experience: "",
    cv: null as File | null,
  })

  const steps = [
    { number: 1, title: "Info Personal", icon: User },
    { number: 2, title: "Dokumen", icon: FileText },
    { number: 3, title: "Selesai", icon: CheckCircle },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (file: File) => {
    setFormData((prev) => ({ ...prev, cv: file }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Application submitted:", formData)
    setCurrentStep(3)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="pr-12">
            <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-poppins)]">Lamar Posisi</h2>
            <p className="text-lg opacity-90 font-[family-name:var(--font-lato)]">{jobTitle}</p>
            <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
              {department}
            </Badge>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep >= step.number
                      ? "bg-primary border-primary text-white"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span
                  className={`ml-2 font-medium font-[family-name:var(--font-poppins)] ${
                    currentStep >= step.number ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${currentStep > step.number ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-[family-name:var(--font-lato)]"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-[family-name:var(--font-lato)]"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-[family-name:var(--font-lato)]"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  Pengalaman Singkat
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-[family-name:var(--font-lato)]"
                  placeholder="Ceritakan pengalaman kerja Anda yang relevan..."
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  Upload CV/Resume *
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2 font-[family-name:var(--font-lato)]">
                    Drag & drop file CV Anda atau klik untuk browse
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 font-[family-name:var(--font-lato)]">
                    Format: PDF, DOC, DOCX (Max 5MB)
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload">
                    <Button
                      variant="outline"
                      className="cursor-pointer font-[family-name:var(--font-poppins)] bg-transparent"
                    >
                      Pilih File
                    </Button>
                  </label>
                  {formData.cv && (
                    <p className="mt-2 text-sm text-primary font-[family-name:var(--font-lato)]">
                      ✓ {formData.cv.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  Cover Letter
                </label>
                <textarea
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-[family-name:var(--font-lato)]"
                  placeholder="Tulis cover letter Anda di sini. Jelaskan mengapa Anda tertarik dengan posisi ini dan apa yang bisa Anda kontribusikan..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                  Portfolio/LinkedIn (Opsional)
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-[family-name:var(--font-lato)]"
                  placeholder="https://portfolio.com atau https://linkedin.com/in/username"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
                Aplikasi Berhasil Dikirim!
              </h3>
              <p className="text-muted-foreground mb-6 font-[family-name:var(--font-lato)]">
                Terima kasih telah melamar posisi <strong>{jobTitle}</strong>. Tim HR kami akan meninjau aplikasi Anda
                dan menghubungi dalam 3-5 hari kerja.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground font-[family-name:var(--font-lato)]">
                  <strong>Langkah selanjutnya:</strong>
                  <br />
                  1. Kami akan meninjau aplikasi Anda
                  <br />
                  2. Jika sesuai, Anda akan dihubungi untuk interview
                  <br />
                  3. Proses interview dan assessment
                  <br />
                  4. Keputusan final
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/50 flex justify-between">
          {currentStep < 3 && (
            <>
              <Button
                variant="outline"
                onClick={onClose}
                className="font-[family-name:var(--font-poppins)] bg-transparent"
              >
                Batal
              </Button>
              <Button
                onClick={currentStep === 2 ? handleSubmit : handleNext}
                className="font-[family-name:var(--font-poppins)]"
                disabled={currentStep === 1 && (!formData.fullName || !formData.email || !formData.phone)}
              >
                {currentStep === 2 ? (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Aplikasi
                  </>
                ) : (
                  "Lanjutkan"
                )}
              </Button>
            </>
          )}
          {currentStep === 3 && (
            <Button onClick={onClose} className="w-full font-[family-name:var(--font-poppins)]">
              Tutup
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
