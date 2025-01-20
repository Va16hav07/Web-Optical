export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'prescription' | 'fashion' | 'bluelight' | 'accessories';
  features: string[];
  materials: string[];
  sizes: string[];
  images: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  orders?: Order[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  discount?: number;
  status: 'pending' | 'confirmed' | 'delivered';
  createdAt: Date;
  shippingAddress: Address;
  paymentMethod: 'cod' | 'online';
}

export interface Address {
  fullName: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface PromoCode {
  code: string;
  type: 'fixed' | 'percentage';
  value: number;
  minPurchase?: number;
  validUntil: Date;
}