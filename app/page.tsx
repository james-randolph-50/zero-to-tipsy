import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import FeaturedCocktails from "@/components/featured-cocktails"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-balance">
                Zero to Tipsy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 text-balance">
                Your guide to becoming a decent bartender
              </p>
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Explore All Recipes
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Cocktails */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center text-foreground">
              Featured Cocktails
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">I selected these at random</p>
            <FeaturedCocktails />
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </>
  )
}
