export type Restaurant = {
  id: number;
  name: string;
  rating: number;
  rating_count: number;
  url: string;
  hours24: boolean;
  lng: number;
  lat: number;
  menuSet: Menu[];
};

export type Menu = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calorie: number;
  category: string;
  lat: number;
  lng: number;
  counter: number;
};

export type Category = {
  count: number;
  category: string;
};
