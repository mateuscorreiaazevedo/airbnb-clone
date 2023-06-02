import {
  Accessibility,
  BedDouble,
  Coffee,
  ConciergeBell,
  Flame,
  Grape,
  Hotel,
  MountainSnow,
  Palmtree,
  Rocket,
  Ship,
  Snowflake,
  Tent,
  Waves
} from 'lucide-react'
import { CategoriesInterface } from '../types/filter-categories'

export const categoriesMocks: CategoriesInterface[] = [
  {
    id: 1,
    label: 'Em alta',
    icon: Flame,
    description: 'Deserunt non commodo et sint sit.'
  },
  {
    id: 2,
    label: 'Acampamentos',
    icon: Tent,
    description:
      'Ea ut veniam magna dolore aliqua pariatur voluptate adipisicing tempor quis tempor magna do.'
  },
  {
    id: 3,
    label: 'Quartos',
    icon: BedDouble,
    description: 'Sunt ut ipsum occaecat id veniam.'
  },
  {
    id: 4,
    label: 'Praia',
    icon: Palmtree,
    description:
      'Id quis adipisicing reprehenderit sit laboris est culpa voluptate ipsum commodo dolor ut ea..'
  },
  {
    id: 5,
    label: 'Hotéis',
    icon: Hotel,
    description:
      'Magna adipisicing elit cillum do labore amet incididunt reprehenderit consectetur in dolore sunt.'
  },
  {
    id: 6,
    label: 'Parques nacionais',
    icon: MountainSnow,
    description: 'Do quis tempor aute deserunt qui.'
  },
  {
    id: 7,
    label: 'Pousadas',
    icon: Coffee,
    description:
      'Commodo incididunt qui labore ullamco deserunt veniam et aliquip veniam sit incididunt officia laborum do.'
  },
  {
    id: 8,
    label: 'Vinhedos',
    icon: Grape,
    description:
      'Commodo consequat occaecat esse cupidatat est amet velit tempor velit labore Lorem.'
  },
  {
    id: 9,
    label: 'Ártico',
    icon: Snowflake,
    description:
      'Fugiat occaecat eiusmod exercitation labore exercitation enim occaecat pariatur sit laboris.'
  },
  {
    id: 10,
    label: 'Luxe',
    icon: ConciergeBell,
    description:
      'Velit deserunt officia nostrud pariatur proident consequat minim voluptate laboris.'
  },
  {
    id: 11,
    label: 'Barcos',
    icon: Ship,
    description: 'Elit pariatur tempor irure adipisicing.'
  },
  {
    id: 12,
    label: 'Piscinas',
    icon: Waves,
    description: 'Deserunt qui aliqua laborum qui tempor.'
  },
  {
    id: 13,
    label: 'Espaços adaptados',
    icon: Accessibility,
    description: 'In aliquip magna et nulla dolor ut est ullamco cillum in.'
  },
  {
    id: 14,
    label: 'Uau!',
    icon: Rocket,
    description: 'Ut irure consectetur ullamco consectetur incididunt incididunt enim in aute sit amet ipsum exercitation.'
  }
]
