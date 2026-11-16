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

    cacheLife("seconds");

    const response = await fetch(`${process.env.LARAVEL_API_URL}/products/${id}`, {
        headers: {Accept: "application/json"},
    });

    //findOrFail in Laravel returns 404 if the product is not found, so we throw an error here to be handled by the calling function.
    if(response.status === 404) {
        return null;
    }
    if (!response.ok) {
        throw new Error(`Laravel API request failed (${response.status})`);
    }
    const product = await response.json();
    return addGalleryImages(product);
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
