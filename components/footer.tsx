import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Tim", href: "#team" },
      { name: "Karir", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
    services: [
      { name: "Pengembangan Web", href: "#services" },
      { name: "Aplikasi Mobile", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "Konsultasi IT", href: "#services" },
      { name: "Maintenance", href: "#services" },
    ],
    resources: [
      { name: "Portfolio", href: "#portfolio" },
      { name: "Case Studies", href: "#" },
      { name: "Dokumentasi", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary font-bold text-lg font-[family-name:var(--font-poppins)]">CM</span>
                </div>
                <span className="text-xl font-bold font-[family-name:var(--font-poppins)]">Cipta Muda Solusi</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 font-[family-name:var(--font-lato)] leading-relaxed">
                Kami adalah partner teknologi terpercaya yang menghadirkan solusi inovatif untuk transformasi digital
                bisnis Anda. Dengan tim profesional dan teknologi terdepan, kami siap membantu mewujudkan visi digital
                perusahaan Anda.
              </p>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold mb-4 font-[family-name:var(--font-poppins)]">Subscribe Newsletter</h4>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email Anda"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 font-[family-name:var(--font-lato)]"
                  />
                  <Button variant="secondary" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold mb-6 font-[family-name:var(--font-poppins)]">Perusahaan</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors duration-200 font-[family-name:var(--font-lato)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 font-[family-name:var(--font-poppins)]">Layanan</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors duration-200 font-[family-name:var(--font-lato)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 font-[family-name:var(--font-poppins)]">Resources</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors duration-200 font-[family-name:var(--font-lato)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 font-[family-name:var(--font-poppins)]">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 font-[family-name:var(--font-lato)]">
              © 2024 Cipta Muda Solusi. All rights reserved.
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm font-[family-name:var(--font-lato)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
