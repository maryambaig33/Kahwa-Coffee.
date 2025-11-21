import { CoffeeItem } from './types';

export const MENU_ITEMS: CoffeeItem[] = [
  {
    id: '1',
    name: 'Signature Kahwa Blend',
    description: 'Our house special. A rich, full-bodied blend with notes of dark chocolate and cardamom.',
    price: 4.50,
    image: 'https://picsum.photos/400/300?random=1',
    tags: ['Signature', 'Spiced', 'Strong']
  },
  {
    id: '2',
    name: 'Velvet Latte',
    description: 'Smooth espresso steamed with oat milk and a hint of Madagascar vanilla.',
    price: 5.25,
    image: 'https://picsum.photos/400/300?random=2',
    tags: ['Milky', 'Sweet', 'Smooth']
  },
  {
    id: '3',
    name: 'Nitro Cold Brew',
    description: 'Cold brewed for 24 hours and infused with nitrogen for a creamy texture without dairy.',
    price: 5.00,
    image: 'https://picsum.photos/400/300?random=3',
    tags: ['Cold', 'Strong', 'Creamy']
  },
  {
    id: '4',
    name: 'Espresso Macchiato',
    description: 'Traditional style. A double shot of espresso "stained" with a dollop of foam.',
    price: 3.75,
    image: 'https://picsum.photos/400/300?random=4',
    tags: ['Strong', 'Traditional', 'Small']
  },
  {
    id: '5',
    name: 'Honey Lavender Cortado',
    description: 'Equal parts espresso and steamed milk, infused with house-made honey lavender syrup.',
    price: 4.75,
    image: 'https://picsum.photos/400/300?random=5',
    tags: ['Floral', 'Sweet', 'Balanced']
  },
  {
    id: '6',
    name: 'Turkish Delight',
    description: 'Finely ground arabica beans boiled in a cevze with sugar, served unfiltered.',
    price: 4.00,
    image: 'https://picsum.photos/400/300?random=6',
    tags: ['Traditional', 'Strong', 'Sweet']
  }
];