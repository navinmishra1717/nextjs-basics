import { UserData, ProductData, PostAttributes } from './types';

export const productData: ProductData[] = [
  {
    id: '1',
    name: 'product 1',
    price: 100,
    description: 'product 1 description',
  },
  {
    id: '2',
    name: 'product 2',
    price: 200,
    description: 'product 2 description',
  },
  {
    id: '3',
    name: 'product 3',
    price: 300,
    description: 'product 3 description',
  },
];

export const userData: UserData[] = [
  {
    id: '1',
    name: 'user 1',
    email: 'fddfs',
    password: "sdsd"
  },
  {
    id: '2',
    name: 'user 2',
    email: 'fddfs',
    password: "sdsd"
  },
  {
    id: '3',
    name: 'user 3',
    email: 'fddfs',
    password: "sdsd"
  },
];
export const postData: PostAttributes[] = [
  {
    id: '1',
    title: 'harry porter',
    content: 'harry porter content',
    published: true,
    updatedAt: '2020-01-01',
    createdAt: '2020-01-01',
  },
];
