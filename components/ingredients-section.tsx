"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface IngredientsSectionProps {
  ingredients: string[]
}

// Helper function to parse and multiply ingredient amounts
function multiplyIngredient(ingredient: string, multiplier: number): string {
  // Try to match patterns like "2 oz", "0.75 oz", "8-10 leaves", etc.
  const numberPattern = /^(\d+(?:\.\d+)?(?:\s*-\s*\d+)?)\s+/
  const match = ingredient.match(numberPattern)

  if (match) {
    const originalAmount = match[1]
    const rest = ingredient.slice(match[0].length)

    // Handle range (e.g., "8-10")
    if (originalAmount.includes("-")) {
      const [min, max] = originalAmount.split("-").map((n) => Number.parseFloat(n.trim()))
      const newMin = (min * multiplier).toFixed(2).replace(/\.?0+$/, "")
      const newMax = (max * multiplier).toFixed(2).replace(/\.?0+$/, "")
      return `${newMin}-${newMax} ${rest}`
    }

    // Handle single number
    const num = Number.parseFloat(originalAmount)
    const newAmount = (num * multiplier).toFixed(2).replace(/\.?0+$/, "")
    return `${newAmount} ${rest}`
  }

  return ingredient
}

export default function IngredientsSection({ ingredients }: IngredientsSectionProps) {
  // const [multiplier, setMultiplier] = useState(1)

  // const increment = () => setMultiplier((m) => m + 1)
  // const decrement = () => setMultiplier((m) => (m > 1 ? m - 1 : 1))

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-display font-bold">Ingredients</h2>

        {/* <div className="flex items-center gap-3 bg-orange-100 rounded-lg p-3">
          <button
            onClick={decrement}
            disabled={multiplier === 1}
            className="p-1 hover:bg-orange-200 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
            aria-label="Decrease multiplier"
          >
            <Minus size={20} className="text-orange-600" />
          </button>
          <span className="text-lg font-semibold text-orange-600 w-8 text-center">{multiplier}x</span>
          <button
            onClick={increment}
            className="p-1 hover:bg-orange-200 rounded transition-colors"
            aria-label="Increase multiplier"
          >
            <Plus size={20} className="text-orange-600" />
          </button>
        </div> */}
      </div>

      <ul className="space-y-3">
        {ingredients.map((ingredient, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white text-sm font-bold flex-shrink-0 mt-0.5">
              ✓
            </span>
            {/* <span className="text-gray-700">{multiplyIngredient(ingredient, multiplier)}</span> */}
            <span className="text-gray-700">{(ingredient)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
