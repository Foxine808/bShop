import type { Product } from "$lib/models/item";
import type { PageServerLoad } from "./$types";

export type Data = {
  products: Product[];
}

export let load: PageServerLoad = async ({}): Promise<Data> => {
  const items: Product[] = [
    {
      name: "Aboba",
      cost: 5000,
      currency: "₽",
      description: "aboba",
      tags: []
    },
    {
      name: "Aboba",
      cost: 5000,
      currency: "₽",
      description: "aboba",
      tags: []
    }
  ];

  return {
    products: items
  }
  
}
