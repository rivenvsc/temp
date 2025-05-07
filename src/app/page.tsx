import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import { ShoppingCart, Zap } from 'lucide-react';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts(3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-background to-accent/10 dark:from-primary/20 dark:via-background dark:to-accent/20 rounded-lg p-8 md:p-16 text-center shadow-sm">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to Minimal E-commerce Hub
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover amazing products curated just for you. Quality, style, and convenience all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/products">
                <ShoppingCart className="mr-2 h-5 w-5" /> Shop All Products
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="#featured">
                <Zap className="mr-2 h-5 w-5" /> View Featured
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 relative aspect-[2/1] max-w-4xl mx-auto">
            <Image 
              src="https://picsum.photos/seed/storefront/1200/600" 
              alt="E-commerce storefront abstract" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg shadow-xl"
              data-ai-hint="e-commerce abstract"
              priority
            />
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Products</h2>
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No featured products available at the moment.</p>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="bg-card p-8 md:p-12 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to find your next favorite item?</h2>
        <p className="text-muted-foreground mb-6">
          Browse our extensive collection and enjoy a seamless shopping experience.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/products">
            Explore Now
          </Link>
        </Button>
      </section>
    </div>
  );
}
