export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
};

export const  productsApi: Product[] = [
  {
    id: 'p-101',
    name: 'Classic Denim Jacket',
    description: 'A timeless casual jacket with a modern fit.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518',
    rating: 4.7,
    reviewCount: 182,
    inStock: true,
    category: 'Fashion',
  },
  {
    id: 'p-102',
    name: 'Urban Leather Backpack',
    description: 'Compact and durable backpack for daily use.',
    price: 89.5,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    rating: 4.5,
    reviewCount: 96,
    inStock: true,
    category: 'Accessories',
  },
  {
    id: 'p-103',
    name: 'Wireless Headphones',
    description: 'Premium sound with long battery life.',
    price: 199.0,
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
    rating: 4.8,
    reviewCount: 240,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: 'p-104',
    name: 'Minimal Desk Lamp',
    description: 'Soft ambient lighting for focused workspaces.',
    price: 54.25,
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    rating: 4.4,
    reviewCount: 74,
    inStock: false,
    category: 'Home',
  },
  {
    id: 'p-105',
    name: 'Running Sneakers',
    description: 'Lightweight support for everyday movement.',
    price: 142.0,
    imageUrl: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f',
    rating: 4.9,
    reviewCount: 310,
    inStock: true,
    category: 'Sports',
  },
  {
    id: 'p-106',
    name: 'Ceramic Coffee Mug',
    description: 'Handcrafted mug with a premium matte finish.',
    price: 22.0,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d',
    rating: 4.3,
    reviewCount: 58,
    inStock: true,
    category: 'Home',
  },
  {
    id: 'p-107',
    name: 'Smart Watch',
    description: 'Track fitness, messages, and health in style.',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    rating: 4.6,
    reviewCount: 175,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: 'p-108',
    name: 'Cotton Hoodie',
    description: 'Warm, breathable comfort for day-to-day wear.',
    price: 76.8,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    rating: 4.5,
    reviewCount: 118,
    inStock: true,
    category: 'Fashion',
  },
  {
    id: 'p-109',
    name: 'Travel Water Bottle',
    description: 'Insulated bottle keeping drinks cold for hours.',
    price: 31.75,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    rating: 4.7,
    reviewCount: 132,
    inStock: true,
    category: 'Lifestyle',
  },
  {
    id: 'p-110',
    name: 'Notebook Pro',
    description: 'Premium paper notebook for creative planning.',
    price: 18.5,
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
    rating: 4.2,
    reviewCount: 67,
    inStock: false,
    category: 'Office',
  },
];

export const getProducts = (): Product[] => [...productsApi];