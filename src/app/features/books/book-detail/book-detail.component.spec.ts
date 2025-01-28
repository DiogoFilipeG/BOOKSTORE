import { MockBuilder, MockRender } from 'ng-mocks';
import { BookDetailComponent } from './book-detail.component';
import { BooksStore } from '../book-store';
import data from './../../../../mocks/data/books';
import { of } from 'rxjs';
import { BookSearchComponent } from '../book-search/book-search.component';

describe('BookDetailComponent', () => {
  beforeEach(async () => {
    await MockBuilder(BookDetailComponent)
      .mock(BooksStore, {
        findBookById: jest.fn().mockReturnValue(of(data.data[0])),
        loadBooks: jest.fn(),
      })
      .mock(BookSearchComponent);
  });

  it('should create', () => {
    const fixture = MockRender(BookDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should not call findBookById if id is not provided', () => {
    const fixture = MockRender(BookDetailComponent);
    fixture.detectChanges();
    const bookStore = fixture.debugElement.injector.get(BooksStore);
    expect(bookStore.findBookById).not.toHaveBeenCalled();
  });

  it('should call findBookById with id if provided', () => {
    const fixture = MockRender(BookDetailComponent, {
      id: 1,
    });
    fixture.detectChanges();
    const bookStore = fixture.debugElement.injector.get(BooksStore);
    expect(bookStore.findBookById).toHaveBeenCalledTimes(1);
    expect(bookStore.findBookById).toHaveBeenCalledWith(1);
  });
});
