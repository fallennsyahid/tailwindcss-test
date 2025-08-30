"use client"

import type React from "react"

import { useState } from "react"
import { X, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [question, setQuestion] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Question submitted:", question)
    setQuestion("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Ada Pertanyaan?
            </h2>
            <p className="text-muted-foreground font-[family-name:var(--font-lato)]">Tanyakan apa saja kepada kami</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground font-[family-name:var(--font-poppins)]">
              Pertanyaan Anda
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={5}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none font-[family-name:var(--font-lato)] text-base"
                placeholder="Tulis pertanyaan Anda di sini... Kami akan segera merespons!"
                required
              />
            </div>
            <p className="text-xs text-muted-foreground font-[family-name:var(--font-lato)]">
              Tim kami akan merespons pertanyaan Anda dalam 24 jam
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 font-[family-name:var(--font-poppins)] bg-transparent hover:bg-gray-50"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={!question.trim()}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-[family-name:var(--font-poppins)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4 mr-2" />
              Kirim Pertanyaan
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
