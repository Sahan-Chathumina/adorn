import { asset } from "./img";
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  description: string;
  featured: boolean;
  badge?: string;
  rating: number;
}
export const products: Product[] = [
  {
    id: "day-cream",
    name: "ADORN Day Cream SPF 30",
    category: "face-creams",
    price: 7990,
    compareAtPrice: 9990,
    image: asset("products", "loreal-sunscreens"),
    description: "Daily hydrating cream.",
    featured: false,
    badge: "20% OFF",
    rating: 5,
  },
  {
    id: "brightening-serum",
    name: "The Ordinary",
    category: "serums",
    price: 9500,
    image: asset ("products", "brightening-serum"),
    description: "Vitamin C glow serum.",
    featured: true,
    rating: 5,
  },
  {
    id: "cerave-cleanser",
    name: "Cerave Hydrating & Renewing SA Cleansers",
    category: "cleansers",
    price: 4990,
    image: asset ("products", "cerave-cleanser"),
    description: "Gentle brightening cleanser.",
    featured: true,
    rating: 4,
  },
  {
    id: "neutrogena-facewash",
    name: "Neutrogena Clear & Defend Face Wash",
    category: "face-wash",
    price: 8500,
    image: asset("products", "neutrogena-facewash"),
    description: "Overnight repair cream.",
    featured: true,
    rating: 5,
  },
  {
    id: "vaseline-serum",
    name: "Vaseline GLUTA-HYA",
    category: "serums",
    price: 6990,
    image: asset("products", "vaseline-serum"),
    description: "Lightweight daily sun protection.",
    featured: true,
    rating: 5,
  },
  {
    id: "niveamen-facewash",
    name: "Nivea Men-Deep Cleaning Face Wash",
    category: "face-wash",
    price: 4200,
    image: asset("products", "niveamen-facewash"),
    description: "Balancing toner.",
    featured: true,
    rating: 4,
  },
];
