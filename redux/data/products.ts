export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "laptop",
    name: "Laptop",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: "headphones",
    name: "Headphones",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    id: "mouse",
    name: "Mouse",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1527864554727-909fd8dc5e7c?w=400&h=300&fit=crop",
  },
];
