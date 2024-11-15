import { Book } from 'src/app/models/book.model';
import Author1 from '../authors/1';
import Author2 from '../authors/2';
import Author3 from '../authors/3';
import Author4 from '../authors/4';
import Author5 from '../authors/5';
import Publisher1 from '../publishers/1';

const data: Book = {
  id: 1,
  name: 'OCP: Oracle9i Certification Kit',
  description:
    'Ut qui amet ea deserunt in consectetur aliqua id enim. Nostrud incididunt excepteur anim amet sit commodo ullamco. Enim consequat cillum cillum tempor ex laborum excepteur est.',
  isbn: '0782140661',
  tags: ['Computer'],
  price: 104.97,
  author: [Author1, Author2, Author3, Author4, Author5],
  publisher: [Publisher1],
  created_at: '2023-09-11T12:25:27.304Z',
  updated_at: '2023-09-11T12:25:27.304Z',
};

export default data;
