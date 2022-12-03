export interface ProductPodt {
  list: any;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: rating;
}

export interface rating {
  count: number;
  rate: number;
}
