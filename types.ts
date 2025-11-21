export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export interface RecommendationResult {
  coffeeName: string;
  reasoning: string;
  customNote: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}