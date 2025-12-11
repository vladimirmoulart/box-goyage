"use client"

/* eslint-disable react/no-unescaped-entities */
import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { Gift, Mail, Globe, ShoppingBag, CheckCircle, Loader2, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const countries = [
  { value: "maroc", label: "Maroc", flag: "🇲🇦" },
  { value: "bali", label: "Bali (Indonésie)", flag: "🇮🇩" },
  { value: "italie", label: "Italie", flag: "🇮🇹" },
  { value: "espagne", label: "Espagne", flag: "🇪🇸" },
  { value: "seychelles", label: "Seychelles", flag: "🇸🇨" },
  { value: "autre", label: "Autre", flag: "🌍" },
]

const purchaseIntents = [
  { value: "yes-sure", label: "Oui sans hésiter" },
  { value: "yes-price", label: "Oui si le prix est raisonnable" },
  { value: "maybe", label: "Peut-être" },
  { value: "no", label: "Non pour le moment" },
]

export function BoxGratuiteForm() {
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [intent, setIntent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="form-section" className="py-20 bg-gradient-to-b from-cream to-pink/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Félicitations ! Vous êtes inscrit</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Vous participez maintenant au tirage au sort pour gagner votre Box Immersion GOYAGE.
            </p>

            <div className="bg-green/10 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <Gift className="w-5 h-5 text-green" />
                Doublez vos chances maintenant !
              </h3>
              <p className="text-foreground/70 text-sm mb-4">
                Téléchargez l'application GOYAGE et créez votre compte pour obtenir une chance supplémentaire.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-foreground hover:bg-foreground/90 text-white rounded-full px-6">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </Button>
                <Button className="bg-foreground hover:bg-foreground/90 text-white rounded-full px-6">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 6.54l8.16 8.17-8.16 8.17c-.82-.43-1.18-1.36-1.18-2.36V8.9c0-1 .36-1.93 1.18-2.36zM12.39 15.77l2.76 2.76-9.19 5.2c-.44.24-.91.35-1.37.33l7.8-8.29zm-1.06-1.06l8.53-9.06c.78.78.78 2.05 0 2.83l-6.68 7.08-1.85-1.85zM20 11.09c.73.73.73 1.91 0 2.64l-3.32 3.33-2.85-2.86 6.17-6.55v3.44z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>

            <p className="text-sm text-foreground/60">
              Résultat du tirage au sort annoncé le 15 de chaque mois par email.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form-section" className="py-20 bg-gradient-to-b from-cream to-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <div>
            <div className="inline-flex items-center gap-2 bg-pink/30 px-4 py-2 rounded-full mb-4">
              <Gift className="w-4 h-4 text-coral" />
              <span className="text-sm font-semibold text-foreground">Participez maintenant</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Participez au tirage et recevez votre Box Immersion
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Remplissez ce court formulaire pour participer au tirage au sort mensuel.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-pink/50 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Pays préféré</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <select
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-pink/50 text-foreground outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Choisissez une destination</option>
                    {countries.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.flag} {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Purchase Intent */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Intention d'achat future</label>
                <div className="relative">
                  <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <select
                    required
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-pink/50 text-foreground outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Sélectionnez une réponse</option>
                    {purchaseIntents.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 text-lg font-semibold shadow-xl shadow-coral/30 transition-all hover:scale-[1.02] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  <>
                    <Gift className="w-5 h-5 mr-2" />
                    Je valide ma participation
                  </>
                )}
              </Button>

              <p className="text-sm text-foreground/60 text-center flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Vos données sont sécurisées — aucune carte bancaire requise.
              </p>
            </form>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-cream">
                <div className="w-16 h-16 bg-pink/50 rounded-2xl flex items-center justify-center">
                  <Gift className="w-8 h-8 text-coral" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">Box Immersion GOYAGE</h3>
                  <p className="text-foreground/60">Valeur: 150€ - 300€</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <span className="text-foreground">1 expérience locale authentique</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <span className="text-foreground">1 immersion culturelle personnalisée</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <span className="text-foreground">1 rencontre humaine avec un habitant</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <span className="text-foreground">1 mini-guide culturel</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <span className="text-foreground">1 surprise locale</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green/10 rounded-xl">
                <p className="text-sm text-foreground/70 text-center">
                  <span className="font-bold text-green">1 seul gagnant</span> tiré au sort chaque mois
                </p>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-20 -left-6 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/traveler-sarah-testimonial-portrait.jpg"
                  alt="Sarah"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-foreground">Sarah M.</p>
                  <p className="text-xs text-foreground/60">Gagnante Février</p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 italic">"Une expérience incroyable au Maroc ! Merci GOYAGE !"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
