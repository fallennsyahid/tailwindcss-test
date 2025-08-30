import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Target } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { number: "100+", label: "Proyek Selesai", icon: CheckCircle },
    { number: "50+", label: "Klien Puas", icon: Users },
    { number: "5+", label: "Tahun Pengalaman", icon: Award },
    { number: "24/7", label: "Support", icon: Target },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Pendirian Perusahaan",
      description: "Cipta Muda Solusi didirikan dengan visi menjadi partner teknologi terpercaya.",
    },
    {
      year: "2020",
      title: "Ekspansi Layanan",
      description: "Mengembangkan layanan ke bidang mobile development dan cloud computing.",
    },
    {
      year: "2022",
      title: "Sertifikasi Internasional",
      description: "Meraih berbagai sertifikasi teknologi dari vendor global terkemuka.",
    },
    {
      year: "2024",
      title: "Inovasi AI & ML",
      description: "Mengintegrasikan solusi AI dan Machine Learning dalam layanan kami.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Tentang Cipta Muda Solusi
          </h2>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-lato)] max-w-3xl mx-auto leading-relaxed">
            Kami adalah tim profesional yang berdedikasi untuk memberikan solusi teknologi terbaik dengan pendekatan
            yang inovatif dan personal
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-border/50 hover:border-primary/20 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2 font-[family-name:var(--font-poppins)]">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-[family-name:var(--font-lato)]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
              Perjalanan Kami
            </h3>
            <p className="text-muted-foreground font-[family-name:var(--font-lato)] leading-relaxed mb-8">
              Dari startup kecil hingga menjadi partner teknologi terpercaya, kami terus berinovasi dan berkembang untuk
              memberikan nilai terbaik bagi klien.
            </p>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-[family-name:var(--font-poppins)]">
                      {item.year.slice(-2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground font-[family-name:var(--font-lato)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-3"></div>
            <Card className="relative border-border/50">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
                  Visi & Misi
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-2 font-[family-name:var(--font-poppins)]">Visi</h5>
                    <p className="text-muted-foreground font-[family-name:var(--font-lato)]">
                      Menjadi perusahaan teknologi terdepan yang menghadirkan solusi inovatif untuk transformasi digital
                      bisnis.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2 font-[family-name:var(--font-poppins)]">Misi</h5>
                    <p className="text-muted-foreground font-[family-name:var(--font-lato)]">
                      Memberikan layanan teknologi berkualitas tinggi dengan pendekatan personal dan inovatif untuk
                      membantu klien mencapai tujuan bisnis mereka.
                    </p>
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
