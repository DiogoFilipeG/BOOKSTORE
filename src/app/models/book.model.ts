import { Author } from './author.model';
import { Publisher } from './publisher.model';

export interface Book {
  id: number;
  name: string;
  description?: string;
  isbn: string;
  tags: string[];
  price: number;
  author: Author[];
  publisher: Publisher[];
  created_at: string;
  updated_at: string;
}

export interface BookList {
  total: number;
  data: Book[];
}
