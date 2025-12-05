"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🍹
            </div>
            <span className="font-display text-xl font-bold text-gray-900">Craft Cocktails</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <Link href="/recipes" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Recipes
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/recipes" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              Recipes
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
