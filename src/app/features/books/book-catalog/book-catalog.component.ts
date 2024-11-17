import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { BooksService } from '../books.service';
import { BooksStore } from '../book-store';
import { ViewModel } from '../types/view-model';

@Component({
  selector: 'app-book-catalog',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, CommonModule, MatButtonModule, RouterLink],
  templateUrl: './book-catalog.component.html',
  styleUrl: './book-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCatalogComponent {
  bookService = inject(BooksService);
  bookStore = inject(BooksStore);

  dataSource = computed(() => new MatTableDataSource<ViewModel>(this.bookStore.dataSource()));
  isLoading = computed(() => this.bookStore.isLoading());
  constructor() {
    this.bookStore.loadBooks();
  }

  displayedColumns = ['title', 'author', 'publisher', 'isbn', 'actions'];
  //headerNames = ['Title', 'Author(s)', 'Publisher(s)', 'ISBN'];
}
