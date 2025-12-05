export interface Recipe {
  id: string
  name: string
  description: string
  image: string
  category: "Boozy" | "Refreshing" | "Shot" | "Batch"
  prepTime: number
  servings: number
  ingredients: string[]
  instructions: string[]
  tips?: string[]
  videoUrl?: string
}

export const recipes: Recipe[] = [
  {
    id: "margarita",
    name: "Classic Margarita",
    description:
      "A timeless cocktail with tequila, lime juice, and triple sec. Crisp, refreshing, and perfectly balanced.",
    image: "/margarita-cocktail-lime-salt-rim.jpg",
    category: "Refreshing",
    prepTime: 5,
    servings: 1,
    ingredients: [
      "2 oz silver tequila",
      "1 oz fresh lime juice",
      "0.5 oz triple sec",
      "Salt for rim",
      "Ice",
      "Lime wheel for garnish",
    ],
    instructions: [
      "Rim a rocks glass with salt. Fill with ice.",
      "Shake tequila, lime juice, and triple sec with ice.",
      "Strain into the prepared glass.",
      "Garnish with a lime wheel and serve immediately.",
    ],
    tips: [
      "Always use fresh lime juice, not bottled",
      "Chill your glass before serving",
      "Use high-quality tequila for better flavor",
    ],
    videoUrl: "https://www.youtube.com/embed/example-margarita",
  },
  {
    id: "mojito",
    name: "Mojito",
    description: "A refreshing Cuban classic made with rum, mint, lime, and soda water. Perfect for warm evenings.",
    image: "/mojito-cocktail-mint-lime-rum.jpg",
    category: "Refreshing",
    prepTime: 7,
    servings: 1,
    ingredients: [
      "2 oz white rum",
      "1 oz fresh lime juice",
      "0.75 oz simple syrup",
      "8-10 fresh mint leaves",
      "2 oz soda water",
      "Ice",
      "Mint sprig for garnish",
    ],
    instructions: [
      "Place mint leaves in a tall glass and gently muddle.",
      "Add lime juice and simple syrup.",
      "Fill the glass with ice and add white rum.",
      "Top with soda water and stir gently.",
      "Garnish with a mint sprig and lime wheel.",
    ],
    tips: [
      "Don't over-muddle the mint to avoid bitterness",
      "Use light rum for a brighter flavor",
      "Make simple syrup by dissolving equal parts sugar and hot water",
    ],
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    description:
      "An elegant three-ingredient cocktail. White rum, lime juice, and simple syrup create pure sophistication.",
    image: "/daiquiri-cocktail-white-rum-lime-elegant.jpg",
    category: "Refreshing",
    prepTime: 5,
    servings: 1,
    ingredients: ["2 oz white rum", "0.75 oz fresh lime juice", "0.5 oz simple syrup", "Ice"],
    instructions: [
      "Add white rum, lime juice, and simple syrup to a cocktail shaker.",
      "Fill with ice and shake vigorously for 10-15 seconds.",
      "Strain into a chilled coupe glass.",
    ],
    tips: [
      "The balance of sweet and sour is key",
      "Chill your glass in the freezer beforehand",
      "Use Bacardi Superior or similar for best results",
    ],
  },
  {
    id: "oldFashioned",
    name: "Old Fashioned",
    description:
      "A sophisticated whiskey cocktail with bitters, sugar, and orange. A timeless classic for the discerning palate.",
    image: "/old-fashioned-whiskey-bitters-orange.jpg",
    category: "Boozy",
    prepTime: 8,
    servings: 1,
    ingredients: [
      "2 oz bourbon whiskey",
      "1 sugar cube (or 0.5 oz simple syrup)",
      "2-3 dashes Angostura bitters",
      "Orange twist",
      "Cherry for garnish",
      "Ice (preferably one large cube)",
    ],
    instructions: [
      "Place sugar cube in a rocks glass.",
      "Add bitters and a small splash of water.",
      "Muddle gently until sugar dissolves.",
      "Add a large ice cube.",
      "Pour bourbon whiskey over the ice.",
      "Stir well for about 30 seconds.",
      "Express an orange twist over the drink and drop it in as garnish.",
    ],
    tips: [
      "Use bourbon or rye whiskey, never blended whiskey",
      "One large ice cube melts slower than small cubes",
      "Express the oil from the orange peel for extra flavor",
    ],
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    description:
      "A vibrant and chic cocktail combining vodka, triple sec, cranberry juice, and lime. A modern classic.",
    image: "/cosmopolitan-pink-cocktail-cranberry-vodka.jpg",
    category: "Boozy",
    prepTime: 5,
    servings: 1,
    ingredients: [
      "1.5 oz vodka",
      "1 oz triple sec (Cointreau)",
      "0.5 oz fresh lime juice",
      "1 oz cranberry juice",
      "Ice",
      "Lime wheel for garnish",
    ],
    instructions: [
      "Add vodka, triple sec, lime juice, and cranberry juice to a cocktail shaker.",
      "Fill with ice and shake vigorously.",
      "Strain into a chilled martini glass.",
      "Garnish with a lime wheel on the rim.",
    ],
    tips: [
      "Use premium vodka for smoother taste",
      "Fresh lime juice makes a difference",
      "Chill your martini glass in the freezer",
    ],
  },
  {
    id: "manhattan",
    name: "Manhattan",
    description: "A timeless whiskey cocktail with sweet vermouth and bitters. Rich, complex, and wonderfully elegant.",
    image: "/manhattan-whiskey-cocktail-vermouth-cherry.jpg",
    category: "Boozy",
    prepTime: 6,
    servings: 1,
    ingredients: [
      "2 oz rye whiskey",
      "1 oz sweet vermouth",
      "2 dashes Angostura bitters",
      "Maraschino cherry for garnish",
      "Ice",
    ],
    instructions: [
      "Add whiskey, sweet vermouth, and bitters to a mixing glass.",
      "Fill with ice and stir for about 30 seconds.",
      "Strain into a chilled coupe glass.",
      "Garnish with a maraschino cherry.",
    ],
    tips: [
      "Rye whiskey gives the best flavor profile",
      "Stir rather than shake for a silky texture",
      "Use fresh vermouth for better taste",
    ],
  },
]
