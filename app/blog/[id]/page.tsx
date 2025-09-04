"use client"

import { Calendar, User, ArrowLeft, Share2, BookOpen, Clock } from "lucide-react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tren Teknologi 2024: Apa yang Perlu Diketahui Bisnis Anda",
    excerpt:
      "Pelajari tren teknologi terbaru yang akan mempengaruhi bisnis di tahun 2024, mulai dari AI hingga cloud computing.",
    content: `
      <p>Tahun 2024 membawa berbagai inovasi teknologi yang akan mengubah lanskap bisnis secara fundamental. Sebagai pemilik bisnis atau profesional IT, memahami tren-tren ini sangat penting untuk tetap kompetitif di pasar yang terus berkembang.</p>

      <h2>1. Artificial Intelligence (AI) dan Machine Learning</h2>
      <p>AI telah berkembang pesat dan kini menjadi lebih accessible untuk bisnis dari berbagai skala. Dari chatbot customer service hingga analisis prediktif, AI membantu perusahaan meningkatkan efisiensi operasional dan memberikan pengalaman pelanggan yang lebih personal.</p>

      <h2>2. Cloud Computing dan Edge Computing</h2>
      <p>Migrasi ke cloud bukan lagi pilihan, melainkan keharusan. Edge computing juga mulai mengambil peran penting dalam mengurangi latency dan meningkatkan performa aplikasi, terutama untuk IoT dan aplikasi real-time.</p>

      <h2>3. Cybersecurity yang Lebih Canggih</h2>
      <p>Dengan meningkatnya ancaman cyber, investasi dalam keamanan digital menjadi prioritas utama. Zero-trust architecture dan AI-powered security solutions menjadi standar baru dalam melindungi aset digital perusahaan.</p>

      <h2>4. Low-Code/No-Code Development</h2>
      <p>Platform low-code dan no-code memungkinkan bisnis untuk mengembangkan aplikasi dengan lebih cepat dan efisien, mengurangi ketergantungan pada developer tradisional dan mempercepat time-to-market.</p>

      <h2>Kesimpulan</h2>
      <p>Mengadopsi teknologi-teknologi ini bukan hanya tentang mengikuti tren, tetapi tentang mempersiapkan bisnis untuk masa depan yang lebih digital dan kompetitif. Mulailah dengan mengidentifikasi area mana dalam bisnis Anda yang dapat dioptimalkan dengan teknologi-teknologi ini.</p>
    `,
    author: "Tim Cipta Muda",
    date: "15 Januari 2024",
    category: "Teknologi",
    image: "/modern-tech-trends-2024.png",
    readTime: "5 min",
    tags: ["AI", "Cloud Computing", "Cybersecurity", "Low-Code"],
  },
  {
    id: 2,
    title: "Mengapa Transformasi Digital Penting untuk UKM",
    excerpt:
      "Transformasi digital bukan hanya untuk perusahaan besar. Pelajari bagaimana UKM dapat memanfaatkan teknologi untuk berkembang.",
    content: `
      <p>Transformasi digital telah menjadi kebutuhan mendesak bagi semua jenis bisnis, termasuk Usaha Kecil dan Menengah (UKM). Pandemi COVID-19 telah mempercepat adopsi teknologi digital, dan UKM yang tidak beradaptasi berisiko tertinggal dari kompetitor.</p>

      <h2>Apa itu Transformasi Digital?</h2>
      <p>Transformasi digital adalah proses mengintegrasikan teknologi digital ke dalam semua aspek bisnis, mengubah cara perusahaan beroperasi dan memberikan nilai kepada pelanggan. Ini bukan hanya tentang menggunakan teknologi, tetapi mengubah mindset dan budaya perusahaan.</p>

      <h2>Manfaat untuk UKM</h2>
      <h3>1. Efisiensi Operasional</h3>
      <p>Otomatisasi proses bisnis dapat menghemat waktu dan mengurangi kesalahan manual. Sistem manajemen inventori digital, misalnya, dapat membantu UKM melacak stok dengan lebih akurat.</p>

      <h3>2. Jangkauan Pasar yang Lebih Luas</h3>
      <p>Platform e-commerce dan media sosial memungkinkan UKM menjangkau pelanggan di luar area geografis mereka, membuka peluang pasar yang lebih besar.</p>

      <h3>3. Pengambilan Keputusan Berbasis Data</h3>
      <p>Tools analitik membantu UKM memahami perilaku pelanggan dan tren pasar, memungkinkan pengambilan keputusan yang lebih informed.</p>

      <h2>Langkah-langkah Memulai</h2>
      <p>Mulailah dengan mengidentifikasi proses bisnis yang paling membutuhkan digitalisasi. Investasi tidak harus besar - mulai dari tools sederhana seperti sistem POS digital atau platform media sosial untuk marketing.</p>
    `,
    author: "Ahmad Rizki",
    date: "10 Januari 2024",
    category: "Bisnis Digital",
    image: "/digital-transformation-small-business.png",
    readTime: "7 min",
    tags: ["UKM", "Digital Transformation", "E-commerce", "Automation"],
  },
  {
    id: 3,
    title: "Panduan Memilih Framework Web Development yang Tepat",
    excerpt: "React, Vue, atau Angular? Panduan lengkap memilih framework yang sesuai dengan kebutuhan proyek Anda.",
    content: `
      <p>Memilih framework web development yang tepat adalah keputusan penting yang akan mempengaruhi seluruh siklus pengembangan proyek Anda. Dengan banyaknya pilihan yang tersedia, penting untuk memahami kelebihan dan kekurangan masing-masing framework.</p>

      <h2>React: Fleksibilitas dan Ekosistem yang Kuat</h2>
      <p>React, dikembangkan oleh Facebook, menawarkan fleksibilitas tinggi dan ekosistem yang sangat kaya. Dengan konsep component-based dan virtual DOM, React memungkinkan pengembangan aplikasi yang scalable dan performant.</p>

      <h3>Kelebihan React:</h3>
      <ul>
        <li>Learning curve yang relatif mudah</li>
        <li>Komunitas yang besar dan aktif</li>
        <li>Fleksibilitas dalam arsitektur aplikasi</li>
        <li>Dukungan yang kuat dari Facebook</li>
      </ul>

      <h2>Vue.js: Kesederhanaan dan Kemudahan Pembelajaran</h2>
      <p>Vue.js menawarkan pendekatan yang lebih gentle untuk pengembangan web modern. Dengan sintaks yang intuitif dan dokumentasi yang excellent, Vue cocok untuk developer yang baru memulai dengan framework modern.</p>

      <h3>Kelebihan Vue:</h3>
      <ul>
        <li>Sintaks yang mudah dipahami</li>
        <li>Dokumentasi yang sangat baik</li>
        <li>Performa yang optimal</li>
        <li>Integrasi yang mudah dengan proyek existing</li>
      </ul>

      <h2>Angular: Enterprise-Ready dan Feature-Rich</h2>
      <p>Angular, dikembangkan oleh Google, adalah framework full-featured yang cocok untuk aplikasi enterprise berskala besar. Dengan TypeScript sebagai bahasa utama dan arsitektur yang opinionated, Angular menyediakan struktur yang solid untuk proyek kompleks.</p>

      <h2>Cara Memilih Framework yang Tepat</h2>
      <p>Pertimbangkan faktor-faktor berikut: kompleksitas proyek, timeline pengembangan, keahlian tim, dan kebutuhan maintenance jangka panjang. Tidak ada framework yang "terbaik" - hanya ada framework yang paling sesuai dengan kebutuhan spesifik proyek Anda.</p>
    `,
    author: "Sarah Dewi",
    date: "5 Januari 2024",
    category: "Development",
    image: "/blog-covers/blog-demo-4.png",
    readTime: "8 min",
    tags: ["React", "Vue.js", "Angular", "Web Development"],
  },
  {
    id: 4,
    title: "Keamanan Aplikasi Web: Best Practices untuk Developer",
    excerpt: "Tips dan strategi penting untuk memastikan aplikasi web Anda aman dari berbagai ancaman cyber.",
    content: `
      <p>Keamanan aplikasi web adalah aspek kritis yang tidak boleh diabaikan dalam pengembangan software. Dengan meningkatnya ancaman cyber, developer harus memahami dan menerapkan best practices keamanan sejak tahap awal pengembangan.</p>

      <h2>Prinsip Dasar Keamanan Web</h2>
      <h3>1. Input Validation</h3>
      <p>Selalu validasi dan sanitasi semua input dari user. Jangan pernah mempercayai data yang datang dari client-side. Implementasikan validasi baik di frontend maupun backend.</p>

      <h3>2. Authentication dan Authorization</h3>
      <p>Implementasikan sistem autentikasi yang robust dengan multi-factor authentication jika memungkinkan. Pastikan authorization dilakukan dengan benar untuk setiap resource yang diakses.</p>

      <h2>Ancaman Umum dan Cara Mengatasinya</h2>
      <h3>SQL Injection</h3>
      <p>Gunakan prepared statements atau parameterized queries. Hindari concatenation string untuk membuat query SQL.</p>

      <h3>Cross-Site Scripting (XSS)</h3>
      <p>Escape semua output yang ditampilkan ke user. Gunakan Content Security Policy (CSP) untuk mengurangi risiko XSS.</p>

      <h3>Cross-Site Request Forgery (CSRF)</h3>
      <p>Implementasikan CSRF tokens untuk semua form dan state-changing operations.</p>

      <h2>Tools dan Framework Keamanan</h2>
      <p>Manfaatkan tools seperti OWASP ZAP untuk security testing, dan framework keamanan yang sudah teruji seperti Spring Security untuk Java atau Helmet.js untuk Node.js.</p>

      <h2>Security by Design</h2>
      <p>Integrasikan keamanan sejak tahap design dan planning. Lakukan regular security audit dan penetration testing untuk memastikan aplikasi tetap aman seiring dengan perkembangan ancaman.</p>
    `,
    author: "Budi Santoso",
    date: "28 Desember 2023",
    category: "Security",
    image: "/web-app-security.png",
    readTime: "6 min",
    tags: ["Security", "Web Development", "OWASP", "Cybersecurity"],
  },
  {
    id: 5,
    title: "Optimasi Performa Website: Teknik dan Tools Terbaik",
    excerpt: "Pelajari cara meningkatkan kecepatan loading website Anda dengan berbagai teknik optimasi yang efektif.",
    content: `
      <p>Performa website yang optimal bukan hanya meningkatkan user experience, tetapi juga berpengaruh signifikan terhadap SEO ranking dan conversion rate. Setiap detik delay dalam loading time dapat mengurangi engagement dan revenue.</p>

      <h2>Mengukur Performa Website</h2>
      <p>Sebelum melakukan optimasi, penting untuk mengukur performa current website menggunakan tools seperti Google PageSpeed Insights, GTmetrix, atau WebPageTest. Fokus pada Core Web Vitals: LCP, FID, dan CLS.</p>

      <h2>Teknik Optimasi Frontend</h2>
      <h3>1. Image Optimization</h3>
      <p>Kompres gambar tanpa mengurangi kualitas visual. Gunakan format modern seperti WebP atau AVIF. Implementasikan lazy loading untuk gambar yang tidak immediately visible.</p>

      <h3>2. Minifikasi dan Kompresi</h3>
      <p>Minify CSS, JavaScript, dan HTML. Enable Gzip atau Brotli compression di server. Bundle dan tree-shake JavaScript untuk mengurangi ukuran file.</p>

      <h3>3. Critical CSS</h3>
      <p>Inline critical CSS untuk above-the-fold content dan defer non-critical CSS untuk mengurangi render-blocking resources.</p>

      <h2>Optimasi Backend dan Server</h2>
      <h3>1. Caching Strategy</h3>
      <p>Implementasikan multi-layer caching: browser cache, CDN, server-side cache, dan database cache. Gunakan appropriate cache headers dan ETags.</p>

      <h3>2. Database Optimization</h3>
      <p>Optimize database queries, gunakan indexing yang tepat, dan implementasikan connection pooling untuk mengurangi database load.</p>

      <h2>Content Delivery Network (CDN)</h2>
      <p>Gunakan CDN untuk mendistribusikan static assets ke server yang lebih dekat dengan user. Ini significantly mengurangi latency dan meningkatkan loading speed.</p>

      <h2>Monitoring dan Continuous Improvement</h2>
      <p>Setup monitoring tools untuk track performa secara real-time. Lakukan regular performance audit dan optimization sebagai bagian dari development workflow.</p>
    `,
    author: "Lisa Pratiwi",
    date: "20 Desember 2023",
    category: "Performance",
    image: "/website-performance-optimization.png",
    readTime: "9 min",
    tags: ["Performance", "Optimization", "CDN", "Caching"],
  },
  {
    id: 6,
    title: "Cloud Computing vs On-Premise: Mana yang Lebih Baik?",
    excerpt:
      "Analisis mendalam tentang kelebihan dan kekurangan cloud computing dibandingkan dengan infrastruktur on-premise.",
    content: `
      <p>Keputusan antara cloud computing dan on-premise infrastructure adalah salah satu keputusan strategis paling penting dalam IT planning. Kedua pendekatan memiliki kelebihan dan kekurangan yang perlu dipertimbangkan secara matang.</p>

      <h2>Cloud Computing: Fleksibilitas dan Skalabilitas</h2>
      <h3>Kelebihan Cloud:</h3>
      <ul>
        <li><strong>Scalability:</strong> Mudah scale up/down sesuai kebutuhan</li>
        <li><strong>Cost Efficiency:</strong> Pay-as-you-use model mengurangi CAPEX</li>
        <li><strong>Maintenance:</strong> Provider menangani maintenance dan updates</li>
        <li><strong>Accessibility:</strong> Akses dari mana saja dengan internet connection</li>
        <li><strong>Disaster Recovery:</strong> Built-in backup dan disaster recovery</li>
      </ul>

      <h3>Kekurangan Cloud:</h3>
      <ul>
        <li>Ketergantungan pada internet connection</li>
        <li>Ongoing operational costs</li>
        <li>Potensi vendor lock-in</li>
        <li>Compliance dan regulatory challenges</li>
      </ul>

      <h2>On-Premise: Kontrol dan Keamanan</h2>
      <h3>Kelebihan On-Premise:</h3>
      <ul>
        <li><strong>Full Control:</strong> Kontrol penuh atas infrastructure dan data</li>
        <li><strong>Security:</strong> Data tetap dalam premises perusahaan</li>
        <li><strong>Compliance:</strong> Lebih mudah memenuhi regulatory requirements</li>
        <li><strong>Performance:</strong> Tidak ada latency dari internet connection</li>
      </ul>

      <h3>Kekurangan On-Premise:</h3>
      <ul>
        <li>High upfront investment (CAPEX)</li>
        <li>Maintenance dan upgrade responsibility</li>
        <li>Limited scalability</li>
        <li>Disaster recovery complexity</li>
      </ul>

      <h2>Hybrid Approach: Best of Both Worlds</h2>
      <p>Banyak perusahaan memilih hybrid approach yang mengombinasikan cloud dan on-premise infrastructure. Critical data dan applications tetap on-premise, sementara non-critical workloads di-migrate ke cloud.</p>

      <h2>Faktor-Faktor Keputusan</h2>
      <p>Pertimbangkan: budget, compliance requirements, technical expertise, business continuity needs, dan growth projections. Tidak ada solusi one-size-fits-all - pilihan terbaik tergantung pada specific business requirements dan constraints.</p>
    `,
    author: "Andi Wijaya",
    date: "15 Desember 2023",
    category: "Infrastructure",
    image: "/placeholder-hj7lx.png",
    readTime: "10 min",
    tags: ["Cloud Computing", "On-Premise", "Infrastructure", "Hybrid Cloud"],
  },
]

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== postId && p.category === post.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Blog
          </Link>

          <div className="mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)] text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} baca</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Bagikan
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <BookOpen className="w-4 h-4" />
              Bookmark
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mb-16">
        <div className="max-w-4xl mx-auto px-8">
          <div
            className="prose prose-lg max-w-none font-[family-name:var(--font-lato)] prose-headings:font-[family-name:var(--font-poppins)] prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-poppins)]">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-accent/30">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-poppins)]">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <article className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-sm">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mt-3 mb-2 font-[family-name:var(--font-poppins)] line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-[family-name:var(--font-lato)] line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            Butuh Solusi Teknologi untuk Bisnis Anda?
          </h2>
          <p className="text-white/90 mb-8 font-[family-name:var(--font-lato)]">
            Tim ahli kami siap membantu mengimplementasikan solusi teknologi terbaik untuk kebutuhan bisnis Anda
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold font-[family-name:var(--font-poppins)]">
            Konsultasi Gratis
          </Button>
        </div>
      </section>
    </div>
  )
}
