export interface ProductData {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PostData {
  title: string;
  content: string;
  published: boolean;
}

export interface PostAttributes extends PostData {
  id: string;
  updatedAt: string;
  createdAt: string;
}
