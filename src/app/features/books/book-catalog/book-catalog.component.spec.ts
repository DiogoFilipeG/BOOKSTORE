import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { BookCatalogComponent } from './book-catalog.component';
import { BooksService } from '../books.service';
import { BooksStore } from '../book-store';
import data from './../../../../mocks/data/books';
import { MatHeaderRowDef } from '@angular/material/table';

ngMocks.autoSpy('jest');

describe('BookCatalogComponent', () => {
  beforeEach(async () => {
    await MockBuilder(BookCatalogComponent)
      .mock(BooksService, {
        getBooks: jest.fn(),
      })
      .mock(BooksStore, {
        books: [],
        total: 0,
        dataSource: jest.fn().mockReturnValue(data.data),
        isLoading: jest.fn(),
        loadBooks: jest.fn(),
        findBookById: jest.fn(),
      });
  });

  it('should create', () => {
    const fixture = MockRender(BookCatalogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should load books on initialization', () => {
    const fixture = MockRender(BookCatalogComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.bookStore.loadBooks).toHaveBeenCalledTimes(1);
  });

  it('should display books in table', () => {
    const fixture = MockRender(BookCatalogComponent);
    fixture.detectChanges();
    const tableEl = ngMocks.reveal(['mat-table']);
    const header = ngMocks.findInstance(tableEl, MatHeaderRowDef);
    expect(header.columns).toBe(fixture.componentInstance.displayedColumns);
  });
});
