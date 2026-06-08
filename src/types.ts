export interface Product {
  id: string;
  name: string;
  category: "Jerseys" | "Cargos" | "Oversized Tees" | "Shirts";
  description: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  colors: string[];
  features: string[];
  isBestSeller?: boolean;
  isNewDrop?: boolean;
}

export interface EnquiryItem {
  productId: string;
  productName: string;
  category: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

export interface ContactNumber {
  name: string;
  number: string;
  label: string;
}
