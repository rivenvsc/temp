import ProductCard from '@/components/products/ProductCard';
import { getProducts } from '@/lib/products';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Our Products - Minimal E-commerce Hub',
  description: 'Browse our collection of high-quality products.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Our Products</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover a wide range of items carefully selected for you.
        </p>
      </header>
      <Separator />
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          No products found. Please check back later.
        </p>
      )}
    </div>
  );
}
