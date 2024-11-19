import { MockBuilder, MockRender } from 'ng-mocks';
import { MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BooksStore } from '../book-store';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookFormComponent } from './book-form.component';

const mockFormData = {
  id: 1,
  name: 'Test Book',
  description: 'Test Description',
  isbn: '1234567890',
  tags: ['tag1', 'tag2'],
  price: 10.99,
  author: [{ id: 1, name: 'Author 1', created_at: '', updated_at: '' }],
  publisher: [{ id: 1, name: 'Publisher 1', created_at: '', updated_at: '' }],
  created_at: '',
  updated_at: '',
};
describe('BookFormComponent', () => {
  beforeEach(async () => {
    await MockBuilder(BookFormComponent)
      .mock(MatDialogContent)
      .mock(ReactiveFormsModule)
      .mock(MatDialogModule)
      .mock(MatButtonModule)
      .mock(MatChipsModule)
      .mock(MatFormFieldModule)
      .mock(MatIconModule)
      .mock(MatInputModule)
      .mock(MatSelectModule)
      .mock(
        MatDialogRef,
        {
          close: jest.fn(),
        },
        { export: true }
      )
      .mock(BooksStore, {
        addBook: jest.fn(),
      });
  });

  it('should create', () => {
    const fixture = MockRender(BookFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should submit the form', () => {
    const fixture = MockRender(BookFormComponent);
    const component = fixture.componentInstance;

    component.bookForm.patchValue(mockFormData);

    component.submit();

    expect(component.bookForm.valid).toBe(true);
    expect(component.bookForm.get('name')?.value).toBe(mockFormData.name);
    expect(component.bookForm.get('description')?.value).toBe(mockFormData.description);
    expect(component.bookForm.get('isbn')?.value).toBe(mockFormData.isbn);
    expect(component.bookForm.get('price')?.value).toBe(mockFormData.price);
    expect(component.bookForm.get('author')?.value).toEqual(mockFormData.author);
    expect(component.bookForm.get('publisher')?.value).toEqual(mockFormData.publisher);
  });

  // it('should add a reactive keyword', () => {
  //   const fixture = MockRender(BookFormComponent);
  //   const component = fixture.componentInstance;
  //   const keyword = 'Test Keyword';

  //   component.addReactiveKeyword();

  //   expect(component.reactiveKeywords()).toContain(keyword);
  // });

  it('should remove a reactive keyword', () => {
    const fixture = MockRender(BookFormComponent);
    const component = fixture.componentInstance;
    const tag = 'Test tag';
    component.tags.update((tags) => [...tags, tag]);
    component.removeReactiveKeyword(tag);

    expect(component.tags()).not.toContain(tag);
  });

  it('should not remove reactive keyword when index is -1', () => {
    const fixture = MockRender(BookFormComponent);
    const component = fixture.componentInstance;

    component.tags.set(['tag1', 'tag2', 'tag3']);
    component.removeReactiveKeyword('non-existent-tag');

    expect(component.tags()).toEqual(['tag1', 'tag2', 'tag3']);
  });
});
