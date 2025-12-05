import Link from "next/link"
import { getRecipes } from "@/lib/recipes"
import RecipeCard from "@/components/recipe-card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default async function RecipesPage() {

  const recipes = await getRecipes()
  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-balance">All Cocktail Recipes</h1>
            <p className="text-xl text-blue-100">{recipes.length} signature cocktails to explore</p>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                  <RecipeCard recipe={recipe} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
