import { fetchFromStrapi } from "./strapi";


export interface Recipe {
  id: string;
  title?: string;
  description: string;
  image: string;
  category: "Boozy" | "Refreshing" | "Shot" | "Batch";
  prepTime?: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  videoUrl?: string;
}

export async function getRecipes(): Promise<Recipe[]> {
  const data = await fetchFromStrapi("/recipes?populate=*");
  console.log(data);

  return data.data.map((item: any): Recipe => {
    return {
      id: String(item.id),
      title: item.title,
      description: item.description,
      image: "",

      category: (item.category.charAt(0).toUpperCase() + item.category.slice(1)) as Recipe["category"],

      prepTime: item.prepTime ?? undefined,
      servings: item.servings ?? 1,

      ingredients: item.ingredients || [],
      instructions: item.instructions || [],
      tips: item.tips || undefined,
      videoUrl: item.videoUrl || undefined,
    };
  });
}

// helper function for ingredients and instructions as they STrapi object is an array of objects, not just strings
export function flattenRichTextList(list: any[]): string[] {
  const result: string[] = []

  list.forEach((block) => {
    if (block.type === "list" && block.children) {
      block.children.forEach((li: any) => {
        if (li.type === "list-item" && li.children) {
          li.children.forEach((child: any) => {
            if (child.text) {
              result.push(child.text)
            }
          })
        }
      })
    }
  })

  return result
}



