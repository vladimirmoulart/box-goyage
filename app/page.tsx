import { BoxGratuiteHero } from "@/components/box-gratuite/box-gratuite-hero"
import { BoxGratuiteContent } from "@/components/box-gratuite/box-gratuite-content"
import { BoxGratuiteMechanic } from "@/components/box-gratuite/box-gratuite-mechanic"
import { BoxGratuiteWhy } from "@/components/box-gratuite/box-gratuite-why"
import { BoxGratuiteForm } from "@/components/box-gratuite/box-gratuite-form"
import { BoxGratuiteSocialProof } from "@/components/box-gratuite/box-gratuite-social-proof"
import { BoxGratuiteFinalCta } from "@/components/box-gratuite/box-gratuite-final-cta"
import { BoxGratuiteFooter } from "@/components/box-gratuite/box-gratuite-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-foreground">
      <BoxGratuiteHero />
      <BoxGratuiteContent />
      <BoxGratuiteMechanic />
      <BoxGratuiteWhy />
      <BoxGratuiteForm />
      <BoxGratuiteSocialProof />
      <BoxGratuiteFinalCta />
      <BoxGratuiteFooter />
    </main>
  )
}
