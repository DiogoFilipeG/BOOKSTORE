import { MockProvider } from 'ng-mocks';
import { BooksStore } from './book-store';
import { BooksService } from './books.service';
import { LocalStorageService } from './../../shared/local-storage.service';
import { BookList } from 'src/app/models/book.model';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

const books: BookList = {
  data: [
    {
      id: 1,
      name: 'Book 1',
      description: 'Description 1',
      tags: [],
      isbn: '1234567890',
      price: 10,
      author: [],
      publisher: [],
      created_at: '',
      updated_at: '',
    },
  ],
  total: 1,
};
describe('BooksStore', () => {
  let booksStore: InstanceType<typeof BooksStore>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        BooksStore,
        MockProvider(BooksService, {
          getBooks: jest.fn().mockReturnValue(of(books)),
        }),
        MockProvider(HttpClient),
        MockProvider(LocalStorageService, {
          getFromLocalStorage: jest.fn().mockReturnValue([]),
        }),
      ],
    });
    booksStore = TestBed.inject(BooksStore);
  });

  it('should create', () => {
    expect(booksStore).toBeTruthy();
  });

  it('should load books', () => {
    booksStore.loadBooks();

    expect(booksStore.books()).toEqual(books.data);
    expect(booksStore.total()).toBe(books.total);
    expect(booksStore.isLoading()).toBe(false);
  });

  it('should find book by id', () => {
    booksStore.findBookById(1).subscribe((result) => {
      expect(result).toEqual(books.data[0]);
    });
  });

  it('should add book', () => {
    booksStore.addBook(books.data[0]);
    expect(booksStore.books()).toEqual([books.data[0]]);
  });

  it('should search books', () => {
    const searchFormData = { nameOrAuthor: 'Book 1', genre: '' };
    booksStore.searchBooks(searchFormData);

    expect(booksStore.books()).toEqual(books.data);
    expect(booksStore.total()).toBe(books.total);
  });
});
