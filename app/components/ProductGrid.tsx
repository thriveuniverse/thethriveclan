// app/components/ProductGrid.tsx
import { ProductOption } from "./lib/products";

interface Product {
  slug: string;
  title: string;
  description: string;
  options: Record<string, ProductOption>; // Use the imported type
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.slug} className="p-4 border">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}