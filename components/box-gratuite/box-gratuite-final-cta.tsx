"use client"

/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import { Gift, Smartphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BoxGratuiteFinalCta() {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-coral to-coral/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
          <Gift className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white">Offre limitée</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
          Recevez votre Box Immersion — Gratuitement
        </h2>

        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Smartphone className="w-5 h-5" />
          Téléchargez l'application et doublez vos chances
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl shadow-black/30 transition-all hover:scale-105"
          >
            <Gift className="w-5 h-5 mr-2" />
            Je participe maintenant
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* App badges */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white/15 border border-white/30 rounded-2xl px-6 py-3 text-white hover:bg-white/25 transition"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left leading-tight">
              <p className="text-[10px] uppercase tracking-[0.3em]">Disponible sur</p>
              <p className="text-base font-semibold">App Store</p>
            </div>
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white/15 border border-white/30 rounded-2xl px-6 py-3 text-white hover:bg-white/25 transition"
          >
            <Image src="/play-store.webp" alt="Google Play" width={40} height={40} className="w-10 h-10 object-contain" />
            <div className="text-left leading-tight">
              <p className="text-[10px] uppercase tracking-[0.3em]">Disponible sur</p>
              <p className="text-base font-semibold">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
