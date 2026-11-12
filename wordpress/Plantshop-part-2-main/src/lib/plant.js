import { cacheLife } from "next/cache";

export async function getPlant(id) {
  "use cache";

  // Cached for about a minute, so changes in WordPress show after a reload.
  cacheLife("minutes");

  const response = await fetch(`${process.env.WORDPRESS_API_URL}/plant?_embed&per_page=100`);

  if (!response.ok) {
    throw new Error(`WordPress API request failed (${response.status})`);
  }

  const plants = await response.json();

  // The address uses the slug, e.g. /shop/monstera. The old number (/shop/2) still works.
  const plant = plants.find((item) => item.slug === id || String(item.meta.shop_id) === String(id));
  if (!plant) {
    return null;
  }
  const image = plant._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  // The gallery field holds the extra image addresses, separated by commas.    
  const extraImages = (plant.meta.gallery ?? "").split(",").map((url) => url.trim()).filter(Boolean);

  return {
    id: plant.meta.shop_id,
    slug: plant.slug,
    // Shown like before: the scientific name, with the WordPress title as a fallback.        
    name: plant.meta.scientific_name || plant.title.rendered,
    price: plant.meta.price,
    image,
    gallery: image ? [image, ...extraImages] : extraImages,
    description: plant.content.rendered.replace(/<[^>]+>/g, "").trim(),
    origin: plant.meta.origin,
    light: plant.meta.light,
    water: plant.meta.water,
    note: plant.meta.note,
    family: plant.meta.family,
    genus: plant.meta.genus,
  };
}
