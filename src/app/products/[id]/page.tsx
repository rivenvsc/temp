import Image from 'next/image';
import { getProductById, getProducts } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) {
    return {
      title: 'Product Not Found - Minimal E-commerce Hub',
    };
  }
  return {
    title: `${product.name} - Minimal E-commerce Hub`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailsPage({ params }: Props) {
  const product = await getProductById(params.id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
        <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold mb-2">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </Button>
      </div>
      <Card className="overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={`${product.category} detail`}
              priority
            />
          </div>
          <div className="flex flex-col">
            <CardHeader className="p-6">
              <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
              <CardTitle className="text-3xl font-bold">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <CardDescription className="text-base text-muted-foreground mb-4">
                {product.description}
              </CardDescription>
              <Separator className="my-4" />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Stock:</span> {product.stock > 0 ? `${product.stock} available` : 'Out of Stock'}
                </p>
                 <p className="text-3xl font-bold text-primary mt-4">${product.price.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 border-t">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
