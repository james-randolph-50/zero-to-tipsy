import type { Recipe } from "@/lib/recipes"

interface RecipeCardProps {
  recipe: Recipe
  featured?: boolean
}

export default function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  return (
    <div className="group cursor-pointer h-full">
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 bg-gradient-to-br from-orange-300 via-yellow-300 to-orange-400 overflow-hidden">
          <img
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title || "Recipe"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
              {recipe.category}
            </span>
          </div>

          <h3 className="text-xl font-display font-bold mb-2">{recipe.title || "Recipe"}</h3>

          <p className="text-gray-600 text-sm mb-4 flex-grow">{recipe.description}</p>
        </div>
      </div>
    </div>
  )
}
