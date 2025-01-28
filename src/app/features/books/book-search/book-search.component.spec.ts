import { MockBuilder, MockRender } from 'ng-mocks';
import { BookSearchComponent } from './book-search.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Output } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';

describe('BookSearchComponent', () => {
  beforeEach(async () => {
    await MockBuilder(BookSearchComponent);
  });

  it('should create', () => {
    const fixture = MockRender(BookSearchComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should emit search event on form value changes', fakeAsync(() => {
    const fixture = MockRender(BookSearchComponent);
    const component = fixture.componentInstance;
    component.searchEvent = new Output();
    const searchEventSpy = jest.fn();
    component.searchEvent.emit = searchEventSpy;

    component.searchForm = new FormGroup({
      nameOrAuthor: new FormControl(''),
      genre: new FormControl<string[]>([]),
    });

    const formValues = {
      nameOrAuthor: 'test',
      genre: ['Computer', 'Literature & Fiction'],
    };
    component.searchForm.setValue(formValues);

    component.searchForm.get('nameOrAuthor')?.setValue('test');
    component.searchForm.get('genre')?.setValue(['Computer', 'Literature & Fiction']);

    tick(500);

    component.searchEvent.emit({
      nameOrAuthor: 'test',
      genre: 'Computer, Literature & Fiction',
    });

    expect(searchEventSpy).toHaveBeenCalledTimes(1);
    expect(searchEventSpy).toHaveBeenCalledWith({
      nameOrAuthor: 'test',
      genre: 'Computer, Literature & Fiction',
    });
  }));
});
