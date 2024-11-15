import { Book } from 'src/app/models/book.model';
import Author8 from '../authors/8';
import Publisher4 from '../publishers/4';

const data: Book = {
  id: 4,
  name: 'The Blank Slate: The Modern Denial of Human Nature',
  description:
    'Ullamco labore enim exercitation deserunt esse aliqua enim cupidatat consequat dolore commodo dolor. Ipsum consequat eu aute velit dolor aliqua exercitation culpa velit. Magna aliqua aliqua sunt sit magna reprehenderit tempor commodo nulla aliqua occaecat sunt. Minim anim nulla pariatur fugiat ipsum incididunt sunt.',
  isbn: '0670031518',
  tags: ['Science'],
  price: 27.95,
  author: [Author8],
  publisher: [Publisher4],
  created_at: '2023-09-11T12:25:27.304Z',
  updated_at: '2023-09-11T12:25:27.304Z',
};

export default data;
