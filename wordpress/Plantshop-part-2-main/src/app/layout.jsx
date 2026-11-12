import "./globals.css";
import "./spire.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartProvider from "@/components/cart/CartProvider";
import OrderNotification from "@/components/checkout/OrderNotification";
import { getCatalogue } from "@/lib/products";

export const metadata = {
  title: "SPIRE",
  description: "SPIRE plant shop",
};

export default async function RootLayout({ children }) {
  // The cart uses the current names and prices from WordPress.
  const { products } = await getCatalogue();
  return (
    <html lang="en">
      <body>
        {/* Keep the wrapper used by the existing SPIRE styles */}
        <div id="root">
          <CartProvider products={products}>
            <Navbar />
            {children}
            <OrderNotification />
            <Footer />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
