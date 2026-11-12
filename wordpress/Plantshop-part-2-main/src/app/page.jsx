import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import { getPlant } from "@/lib/plant";

export default async function Home() {
  // The large front-page photo is the Monstera home image from WordPress.
  const heroPlant = await getPlant("2");
  const heroImage = heroPlant?.gallery[1] ?? heroPlant?.image;

  return (
    <main className="home">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero-copy">
          <p className="home-intro">Welcome to SPIRE</p>
          <h1 id="home-heading">A little green for your everyday</h1>
          <p className="home-description">
            Bring a little nature home. Find a plant that suits your space and
            your everyday.
          </p>
          <Link className="home-shop-link" href="/shop">
            Explore our plants
          </Link>
        </div>

        {heroPlant && (
          <Link
            className="home-hero-media"
            href={`/shop/${heroPlant.id}`}
            aria-label="Explore our Monstera"
          >
            {heroImage && (
              <Image
                src={heroImage}
                alt="A Monstera in a cream pot on a wooden table beside a sofa."
                width={1086}
                height={1448}
                sizes="(max-width: 540px) 100vw, 390px"
              />
            )}
          </Link>
        )}
      </section>

      <section className="home-featured" aria-labelledby="featured-heading">
        <div className="home-section-heading">
          <h2 id="featured-heading">Find your next green favourite</h2>
          <Link href="/shop">View all plants</Link>
        </div>
        <Suspense fallback={<ProductGridSkeleton count={3} />}>
          <FeaturedProducts />
        </Suspense>
      </section>
    </main>
  );
}
