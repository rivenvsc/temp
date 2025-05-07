export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Minimal E-commerce Hub. All rights reserved.</p>
        <p className="text-sm mt-1">Powered by Next.js & Firebase Studio</p>
      </div>
    </footer>
  );
}
