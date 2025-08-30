"use client"

import { motion } from "framer-motion"

const partners = [
  {
    name: "Microsoft",
    logo: "/microsoft-logo.png",
  },
  {
    name: "Google",
    logo: "/google-logo.png",
  },
  {
    name: "Amazon",
    logo: "/amazon-logo.png",
  },
  {
    name: "IBM",
    logo: "/ibm-logo.png",
  },
  {
    name: "Oracle",
    logo: "/oracle-logo.png",
  },
  {
    name: "Salesforce",
    logo: "/salesforce-logo.png",
  },
]

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-200 rotate-45 opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Partner Terpercaya</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            Kami bangga bekerja sama dengan perusahaan-perusahaan terkemuka untuk memberikan solusi terbaik
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 font-body">
            Ingin menjadi partner kami?
            <a href="#contact" className="text-primary hover:text-primary-dark ml-2 font-semibold transition-colors">
              Hubungi kami sekarang
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
