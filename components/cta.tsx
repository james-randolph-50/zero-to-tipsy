import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Ready to Mix?</h2>
        <p className="text-xl text-white/90 mb-8">Browse our complete collection of cocktail recipes</p>
        <Link
          href="/recipes"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          View All Recipes
        </Link>
      </div>
    </section>
  )
}
