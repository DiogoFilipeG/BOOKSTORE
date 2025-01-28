import { MockBuilder } from 'ng-mocks';
import { BooksService } from './books.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './../../shared/local-storage.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

const data = {
  data: [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
  ],
};
const storedData = [{ id: 3, title: 'Book 3' }];
describe('BooksService', () => {
  let booksService: BooksService;
  beforeEach(async () => {
    const testingModule = await MockBuilder(BooksService)
      .mock(LocalStorageService, {
        getFromLocalStorage: jest.fn().mockReturnValue(storedData),
      })
      .mock(HttpClient, { get: jest.fn().mockReturnValue(of(data)) })
      .build();
    TestBed.configureTestingModule(testingModule);
    booksService = TestBed.inject(BooksService);
  });

  it('should return a list of books', () => {
    booksService.getBooks().subscribe((result) => {
      expect(result).toEqual(data);
    });
  });
});
