type CardType =
  | "hotel"
  | "destination"
  | "guide"
  | "transport"
  | "accommodation";

interface CardItem {
  id: string;
  type: CardType;
  variant: "default" | "featured";
  imageUrl: string;
  title: string;
  subtitle?: string;
  location?: string;
  rating: number;
  amenities?: {
    wifi?: boolean;
    breakfast?: boolean;
    roomService?: boolean;
  };
  price: number;
  priceUnit?: string;
  badge?: string;
}

interface ProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
