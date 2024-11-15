import { Book } from 'src/app/models/book.model';
import Author6 from '../authors/6';
import Publisher2 from '../publishers/2';

const data: Book = {
  id: 2,
  name: 'The Secret Life of Bees',
  description:
    'In eu qui quis mollit. Voluptate est dolor aliquip occaecat sint consequat nostrud eiusmod et. Lorem deserunt pariatur do eu nisi duis cupidatat deserunt voluptate. Mollit incididunt nostrud ut ea quis deserunt ex exercitation qui esse voluptate. Sit aliquip aliquip exercitation proident. Exercitation cupidatat et do ea cillum.',
  isbn: '0142001740',
  tags: ['Literature & Fiction'],
  price: 14,
  author: [Author6],
  publisher: [Publisher2],
  created_at: '2023-09-11T12:25:27.304Z',
  updated_at: '2023-09-11T12:25:27.304Z',
};

export default data;
