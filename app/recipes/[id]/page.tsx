import { recipes } from "@/lib/recipes"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import IngredientsSection from "@/components/ingredients-section"

interface RecipePageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }))
}

export async function generateMetadata({ params }: RecipePageProps) {
  const resolvedParams = await params
  const recipe = recipes.find((r) => r.id === resolvedParams.id)
  return {
    title: recipe ? `${recipe.name} - Craft Cocktails` : "Recipe Not Found",
    description: recipe?.description,
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const resolvedParams = await params
  const recipe = recipes.find((r) => r.id === resolvedParams.id)

  if (!recipe) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Back Button */}
        <div className="bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
            >
              <ChevronLeft size={20} />
              Back to Recipes
            </Link>
          </div>
        </div>

        {/* Recipe Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title above image and video */}
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-balance">{recipe.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Image and Video */}
              <div className="space-y-6">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.name}
                  className="w-full rounded-xl shadow-lg object-cover aspect-square"
                />

                {/* Video Section */}
                {recipe.videoUrl && (
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-video bg-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        src={recipe.videoUrl}
                        title={`${recipe.name} Tutorial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {/* Ingredients */}
                <div>
                  <IngredientsSection ingredients={recipe.ingredients} />
                </div>

                {/* Instructions */}
                <div>
                  <h2 className="text-3xl font-display font-bold mb-6">Instructions</h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-gray-700 pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Tips */}
            {recipe.tips && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-12">
                <h3 className="font-display font-bold text-lg mb-3">💡 Pro Tips</h3>
                <ul className="space-y-2">
                  {recipe.tips.map((tip, idx) => (
                    <li key={idx} className="text-gray-700 flex gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Recipes */}
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-3xl font-display font-bold mb-8">More Recipes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recipes
                  .filter((r) => r.id !== recipe.id)
                  .slice(0, 3)
                  .map((related) => (
                    <Link key={related.id} href={`/recipes/${related.id}`}>
                      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full">
                        <div className="h-40 bg-gradient-to-br from-orange-300 to-yellow-400 overflow-hidden">
                          <img
                            src={related.image || "/placeholder.svg"}
                            alt={related.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-display font-bold mb-1">{related.name}</h3>
                          <p className="text-sm text-gray-600">{related.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
