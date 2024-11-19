import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withState, withMethods, patchState } from '@ngrx/signals';
import { Book, BookList } from 'src/app/models/book.model';
import { BooksService } from './books.service';
import { map, of, switchMap } from 'rxjs';
import { LocalStorageService } from './../../shared/local-storage.service';

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
  withMethods(
    (store, booksService = inject(BooksService), localStorageService = inject(LocalStorageService)) => ({
      loadBooks() {
        patchState(store, { isLoading: true });
        booksService.getBooks().subscribe((books: BookList) => {
          patchState(store, { books: books.data, total: books.total, isLoading: false });
        });
      },
      findBookById(id: number) {
        return booksService
          .getBooks()
          .pipe(map((books: BookList) => books.data.find((book) => book.id === id)));
      },
      addBook(newBook: Book) {
        const storedBooks = localStorageService.getFromLocalStorage();
        const updatedBooks = [newBook, ...storedBooks];
        localStorageService.saveToLocalStorage(updatedBooks);
        patchState(store, { books: [newBook, ...store.books()] });
      },
      /**
       * Search books by name, author or genre.
       *
       * @param searchFormData the search form data.
       * @returns the filtered books.
       */
      searchBooks(searchFormData: { nameOrAuthor: string; genre: string }) {
        return booksService
          .getBooks()
          .pipe(
            switchMap((books: BookList) => {
              const filteredBooks = books.data.filter((book) => {
                if (!searchFormData.nameOrAuthor && !searchFormData.genre) {
                  return true; // return all data when both fields are empty
                }
                const nameOrAuthorMatch = searchFormData.nameOrAuthor
                  ? book.name.toLowerCase().includes(searchFormData.nameOrAuthor.toLowerCase()) ||
                    book.author.some((author) =>
                      author.name.toLowerCase().includes(searchFormData.nameOrAuthor.toLowerCase())
                    )
                  : true;
                const genreMatch = searchFormData.genre
                  ? searchFormData.genre
                      .toLowerCase()
                      .split(',')
                      .every((genre) => book.tags.some((t) => t.toLowerCase() === genre.trim()))
                  : true;
                return (
                  (searchFormData.nameOrAuthor && nameOrAuthorMatch) || (searchFormData.genre && genreMatch)
                );
              });
              return of(filteredBooks);
            })
          )
          .subscribe((filteredBooks) => {
            patchState(store, { books: filteredBooks, total: filteredBooks.length });
          });
      },
    })
  )
);
