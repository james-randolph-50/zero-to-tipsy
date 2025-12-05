import Link from "next/link"
import { recipes } from "@/lib/recipes"
import RecipeCard from "./recipe-card"

export default function FeaturedCocktails() {
  const featured = recipes.slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featured.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  )
}
