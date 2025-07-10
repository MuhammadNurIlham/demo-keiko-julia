export const NavMenuLink = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const linkSections = [
  {
    title: "Quick Links",
    links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
    href: ["/", "/best-sellers", "/offers-deals", "/contact", "/faqs"],
  },
  {
    title: "Need Help?",
    links: [
      "Delivery Information",
      "Return & Refund Policy",
      "Payment Methods",
      "Track your Order",
      "Contact Us",
    ],
    href: [
      "/delivery-information",
      "/return-refund-policy",
      "/payment-methods",
      "/track-your-order",
      "/contact",
    ],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    href: [
      "https://www.instagram.com/",
      "https://twitter.com/",
      "https://www.facebook.com/",
      "https://www.youtube.com/",
    ],
  },
];

export const packageListData: CardItem[] = [
  // 🌴 HOTELS
  {
    id: "hotel-1",
    type: "hotel",
    variant: "default",
    imageUrl: "/images/nature1.jpg",
    title: "The Grand Resort",
    subtitle: "San Diego, CA, USA",
    location: "Los Angeles, California, USA",
    rating: 4.5,
    amenities: { wifi: true, breakfast: true, roomService: true },
    price: 100,
    priceUnit: "/night",
    badge: "Best Seller",
  },
  {
    id: "hotel-2",
    type: "hotel",
    variant: "default",
    imageUrl: "/images/nature2.jpg",
    title: "Ocean View Hotel",
    subtitle: "Bali, Indonesia",
    location: "Kuta Beach",
    rating: 4.7,
    amenities: { wifi: true },
    price: 85,
    priceUnit: "/night",
  },

  // 🗺 DESTINATIONS
  {
    id: "destination-1",
    type: "destination",
    variant: "default",
    imageUrl: "/images/nature2.jpg",
    title: "Mount Fuji",
    subtitle: "Scenic Mountain",
    location: "Honshu, Japan",
    rating: 4.9,
    price: 0,
    priceUnit: "", // Gratis
    badge: "Popular",
  },
  {
    id: "destination-2",
    type: "destination",
    variant: "default",
    imageUrl: "/images/nature1.jpg",
    title: "Santorini Island",
    subtitle: "Blue & White Paradise",
    location: "Greece",
    rating: 4.8,
    price: 0,
    priceUnit: "",
  },

  // 👨‍🏫 GUIDES
  {
    id: "guide-1",
    type: "guide",
    variant: "default",
    imageUrl: "/images/nature2.jpg",
    title: "John Doe",
    subtitle: "Experienced Tour Guide",
    location: "Jakarta, Indonesia",
    rating: 4.6,
    price: 25,
    priceUnit: "/hour",
    badge: "Top Rated",
  },
  {
    id: "guide-2",
    type: "guide",
    variant: "default",
    imageUrl: "/images/nature1.jpg",
    title: "Maria Lopez",
    subtitle: "Nature and Hiking Expert",
    location: "Cusco, Peru",
    rating: 4.8,
    price: 30,
    priceUnit: "/hour",
  },

  // 🚗 TRANSPORT
  {
    id: "transport-1",
    type: "transport",
    variant: "default",
    imageUrl: "/images/nature1.jpg",
    title: "Toyota Avanza",
    subtitle: "5-seater Family Car",
    location: "Bandung, Indonesia",
    rating: 4.2,
    price: 45,
    priceUnit: "/day",
    badge: "Available",
  },
  {
    id: "transport-2",
    type: "transport",
    variant: "default",
    imageUrl: "/images/nature1.jpg",
    title: "Hiace Commuter",
    subtitle: "Group Transport (up to 15 pax)",
    location: "Yogyakarta",
    rating: 4.5,
    price: 70,
    priceUnit: "/day",
  },

  // 🏠 ACCOMMODATION
  {
    id: "accommodation-1",
    type: "accommodation",
    variant: "default",
    imageUrl: "/images/nature2.jpg",
    title: "Private Villa with Pool",
    subtitle: "Perfect for honeymoon",
    location: "Ubud, Bali",
    rating: 4.9,
    amenities: { wifi: true, breakfast: true },
    price: 150,
    priceUnit: "/night",
    badge: "Luxury",
  },
  {
    id: "accommodation-2",
    type: "accommodation",
    variant: "default",
    imageUrl: "/images/nature2.jpg",
    title: "Budget Guest House",
    subtitle: "Cozy & Affordable",
    location: "Malang, Indonesia",
    rating: 4.0,
    price: 40,
    priceUnit: "/night",
  },
];
