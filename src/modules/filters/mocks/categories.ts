import {
  Accessibility,
  BedDouble,
  Building2,
  Castle,
  Coffee,
  ConciergeBell,
  Flame,
  Grape,
  Home,
  Hotel,
  MountainSnow,
  Palmtree,
  Rocket,
  Ship,
  Snowflake,
  Tent,
  Warehouse,
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
  },
  {
    id: 15,
    label: 'Casa',
    icon: Home,
    description: 'Quis irure dolore labore aute laboris consequat in laboris sunt labore sint id fugiat.'
  },
  {
    id: 16,
    label: 'Apartamento',
    icon: Building2,
    description: 'Esse Lorem commodo nulla labore incididunt.'
  },
  {
    id: 17,
    label: 'Garagem',
    icon: Warehouse,
    description: 'Dolore ipsum officia anim exercitation deserunt culpa exercitation.'
  },
  {
    id: 18,
    label: 'Castelo',
    icon: Castle,
    description: 'Cupidatat deserunt laboris irure ea adipisicing ex velit exercitation velit tempor laboris laborum occaecat sunt.'
  }
]
