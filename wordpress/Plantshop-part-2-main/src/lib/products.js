// Server functions: the whole catalogue comes from our own WordPress API.
import { cacheLife } from "next/cache";

// Person 1: the catalogue comes from our own WordPress endpoint /wp/v2/plant.
export async function getProducts() {
  "use cache";
  // Cached for about a minute, so a price change in WordPress shows after a reload.
  cacheLife("minutes");
  // _embed adds the featured image, like in class. per_page=100 gets all plants.
  const response = await fetch(
    `${process.env.WORDPRESS_API_URL}/plant?_embed&per_page=100`,
  );
  if (!response.ok) {
    throw new Error(`WordPress API request failed (${response.status})`);
  }
  const plants = await response.json();
  // Same shape as the local products, so the cart and cards keep working.
  return plants
    .map((plant) => {
      const image = plant._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      const extraImages = (plant.meta.gallery ?? "").split(",").map((url) => url.trim()).filter(Boolean);
      return {
        id: plant.meta.shop_id,
        name: plant.meta.scientific_name || plant.title.rendered,
        price: plant.meta.price,
        description: plant.content.rendered.replace(/<[^>]+>/g, "").trim(),
        image,
        gallery: image ? [image, ...extraImages] : extraImages,
      };
    })
    .sort((a, b) => a.id - b.id);
}

// Show a message instead of crashing when WordPress is not running.
export async function getCatalogue() {
  try {
    return { products: await getProducts(), error: "" };
  } catch {
    return {
      products: [],
      error: "WordPress is unavailable right now. Please try again later.",
    };
  }
}