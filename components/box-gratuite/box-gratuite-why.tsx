/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { Heart, Globe, Users, Leaf, X, CheckCircle } from "lucide-react"

const reasons = [
  {
    icon: Heart,
    title: "Plus authentique",
    description: "Des expériences vraies, loin des circuits touristiques classiques.",
  },
  {
    icon: Globe,
    title: "Plus responsable",
    description: "Un tourisme qui respecte les cultures et l'environnement local.",
  },
  {
    icon: Users,
    title: "Plus humaine",
    description: "Des rencontres sincères avec des habitants passionnés.",
  },
  {
    icon: Leaf,
    title: "Plus locale",
    description: "Chaque expérience finance directement un hôte et sa famille.",
  },
]

export function BoxGratuiteWhy() {
  return (
    <section id="mission-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-green font-semibold text-sm uppercase tracking-wider">Notre mission</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Pourquoi offrons-nous cette immersion ?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              GOYAGE est en train de rassembler la première communauté de voyageurs engagés. Nous souhaitons faire
              découvrir notre vision du voyage :
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green/20 rounded-xl flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg text-foreground/80 font-medium">
              Cette Box gratuite est notre façon de vous inviter à rejoindre le mouvement.
            </p>
          </div>

          {/* Right - Bullets showcase */}
          <div className="bg-cream rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">En toute transparence</h3>

            <div className="space-y-4">
              {/* Negative points */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-coral" />
                </div>
                <span className="text-foreground font-medium">Pas d'engagement</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-coral" />
                </div>
                <span className="text-foreground font-medium">Aucune carte bancaire</span>
              </div>

              {/* Positive points */}
              <div className="flex items-center gap-4 p-4 bg-green/10 rounded-xl">
                <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green" />
                </div>
                <span className="text-foreground font-medium">Un lancement exclusif</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-green/10 rounded-xl">
                <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green" />
                </div>
                <span className="text-foreground font-medium">Une expérience authentique offerte</span>
              </div>
            </div>

            {/* Image collage */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Image
                src="/local-host-welcoming-travelers-warm-smile.jpg"
                alt="Hôte local accueillant"
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded-xl"
              />
              <Image
                src="/travelers-local-family-dinner-table.jpg"
                alt="Repas en famille"
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
