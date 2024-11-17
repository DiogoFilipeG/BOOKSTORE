import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withState, withMethods, patchState } from '@ngrx/signals';
import { Book, BookList } from 'src/app/models/book.model';
import { BooksService } from './books.service';

type BooksState = {
  total: number;
  books: Book[];
  isLoading: boolean;
};

const initialState: BooksState = {
  books: [],
  total: 0,
  isLoading: false,
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => {
    return {
      dataSource: computed(() =>
        store.books().map((book) => ({
          id: book.id,
          title: book.name,
          description: book.description,
          isbn: book.isbn,
          tags: book.tags.join(', '),
          price: book.price,
          author: book.author.map((author) => author.name).join(', '),
          publisher: book.publisher.map((publisher) => publisher.name).join(', '),
          createdAt: book.created_at,
          updatedAt: book.updated_at,
        }))
      ),
    };
  }),
  withMethods((store, booksService = inject(BooksService)) => ({
    loadBooks() {
      patchState(store, { isLoading: true });
      booksService.getBooks().subscribe((books: BookList) => {
        patchState(store, { books: books.data, total: books.total, isLoading: false });
      });
    },
    findBookById(id: number) {
      return store.dataSource().find((book) => book.id === id);
    },
  }))
);
