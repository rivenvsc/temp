import type { Product } from '@/types/product';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Modern Smartwatch',
    description: 'Stay connected and track your fitness with this sleek smartwatch. Features include heart rate monitoring, GPS, and various app integrations.',
    price: 199.99,
    imageUrl: 'https://picsum.photos/seed/smartwatch/600/400',
    category: 'Electronics',
    stock: 15,
  },
  {
    id: '2',
    name: 'Wireless Bluetooth Headphones',
    description: 'Experience immersive sound with these comfortable, noise-cancelling wireless headphones. Long battery life and crystal-clear audio.',
    price: 129.50,
    imageUrl: 'https://picsum.photos/seed/headphones/600/400',
    category: 'Electronics',
    stock: 25,
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'A soft and breathable t-shirt made from 100% organic cotton. Ethically sourced and environmentally friendly.',
    price: 29.99,
    imageUrl: 'https://picsum.photos/seed/tshirt/600/400',
    category: 'Apparel',
    stock: 50,
  },
  {
    id: '4',
    name: 'Stainless Steel Water Bottle',
    description: 'Keep your drinks cold or hot for hours with this durable, double-walled stainless steel water bottle. BPA-free.',
    price: 24.00,
    imageUrl: 'https://picsum.photos/seed/bottle/600/400',
    category: 'Accessories',
    stock: 30,
  },
  {
    id: '5',
    name: 'Leather Messenger Bag',
    description: 'A stylish and functional messenger bag crafted from genuine leather. Perfect for work or casual use, with multiple compartments.',
    price: 89.90,
    imageUrl: 'https://picsum.photos/seed/bag/600/400',
    category: 'Accessories',
    stock: 10,
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    description: 'Non-slip, eco-friendly yoga mat for your daily practice. Provides excellent cushioning and support.',
    price: 45.00,
    imageUrl: 'https://picsum.photos/seed/yogamat/600/400',
    category: 'Sports',
    stock: 22,
  },
];

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.find(product => product.id === id);
}

export async function getFeaturedProducts(count: number = 3): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockProducts.slice(0, count);
}
