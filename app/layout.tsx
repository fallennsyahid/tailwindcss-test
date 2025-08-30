import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lato } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cipta Muda Solusi - Solusi Inovatif untuk Bisnis Modern",
  description:
    "Perusahaan teknologi yang menyediakan solusi inovatif dan profesional untuk mengembangkan bisnis Anda ke level selanjutnya.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
