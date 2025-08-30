"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Header from "@/components/header"
import ContactModal from "@/components/contact-modal"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Apa saja layanan yang ditawarkan oleh Cipta Muda Solusi?",
    answer:
      "Kami menyediakan berbagai layanan teknologi termasuk pengembangan aplikasi web dan mobile, konsultasi IT, sistem manajemen, dan solusi digital untuk bisnis. Tim ahli kami siap membantu transformasi digital perusahaan Anda.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
    answer:
      "Waktu penyelesaian proyek bervariasi tergantung kompleksitas dan scope pekerjaan. Proyek sederhana biasanya memakan waktu 2-4 minggu, sedangkan proyek kompleks dapat memakan waktu 2-6 bulan. Kami akan memberikan timeline yang jelas setelah analisis kebutuhan.",
  },
  {
    question: "Apakah ada garansi untuk layanan yang diberikan?",
    answer:
      "Ya, kami memberikan garansi untuk semua layanan kami. Garansi mencakup bug fixing dan maintenance selama 3-6 bulan setelah project selesai, tergantung jenis layanan yang dipilih.",
  },
  {
    question: "Bagaimana proses konsultasi dan estimasi biaya?",
    answer:
      "Konsultasi awal gratis! Anda dapat menghubungi kami untuk diskusi kebutuhan proyek. Setelah itu, kami akan melakukan analisis dan memberikan proposal lengkap dengan estimasi biaya dalam 3-5 hari kerja.",
  },
  {
    question: "Apakah Cipta Muda Solusi melayani klien dari luar kota?",
    answer:
      "Tentu saja! Kami melayani klien dari seluruh Indonesia. Dengan teknologi komunikasi modern, kami dapat bekerja secara remote dan tetap memberikan layanan berkualitas tinggi.",
  },
  {
    question: "Teknologi apa saja yang digunakan dalam pengembangan?",
    answer:
      "Kami menggunakan teknologi terkini seperti React, Next.js, Node.js, Python, PHP, MySQL, PostgreSQL, dan berbagai framework modern lainnya. Pemilihan teknologi disesuaikan dengan kebutuhan dan preferensi klien.",
  },
  {
    question: "Apakah ada layanan maintenance setelah proyek selesai?",
    answer:
      "Ya, kami menyediakan layanan maintenance dan support berkelanjutan. Paket maintenance mencakup update sistem, backup data, monitoring performa, dan technical support dengan berbagai pilihan paket sesuai kebutuhan.",
  },
  {
    question: "Bagaimana sistem pembayaran untuk layanan Cipta Muda Solusi?",
    answer:
      "Kami menawarkan sistem pembayaran yang fleksibel. Biasanya dibagi menjadi 3 tahap: 30% di awal, 40% saat development, dan 30% saat selesai. Untuk proyek besar, kami juga menerima pembayaran cicilan bulanan.",
  },
]

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="font-semibold text-foreground font-[family-name:var(--font-poppins)]">{item.question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-lato)]">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-lato)]">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-white/90 mb-8 font-[family-name:var(--font-lato)]">
            Tim kami siap membantu menjawab pertanyaan spesifik Anda
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 font-[family-name:var(--font-poppins)]"
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>

      {/* ContactModal Component */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
