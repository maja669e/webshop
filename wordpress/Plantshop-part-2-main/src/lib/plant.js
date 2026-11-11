import { cacheLife } from "next/cache";

export async function getPlant(id) {
  "use cache";

  // Cached for about a minute, so changes in WordPress show after a reload.
  cacheLife("minutes");

  const response = await fetch(`${process.env.WORDPRESS_API_URL}/plant?
_embed&per_page=100`);

  if (!response.ok) {
    throw new Error(`WordPress API request failed (${response.status})`);
  }

  const plants = await response.json();

  // The shop uses shop_id in its addresses, e.g. /shop/2.
  const plant = plants.find((item) => String(item.meta.shop_id) === String(id));
  if (!plant) {
    return null;
  }
  const image = plant._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    id: plant.meta.shop_id,
    name: plant.title.rendered,
    price: plant.meta.price,
    image,
    gallery: image ? [image] : [],
    description: plant.content.rendered.replace(/<[^>]+>/g, "").trim(),
    origin: plant.meta.origin,
    light: plant.meta.light,
    water: plant.meta.water,
    note: plant.meta.note,
    family: plant.meta.family,
    genus: plant.meta.genus,
  };
}
