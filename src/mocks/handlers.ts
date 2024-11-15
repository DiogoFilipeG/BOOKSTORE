import { rest } from 'msw';
import { setupWorker } from 'msw';
import books from './data/books';
import publishers from './data/publishers';
import authors from './data/authors';

export const handlers = [
  rest.get('/api/v1/books', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(books));
  }),

  rest.get('/api/v1/books/:bookId', (req, res, ctx) => {
    const { bookId } = req.params;
    return res(ctx.status(200), ctx.json(books.data[+bookId - 1]));
  }),

  rest.get('/api/v1/publishers', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(publishers));
  }),

  rest.get('/api/v1/publishers/:publisherId', (req, res, ctx) => {
    const { publisherId } = req.params;
    return res(ctx.status(200), ctx.json(publishers.data[+publisherId - 1]));
  }),

  rest.get('/api/v1/authors', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(authors));
  }),

  rest.get('/api/v1/authors/:authorId', (req, res, ctx) => {
    const { authorId } = req.params;
    return res(ctx.status(200), ctx.json(authors.data[+authorId - 1]));
  }),
];

export const worker = setupWorker(...handlers);
