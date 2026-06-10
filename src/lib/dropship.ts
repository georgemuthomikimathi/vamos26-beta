export type DropshipPartner = {
  name: string;
  rating: number;
  reviews: string;
  usFulfillment: string;
  avgShipDays: string;
  specialty: string;
  url: string;
};

export type CityProduct = {
  id: string;
  name: string;
  price: number;
  city: string;
  state: string;
  theme: string;
  tagline: string;
  partner: string;
  badge?: string;
  gradient: string;
};

/** Vetted US-fulfillment partners — 4.5+ avg ratings, fast domestic shipping */
export const DROPSHIP_PARTNERS: DropshipPartner[] = [
  {
    name: "Printful",
    rating: 4.7,
    reviews: "12,000+",
    usFulfillment: "Charlotte NC · Dallas TX · San Jose CA",
    avgShipDays: "2–5 business days",
    specialty: "Premium apparel, posters, drinkware",
    url: "https://www.printful.com",
  },
  {
    name: "Printify",
    rating: 4.6,
    reviews: "8,500+",
    usFulfillment: "Network of 90+ US print providers",
    avgShipDays: "2–7 business days",
    specialty: "City-themed tees, hoodies, hats",
    url: "https://www.printify.com",
  },
  {
    name: "Spocket",
    rating: 4.5,
    reviews: "4,200+",
    usFulfillment: "US & EU suppliers, 2–7 day ship",
    avgShipDays: "2–7 business days",
    specialty: "Curated US brands, home goods",
    url: "https://www.spocket.co",
  },
  {
    name: "Gooten",
    rating: 4.6,
    reviews: "3,100+",
    usFulfillment: "US production facilities",
    avgShipDays: "3–6 business days",
    specialty: "Wall art, blankets, accessories",
    url: "https://www.gooten.com",
  },
];

export const CITY_PRODUCTS: CityProduct[] = [
  {
    id: "nj-empire",
    name: "Empire State Final Tee",
    price: 34.99,
    city: "East Rutherford",
    state: "NJ",
    theme: "Empire State · Garden State",
    tagline: "MetLife Final — NY/NJ skyline with golden trophy",
    partner: "Printful",
    badge: "FINAL HOST",
    gradient: "from-blue-900 via-gold/30 to-green-800",
  },
  {
    id: "nj-garden",
    name: "Garden State Soccer Hoodie",
    price: 54.99,
    city: "East Rutherford",
    state: "NJ",
    theme: "The Garden State",
    tagline: "NJ pride for the biggest match on earth",
    partner: "Printify",
    gradient: "from-green-800 to-yellow-500",
  },
  {
    id: "la-angel",
    name: "City of Angels Match Day Jersey",
    price: 44.99,
    city: "Los Angeles",
    state: "CA",
    theme: "City of Angels",
    tagline: "SoFi Stadium edition — USA group matches",
    partner: "Printful",
    gradient: "from-purple-700 to-gold",
  },
  {
    id: "atl-south",
    name: "Empire State of the South Cap",
    price: 28.99,
    city: "Atlanta",
    state: "GA",
    theme: "Empire State of the South",
    tagline: "Mercedes-Benz Stadium knockout rounds",
    partner: "Spocket",
    gradient: "from-red-700 to-black",
  },
  {
    id: "mia-magic",
    name: "Magic City Wave Scarf",
    price: 24.99,
    city: "Miami",
    state: "FL",
    theme: "Magic City",
    tagline: "Hard Rock Stadium — third-place playoff host",
    partner: "Printify",
    badge: "BRONZE MATCH",
    gradient: "from-pink-500 to-teal-600",
  },
  {
    id: "sea-emerald",
    name: "Emerald City Supporter Kit",
    price: 39.99,
    city: "Seattle",
    state: "WA",
    theme: "Emerald City",
    tagline: "Lumen Field atmosphere in a bundle",
    partner: "Gooten",
    gradient: "from-emerald-600 to-blue-900",
  },
  {
    id: "dal-lone",
    name: "Lone Star Semifinal Poster",
    price: 19.99,
    city: "Arlington",
    state: "TX",
    theme: "Lone Star State",
    tagline: "AT&T Stadium — semifinal venue art print",
    partner: "Printful",
    badge: "SEMIFINAL",
    gradient: "from-blue-800 to-red-600",
  },
  {
    id: "phi-brotherly",
    name: "Brotherly Love Fan Tee",
    price: 32.99,
    city: "Philadelphia",
    state: "PA",
    theme: "City of Brotherly Love",
    tagline: "Lincoln Financial Field passion wear",
    partner: "Printify",
    gradient: "from-green-700 to-silver",
  },
  {
    id: "sf-golden",
    name: "Golden Gate Bay Hoodie",
    price: 49.99,
    city: "Santa Clara",
    state: "CA",
    theme: "Golden Gate Bay Area",
    tagline: "Levi's Stadium — Silicon Valley style",
    partner: "Spocket",
    gradient: "from-orange-500 to-red-700",
  },
  {
    id: "hou-space",
    name: "Space City Scarf",
    price: 22.99,
    city: "Houston",
    state: "TX",
    theme: "Space City",
    tagline: "NRG Stadium — diverse fan culture",
    partner: "Gooten",
    gradient: "from-blue-600 to-orange-500",
  },
  {
    id: "bos-beantown",
    name: "Beantown Match Day Mug",
    price: 18.99,
    city: "Foxborough",
    state: "MA",
    theme: "Beantown",
    tagline: "Gillette Stadium — New England soccer pride",
    partner: "Printful",
    gradient: "from-blue-900 to-red-700",
  },
  {
    id: "kc-heart",
    name: "Heart of America Tee",
    price: 29.99,
    city: "Kansas City",
    state: "MO",
    theme: "Heart of America",
    tagline: "Arrowhead roar meets the world game",
    partner: "Printify",
    gradient: "from-red-700 to-yellow-500",
  },
];
