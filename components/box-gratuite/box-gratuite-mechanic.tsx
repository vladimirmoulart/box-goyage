"use client"

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { Smartphone } from "lucide-react"

const steps = [
  {
    step: "1",
    emoji: "📝",
    title: "Je renseigne mon email et ma destination",
    description: "Je remplis le formulaire avec mon email et le pays qui me inspire le plus.",
    orderClass: "lg:order-1",
  },
  {
    step: "2",
    emoji: "📲",
    title: "Je télécharge l'app GOYAGE",
    description: "Je crée mon compte dans l'application pour suivre ma participation.",
    bonus: true,
    badgeLabel: "BONUS",
    orderClass: "lg:order-2",
  },
  {
    step: "3",
    emoji: "✨",
    title: "J'ai 2x plus de chances de gagner",
    description: "En utilisant l'app, mon nom est compté deux fois lors du tirage.",
    bonus: true,
    badgeLabel: "BONUS x2",
    orderClass: "lg:order-3",
  },
  {
    step: "4",
    emoji: "🌍",
    title: "J'ai une chance de remporter la Box",
    description: "Chaque mois, un participant est tiré au sort pour recevoir la Box Immersion.",
    orderClass: "lg:order-4",
  },
]

export function BoxGratuiteMechanic() {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green/20 px-4 py-2 rounded-full mb-4">
            <Smartphone className="w-4 h-4 text-green" />
            <span className="text-sm font-semibold text-foreground">
              Téléchargez l'application GOYAGE et doublez vos chances
            </span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Comment participer ?
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Après votre inscription, téléchargez l'application GOYAGE et créez votre compte pour obtenir une chance
            supplémentaire au tirage au sort.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all h-full ${step.bonus ? "ring-2 ring-green" : ""} ${step.orderClass ?? ""}`}
              >
                {step.bonus && step.badgeLabel && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green text-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {step.badgeLabel}
                  </div>
                )}

                <div className="text-4xl mb-4 text-center">{step.emoji}</div>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <span
                    className={`text-sm font-bold ${index === 3 ? "text-green" : "text-coral"} bg-cream px-2 py-1 rounded`}
                  >
                    Étape {step.step}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-2 text-center">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed text-center">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex justify-end">
            <Image
              src="/mockup.png"
              alt="Aperçu de l'application GOYAGE"
              width={360}
              height={720}
              className="w-64 md:w-72 lg:w-80 translate-x-4 lg:translate-x-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
