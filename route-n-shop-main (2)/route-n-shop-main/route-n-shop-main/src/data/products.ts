import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import laptopImg from '@/assets/laptop.jpg';
import cameraImg from '@/assets/camera.jpg';
import earbudsImg from '@/assets/earbuds.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    description: "Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    image: headphonesImg,
    category: "Audio",
    rating: 4.8,
    reviews: 1234,
    inStock: true,
    features: ["Active Noise Cancellation", "30-hour Battery", "Wireless Charging", "Premium Materials"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and week-long battery life.",
    image: smartwatchImg,
    category: "Wearables",
    rating: 4.7,
    reviews: 856,
    inStock: true,
    features: ["Heart Rate Monitor", "GPS Tracking", "7-day Battery", "Water Resistant"]
  },
  {
    id: 3,
    name: "Pro Smartphone 128GB",
    price: 899,
    originalPrice: 999,
    description: "The latest smartphone with professional camera system, lightning-fast processor, and all-day battery life.",
    image: smartphoneImg,
    category: "Mobile",
    rating: 4.9,
    reviews: 2341,
    inStock: true,
    features: ["Pro Camera System", "A15 Bionic Chip", "All-day Battery", "5G Ready"]
  },
  {
    id: 4,
    name: "Ultra-Thin Laptop",
    price: 1299,
    description: "Powerful performance meets portability in this ultra-thin laptop perfect for professionals and creatives.",
    image: laptopImg,
    category: "Computers",
    rating: 4.6,
    reviews: 679,
    inStock: true,
    features: ["Intel i7 Processor", "16GB RAM", "512GB SSD", "14-hour Battery"]
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    price: 1899,
    originalPrice: 2199,
    description: "Capture life's moments with professional quality using this advanced DSLR camera with interchangeable lenses.",
    image: cameraImg,
    category: "Photography",
    rating: 4.8,
    reviews: 445,
    inStock: false,
    features: ["24MP Sensor", "4K Video", "Weather Sealed", "Dual Card Slots"]
  },
  {
    id: 6,
    name: "True Wireless Earbuds",
    price: 179,
    description: "Enjoy freedom of movement with these premium wireless earbuds featuring crystal clear sound and quick charge case.",
    image: earbudsImg,
    category: "Audio",
    rating: 4.5,
    reviews: 923,
    inStock: true,
    features: ["True Wireless", "Quick Charge", "Touch Controls", "IPX4 Rating"]
  }
];

export const categories = [
  "All",
  "Audio",
  "Wearables", 
  "Mobile",
  "Computers",
  "Photography"
];