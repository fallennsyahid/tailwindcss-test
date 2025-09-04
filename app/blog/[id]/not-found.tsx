import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto px-8 text-center">
        <FileX className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
          Artikel Tidak Ditemukan
        </h1>
        <p className="text-muted-foreground mb-8 font-[family-name:var(--font-lato)]">
          Maaf, artikel yang Anda cari tidak dapat ditemukan. Mungkin artikel telah dipindahkan atau dihapus.
        </p>
        <Link href="/blog">
          <Button className="inline-flex items-center gap-2 font-[family-name:var(--font-poppins)]">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Button>
        </Link>
      </div>
    </div>
  )
}
