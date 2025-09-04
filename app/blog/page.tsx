"use client"

import { Calendar, User, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tren Teknologi 2024: Apa yang Perlu Diketahui Bisnis Anda",
    excerpt:
      "Pelajari tren teknologi terbaru yang akan mempengaruhi bisnis di tahun 2024, mulai dari AI hingga cloud computing.",
    author: "Tim Cipta Muda",
    date: "15 Januari 2024",
    category: "Teknologi",
    image: "/modern-tech-trends-2024.png",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Mengapa Transformasi Digital Penting untuk UKM",
    excerpt:
      "Transformasi digital bukan hanya untuk perusahaan besar. Pelajari bagaimana UKM dapat memanfaatkan teknologi untuk berkembang.",
    author: "Ahmad Rizki",
    date: "10 Januari 2024",
    category: "Bisnis Digital",
    image: "/digital-transformation-small-business.png",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Panduan Memilih Framework Web Development yang Tepat",
    excerpt: "React, Vue, atau Angular? Panduan lengkap memilih framework yang sesuai dengan kebutuhan proyek Anda.",
    author: "Sarah Dewi",
    date: "5 Januari 2024",
    category: "Development",
    image: "/blog-covers/blog-demo-4.png",
    readTime: "8 min",
  },
  {
    id: 4,
    title: "Keamanan Aplikasi Web: Best Practices untuk Developer",
    excerpt: "Tips dan strategi penting untuk memastikan aplikasi web Anda aman dari berbagai ancaman cyber.",
    author: "Budi Santoso",
    date: "28 Desember 2023",
    category: "Security",
    image: "/web-app-security.png",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Optimasi Performa Website: Teknik dan Tools Terbaik",
    excerpt: "Pelajari cara meningkatkan kecepatan loading website Anda dengan berbagai teknik optimasi yang efektif.",
    author: "Lisa Pratiwi",
    date: "20 Desember 2023",
    category: "Performance",
    image: "/website-performance-optimization.png",
    readTime: "9 min",
  },
  {
    id: 6,
    title: "Cloud Computing vs On-Premise: Mana yang Lebih Baik?",
    excerpt:
      "Analisis mendalam tentang kelebihan dan kekurangan cloud computing dibandingkan dengan infrastruktur on-premise.",
    author: "Andi Wijaya",
    date: "15 Desember 2023",
    category: "Infrastructure",
    image: "/placeholder-hj7lx.png",
    readTime: "10 min",
  },
]

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-poppins)] line-clamp-2">
          {post.title}
        </h3>

        <p className="text-muted-foreground mb-4 font-[family-name:var(--font-lato)] line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>

          <Link href={`/blog/${post.id}`}>
            <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const categories = [
    "Semua",
    "Teknologi",
    "Bisnis Digital",
    "Development",
    "Security",
    "Performance",
    "Infrastructure",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-lato)]">
            Dapatkan wawasan terbaru tentang teknologi, tips pengembangan, dan tren industri dari tim ahli kami
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  category === "Semua"
                    ? "bg-primary text-white"
                    : "bg-accent text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="px-8 py-3 font-[family-name:var(--font-poppins)] font-semibold">
              Muat Artikel Lainnya
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            Berlangganan Newsletter Kami
          </h2>
          <p className="text-white/90 mb-8 font-[family-name:var(--font-lato)]">
            Dapatkan artikel terbaru dan tips teknologi langsung di inbox Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 font-[family-name:var(--font-lato)]"
            />
            <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 font-semibold font-[family-name:var(--font-poppins)]">
              Berlangganan
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
