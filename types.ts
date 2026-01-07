
export interface Toy {
  id: string;
  name: string;
  price: number;
  category: ToyCategory;
  description: string;
  image: string;
  ageRange: string;
  rating: number;
}

export enum ToyCategory {
  EDUCATIONAL = 'Educational',
  CREATIVE = 'Creative',
  OUTDOOR = 'Outdoor',
  PUZZLES = 'Puzzles',
  PLUSHIES = 'Plushies',
  CONSTRUCTION = 'Construction'
}

export interface CartItem extends Toy {
  quantity: number;
}

export interface AIRecommendation {
  suggestion: string;
  reasoning: string;
  toyCategory: ToyCategory;
}
