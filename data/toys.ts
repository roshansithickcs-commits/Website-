
import { Toy, ToyCategory } from '../types';

export const TOYS_DATA: Toy[] = [
  {
    id: '1',
    name: 'Smart Building Blocks',
    price: 34.99,
    category: ToyCategory.CONSTRUCTION,
    description: 'Colorful interlocking blocks that spark creativity and spatial awareness.',
    image: 'https://picsum.photos/seed/blocks/600/600',
    ageRange: '3-7 years',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Galactic Explorer Kit',
    price: 45.00,
    category: ToyCategory.EDUCATIONAL,
    description: 'Learn about the solar system with this interactive glowing planetarium kit.',
    image: 'https://picsum.photos/seed/space/600/600',
    ageRange: '8-12 years',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Rainbow Paint Station',
    price: 24.95,
    category: ToyCategory.CREATIVE,
    description: 'Washable paints, brushes, and sponges for your little artist.',
    image: 'https://picsum.photos/seed/paint/600/600',
    ageRange: '4+ years',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Super Bouncy Trampoline',
    price: 120.00,
    category: ToyCategory.OUTDOOR,
    description: 'Safe and fun mini-trampoline with a sturdy handle for indoors or outdoors.',
    image: 'https://picsum.photos/seed/jump/600/600',
    ageRange: '3-6 years',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Cuddle Cloud Elephant',
    price: 19.99,
    category: ToyCategory.PLUSHIES,
    description: 'The softest plush elephant with sensory ears for comfort.',
    image: 'https://picsum.photos/seed/elephant/600/600',
    ageRange: '0+ months',
    rating: 5.0
  },
  {
    id: '6',
    name: 'Logic Maze Puzzle',
    price: 15.99,
    category: ToyCategory.PUZZLES,
    description: 'A challenging wooden maze that builds critical thinking skills.',
    image: 'https://picsum.photos/seed/maze/600/600',
    ageRange: '6+ years',
    rating: 4.5
  },
  {
    id: '7',
    name: 'Dino-Dig Excavation',
    price: 29.99,
    category: ToyCategory.EDUCATIONAL,
    description: 'Unearth hidden dinosaur fossils like a real paleontologist!',
    image: 'https://picsum.photos/seed/dino/600/600',
    ageRange: '6-10 years',
    rating: 4.9
  },
  {
    id: '8',
    name: 'Origami Master Set',
    price: 12.50,
    category: ToyCategory.CREATIVE,
    description: 'Fold your own animals and flowers with high-quality paper and guides.',
    image: 'https://picsum.photos/seed/paper/600/600',
    ageRange: '8+ years',
    rating: 4.7
  }
];
