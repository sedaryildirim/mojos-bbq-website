export interface Location {
  id: string;
  island: string;
  area: string;
  hours: string;
  special: string | null;
  mapUrl: string;
  embedUrl: string;
  orderText: string;
  deliveryUrl: string;
}

export interface MenuItem {
  name: string;
  price: number;
}

export interface MenuSection {
  name?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  number: string;
  title: string;
  watermark: string;
  subtitle?: string;
  sections: MenuSection[];
}

export interface Review {
  name: string;
  text: string;
  rating: number;
  location: string;
}
