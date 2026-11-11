// Server functions combine Trefle data with local prices and images. Never expose the token to client code.
import { cacheLife } from "next/cache";
import products from "@/data/product";

// Person 1: the catalogue comes from our own WordPress endpoint /wp/v2/plant.
export async function getProducts() {
    "use cache";
    // Cached for about a minute, so a price change in WordPress shows after a reload.
    cacheLife("minutes");
    // _embed adds the featured image, like in class. per_page=100 gets all plants.
    const response = await fetch(`${process.env.WORDPRESS_API_URL}/plant?_embed&per_page=100`);
    if (!response.ok) {
        throw new Error(`WordPress API request failed (${response.status})`);
    }
    const plants = await response.json();
    // Same shape as the local products, so the cart and cards keep working.
    return plants
        .map((plant) => {
            const image = plant._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            return {
                id: plant.meta.shop_id,
                name: plant.title.rendered,
                price: plant.meta.price,
                description: plant.content.rendered.replace(/<[^>]+>/g, "").trim(),
                image,
                gallery: [image],
            };
        })
        .sort((a, b) => a.id - b.id);
}

export async function getProduct(id) {
    "use cache";

    // Reuse plant information and refresh it after the cache interval.
    cacheLife("hours");

    const product = products.find((item) => String(item.id) === id);

    if (!product) { return null; }

    const token = process.env.TREFLE_API_TOKEN;

    if (!token) {
        throw new Error("Trefle API token is not configured.");
    }

    const url = new URL(`https://trefle.io/api/v1/species/${product.trefleId}`,

    );
    url.searchParams.set("token", token);
    const response = await fetch(url);

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error(`Trefle API request failed (${response.status})`);
    }

    const result = await response.json();
    const plant = result.data;

    if (plant?.id !== product.trefleId || !plant?.scientific_name) {
        throw new Error("The plant API returned an invalid product.");
    }

    return {
        ...product,
        name: plant.scientific_name,
        botanical: plant,
    };
}


// Like Part 1, keep local products available when the catalogue API fails.
export async function getCatalogue() {
    try {
        return { products: await getProducts(), error: "" };
    } catch {
        return {
            products,
            error: "WordPress is unavailable right now. You are seeing the saved plant list.",
        };
    }
}
