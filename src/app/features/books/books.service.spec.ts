import { MockBuilder } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { HttpClient } from '@angular/common/http';
import data from './../../../mocks/data/books';

describe('BooksService', () => {
  let service: BooksService;
  let testingModule;

  beforeEach(async () => {
    testingModule = await MockBuilder(BooksService)
      .mock(HttpClient, { get: jest.fn().mockReturnValue(data) })
      .build();

    TestBed.configureTestingModule(testingModule);

    service = TestBed.inject(BooksService);
  });

  it('should get books', () => {
    const books = service.getBooks();
    expect(books).toEqual(data);
  });
});
