import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  numberAttribute,
  signal,
} from '@angular/core';
import { BooksStore } from '../book-store';
import { ViewModel } from '../types/view-model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent implements AfterViewInit {
  bookStore = inject(BooksStore);
  @Input({ transform: numberAttribute }) id!: number;

  bookData = signal<ViewModel | undefined>(undefined);

  ngAfterViewInit() {
    if (!this.id) {
      return;
    }
    const foundBook = this.bookStore.findBookById(this.id);
    if (foundBook) {
      this.bookData.set(foundBook);
    }
  }
}
