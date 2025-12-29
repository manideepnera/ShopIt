export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating?: number;
  isNew?: boolean;
  isOffer?: boolean;
}
