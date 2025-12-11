/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie L.",
    location: "Paris, France",
    image: "/young-woman-smiling-casual-portrait.jpg",
    text: "Enfin une plateforme qui remet l'humain au centre.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    location: "Lyon, France",
    image: "/travelers-meeting-local-people-smiling.jpg",
    text: "J'ai vécu une immersion incroyable lors de ma première expérience.",
    rating: 5,
  },
  {
    name: "Sophie D.",
    location: "Bordeaux, France",
    image: "/host-lucia-italian-grandmother.jpg",
    text: "GOYAGE m'a permis de rencontrer des artisans locaux incroyables.",
    rating: 5,
  },
]

export function BoxGratuiteSocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green font-semibold text-sm uppercase tracking-wider">Communauté</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Ils veulent voyager autrement</h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream rounded-2xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-pink/60" />

              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-pink/30"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed italic text-lg">"{testimonial.text}"</p>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/moroccan-man-artisan-smiling-portrait.jpg"
                  alt="Profil 1"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
                />
                <Image
                  src="/middle-aged-woman-happy-portrait.jpg"
                  alt="Profil 2"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white -ml-4"
                />
                <Image
                  src="/hiking-cinque-terre-italy-coastal-view-picnic-natu.jpg"
                  alt="Profil 3"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white -ml-4"
                />
                <span className="text-sm text-foreground/60">+120 avis</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visuals */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src="/local-artisan-teaching-pottery-to-travelers-morocco.jpg"
            alt="Artisan au travail"
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-2xl"
          />
          <Image
            src="/family-sharing-traditional-meal-outdoor-terrace-italy.jpg"
            alt="Repas partagé"
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-2xl"
          />
          <Image
            src="/local-fisherman-boat-trip-bali-authentic-experience.jpg"
            alt="Expérience locale"
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-2xl"
          />
          <Image
            src="/grandmother-cooking-traditional-recipe-spain-travelers.jpg"
            alt="Cuisine traditionnelle"
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
