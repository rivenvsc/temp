import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchX, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center p-4">
      <SearchX className="w-20 h-20 text-primary mb-6" />
      <h1 className="text-4xl font-bold text-foreground mb-3">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
        <Link href="/">
          <Home className="mr-2 h-5 w-5" />
          Go to Homepage
        </Link>
      </Button>
    </div>
  );
}
