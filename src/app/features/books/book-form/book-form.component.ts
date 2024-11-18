import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import * as authorsData from 'src/mocks/data/authors';
import * as publishersData from 'src/mocks/data/publishers';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BooksStore } from '../book-store';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogModule,
  ],
})
export class BookFormComponent {
  private readonly dialogRef = inject(MatDialogRef<BookFormComponent>);
  private readonly bookStore = inject(BooksStore);

  readonly reactiveKeywords = signal(['Computer', 'Literature & Fiction', 'Accounting & Finance', 'Science']);
  readonly authorsList = signal(authorsData.default.data);
  readonly publishersList = signal(publishersData.default.data);

  bookForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    isbn: new FormControl('', Validators.required),
    tags: new FormControl(this.reactiveKeywords()),
    price: new FormControl(0, Validators.required),
    author: new FormControl([], Validators.required),
    publisher: new FormControl([], Validators.required),
    created_at: new FormControl(new Date().toISOString()),
    updated_at: new FormControl(new Date().toISOString()),
  });

  removeReactiveKeyword(keyword: string) {
    this.reactiveKeywords.update((keywords) => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      return [...keywords];
    });
  }

  addReactiveKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.reactiveKeywords.update((keywords) => [...keywords, value]);
    }
    event.chipInput?.clear();
  }

  submit(): void {
    if (this.bookForm.valid) {
      this.bookForm.get('id')?.setValue(Math.floor(Math.random() * 1000000));

      this.bookStore.addBook({
        id: this.bookForm.value.id ?? 0,
        name: this.bookForm.value.name ?? '',
        description: this.bookForm.value.description ?? '',
        isbn: this.bookForm.value.isbn ?? '',
        tags: this.bookForm.value.tags ?? this.reactiveKeywords(),
        price: this.bookForm.value.price ?? 0,
        author: this.bookForm.value.author ?? [],
        publisher: this.bookForm.value.publisher ?? [],
        created_at: this.bookForm.value.created_at ?? new Date().toISOString(),
        updated_at: this.bookForm.value.updated_at ?? new Date().toISOString(),
      });
      this.dialogRef.close();
    }
  }
}
