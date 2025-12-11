import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function BoxGratuiteFooter() {
  return (
    <footer className="py-12 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image src="/logo GOYAGE.png" alt="GOYAGE" width={160} height={50} className="h-12 w-auto" />
            </Link>
            <span className="text-white/40">|</span>
            <p className="text-white/60 text-sm">Voyagez autrement, vivez vraiment</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-coral transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-coral transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-coral transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 GOYAGE. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/confidentialite" className="hover:text-coral transition-colors">
              Confidentialité
            </Link>
            <Link href="/conditions" className="hover:text-coral transition-colors">
              Conditions
            </Link>
            <Link href="/reglement-jeu" className="hover:text-coral transition-colors">
              Règlement du jeu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
