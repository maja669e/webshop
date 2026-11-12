import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInformation from "@/components/products/ProductInformation";
import AddToCartForm from "@/components/cart/AddToCartForm";
import { getCatalogue, getProducts } from "@/lib/products";
import { getPlant } from "@/lib/plant";
// Prepare a page for every plant in WordPress, so direct visits have ready page content.
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ id: product.slug }));
}
export default async function ProductPage({ params }) {
  const { id } = await params;
  // Person 2: one plant from our own WordPress route.
  const product = await getPlant(id);
  if (!product) notFound();
  const { products } = await getCatalogue();
  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);
  return (
    <main className="plant-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span aria-hidden="true">/</span>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </li>
        </ol>
      </nav>
      <article className="plant-layout">
        <ProductGallery
          key={product.id}
          images={product.gallery}
          name={product.name}
        />
        <div className="plant-summary">
          <h1>{product.name}</h1>
          <p className="plant-price">{product.price} kr</p>
          {product.description && <p>{product.description}</p>}
          <AddToCartForm
            key={product.id}
            product={{
              id: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.image,
            }}
          />
          <ProductInformation key={`info-${product.id}`} product={product} />
        </div>
      </article>
      <section className="plant-related" aria-labelledby="related-heading">
        <h2 id="related-heading">You may also like</h2>
        <div className="product-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} headingLevel="h3" />
          ))}
        </div>
      </section>
    </main>
  );
}
