import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Globe, BarChart3, Shield, Zap } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Pengembangan Software",
      description:
        "Solusi software custom yang disesuaikan dengan kebutuhan bisnis Anda menggunakan teknologi terdepan.",
    },
    {
      icon: Smartphone,
      title: "Aplikasi Mobile",
      description: "Aplikasi mobile native dan cross-platform yang user-friendly dan performa tinggi.",
    },
    {
      icon: Globe,
      title: "Pengembangan Web",
      description: "Website modern, responsif, dan SEO-friendly yang meningkatkan presence online Anda.",
    },
    {
      icon: BarChart3,
      title: "Analisis Data",
      description: "Transformasi data menjadi insight bisnis yang actionable untuk pengambilan keputusan yang tepat.",
    },
    {
      icon: Shield,
      title: "Keamanan Sistem",
      description: "Implementasi sistem keamanan yang robust untuk melindungi aset digital perusahaan Anda.",
    },
    {
      icon: Zap,
      title: "Otomasi Proses",
      description: "Otomasi workflow bisnis untuk meningkatkan efisiensi dan mengurangi human error.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Layanan Unggulan Kami
          </h2>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-lato)] max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan teknologi yang komprehensif untuk mendukung transformasi digital bisnis
            Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-[family-name:var(--font-lato)] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
