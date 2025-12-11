"use client"

/* eslint-disable react/no-unescaped-entities */

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Gift, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BoxGratuiteHero() {
  const scrollToMission = () => {
    document.getElementById("mission-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Simple header */}
      <header className="absolute top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo GOYAGE.png" alt="GOYAGE" width={220} height={80} priority className="h-16 w-auto" />
          </Link>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <Gift className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-foreground">Offre limitée</span>
          </div>
        </div>
      </header>

      {/* Hero content with background images */}
      <div className="flex-1 relative pt-24 pb-12 flex items-center overflow-hidden">
        {/* Background image collage */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-48 rounded-2xl overflow-hidden rotate-[-6deg]">
            <Image
              src="/family-sharing-traditional-meal-outdoor-terrace-italy.jpg"
              alt="Repas partagé"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-20 right-20 w-56 h-40 rounded-2xl overflow-hidden rotate-[4deg]">
            <Image
              src="/local-artisan-teaching-pottery-to-travelers-morocco.jpg"
              alt="Artisan au travail"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-20 left-1/4 w-48 h-36 rounded-2xl overflow-hidden rotate-[8deg]">
            <Image
              src="/grandmother-cooking-traditional-recipe-spain-travelers.jpg"
              alt="Sourires voyageurs et locaux"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Soft gradient overlay - beige rosé ambiance */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-pink/20 to-cream" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Voyagez autrement.{" "}
            <span className="text-coral relative inline-block">
              Reconnectez-vous à l'humain.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10C75 2 225 2 298 10" stroke="#A4CC59" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto text-pretty leading-relaxed">
            Le tourisme de masse déshumanise les destinations. <strong className="text-foreground">GOYAGE</strong>{" "}
            redonne du sens au voyage en vous connectant directement à ceux qui le vivent :{" "}
            <strong className="text-foreground">les habitants</strong>.
          </p>

          <p className="mt-6 text-xl md:text-2xl font-semibold text-coral">
            Vivez une expérience authentique, réelle, humaine.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl shadow-coral/30 transition-all hover:scale-105"
            >
              Participer
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToMission}
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-10 py-7 text-lg font-medium bg-transparent"
            >
              En savoir plus
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6 justify-center text-foreground/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Aucune carte bancaire</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 sm:right-12 lg:right-24 flex flex-col items-center">
        <div className="rounded-2xl mb-3">
          <model-viewer
            src="/gift-box-v2.glb"
            alt="Box Immersion GOYAGE"
            autoplay
            auto-rotate
            rotation-per-second="30deg"
            exposure="0.9"
            interaction-prompt="none"
            style={{ width: "200px", height: "200px", background: "transparent" }}
          />
        </div>
        <div className="bg-coral text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg text-center leading-tight">
          <span className="block">Tentez de gagner</span>
          <span className="block">une Box Immersion</span>
          <span className="block">dans le pays de votre choix</span>
        </div>
        <div className="flex flex-col items-center mt-2" style={{ color: "#fb676f" }}>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">Descendez pour participer</span>
          <ChevronDown className="w-4 h-4 mt-1 animate-bounce" style={{ color: "#fb676f" }} />
        </div>
      </div>

      <Script src="https://unpkg.com/@google/model-viewer@3.1.1/dist/model-viewer.min.js" type="module" strategy="lazyOnload" />
    </section>
  )
}
