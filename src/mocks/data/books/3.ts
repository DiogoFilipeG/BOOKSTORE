import { Book } from 'src/app/models/book.model';
import Author7 from '../authors/7';
import Publisher3 from '../publishers/3';

const data: Book = {
  id: 3,
  name: 'The Five Dysfunctions of a Team: A Leadership Fable',
  description:
    'Dolor irure aliqua ad in reprehenderit id excepteur esse nulla. Consectetur sint qui labore commodo Lorem. Nisi amet eu dolor irure Lorem. Labore esse dolore reprehenderit non. Anim aliquip duis deserunt in Lorem aute ea nisi commodo tempor do laborum.',
  isbn: '0787960756',
  tags: ['Accounting & Finance'],
  price: 13.2,
  author: [Author7],
  publisher: [Publisher3],
  created_at: '2023-09-11T12:25:27.304Z',
  updated_at: '2023-09-11T12:25:27.304Z',
};

export default data;
