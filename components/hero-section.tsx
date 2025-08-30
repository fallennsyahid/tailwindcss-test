import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary geometric-bg"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rotate-45 floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)] leading-tight">
              Solusi Inovatif untuk{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Bisnis Modern
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 font-[family-name:var(--font-lato)] leading-relaxed max-w-2xl">
              Kami menghadirkan teknologi terdepan dan strategi bisnis yang tepat untuk mengembangkan perusahaan Anda ke
              level selanjutnya dengan pendekatan yang fresh dan inovatif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-[family-name:var(--font-poppins)] font-semibold text-lg px-8 py-4"
              >
                Mulai Konsultasi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-[family-name:var(--font-poppins)] font-semibold text-lg px-8 py-4 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="h-4 bg-white/30 rounded-full w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded-full w-1/2"></div>
                  <div className="h-4 bg-white/25 rounded-full w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-white/15 rounded-xl"></div>
                    <div className="h-20 bg-white/15 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
