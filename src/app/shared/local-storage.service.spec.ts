import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
import { MockBuilder } from 'ng-mocks';
const storageKey = 'books';
const data = { book: 'test' };
describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;
  beforeEach(async () => {
    const testingModule = await MockBuilder(LocalStorageService).build();
    TestBed.configureTestingModule(testingModule);
    localStorageService = TestBed.inject(LocalStorageService);
    localStorage.clear();
  });

  it('should save data to local storage', () => {
    localStorageService.saveToLocalStorage(data);
    expect(localStorage.getItem(storageKey)).toBe(JSON.stringify(data));
  });

  it('should retrieve data from local storage', () => {
    localStorage.setItem(storageKey, JSON.stringify(data));
    expect(localStorageService.getFromLocalStorage()).toEqual(data);
  });

  it('should return an empty array if no data is stored', () => {
    expect(localStorageService.getFromLocalStorage()).toEqual([]);
  });
});
