/* eslint-disable react/no-unescaped-entities */
import { Utensils, Palette, Users, Gift, MapPin } from "lucide-react"

const boxContents = [
  {
    icon: Utensils,
    title: "1 expérience locale authentique",
    description: "Un moment unique avec un hôte local : atelier, repas, balade ou découverte culturelle.",
  },
  {
    icon: Palette,
    title: "1 immersion culturelle personnalisée",
    description: "Une activité choisie selon vos préférences et la destination sélectionnée.",
  },
  {
    icon: Users,
    title: "1 rencontre humaine avec un habitant",
    description: "Plus qu'une activité, une connexion sincère avec une personne passionnée par sa culture.",
  },
  {
    icon: MapPin,
    title: "1 mini-guide culturel",
    description: "Des conseils locaux, bonnes adresses et secrets de la destination pour enrichir votre voyage.",
  },
  {
    icon: Gift,
    title: "1 surprise locale",
    description: "Un petit cadeau artisanal typique de votre destination, en souvenir de cette expérience.",
  },
]

export function BoxGratuiteContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink/30 px-4 py-2 rounded-full mb-4">
            <Gift className="w-4 h-4 text-coral" />
            <span className="text-sm font-semibold text-foreground">Ce qui vous attend</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Que contient votre Box Immersion ?
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Une expérience authentique dans le pays de votre choix : atelier artisanal, repas chez l'habitant, balade
            culturelle… Une plongée dans la vraie vie locale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {boxContents.map((item, index) => (
            <div
              key={index}
              className="group bg-cream rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/20 transition-colors">
                <item.icon className="w-8 h-8 text-coral" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Countries showcase - Updated to match the 5 destinations */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">
            Choisissez parmi nos destinations phares
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { flag: "🇲🇦", name: "Maroc", color: "bg-orange-100" },
              { flag: "🇮🇩", name: "Bali", color: "bg-emerald-100" },
              { flag: "🇮🇹", name: "Italie", color: "bg-green-100" },
              { flag: "🇪🇸", name: "Espagne", color: "bg-red-100" },
              { flag: "🇸🇨", name: "Seychelles", color: "bg-blue-100" },
            ].map((country, i) => (
              <div
                key={i}
                className={`${country.color} px-6 py-4 rounded-2xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1`}
              >
                <span className="text-3xl">{country.flag}</span>
                <span className="font-semibold text-foreground">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
