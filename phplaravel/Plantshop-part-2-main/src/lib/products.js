//server functions to fetch products from Laravel and Trefle APIs. The Laravel API is used for the product catalogue, while the Trefle API is used for plant information.
import { cacheLife } from "next/cache";
import products from "@/data/product";

//Laravel only stores the main image, so build the 4 gallery images from it.
function addGalleryImages(product) {
    const gallery = ["main", "home", "detail", "angle"].map((name) => 
        product.image.replace("main", name)
    );
    return { ...product, gallery };
};



export async function getProducts() {
    "use cache";


//Short cache so new or update products from Laravel show up quickly.
    cacheLife("seconds");

    const response = await fetch(`${process.env.LARAVEL_API_URL}/products`, {
        headers: {Accept: "application/json"},
    });

    if (!response.ok) {
        throw new Error(`Laravel API request failed (${response.status})`);
    }
    const results = await response.json();
    return results.map(addGalleryImages);

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
            error: "Live plant information is unavailable. You can still browse our plants.",
        };
    }
}
