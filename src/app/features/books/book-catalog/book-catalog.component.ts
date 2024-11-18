import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { BooksStore } from '../book-store';
import { ViewModel } from '../types/view-model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-catalog',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  templateUrl: './book-catalog.component.html',
  styleUrl: './book-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCatalogComponent {
  private readonly bookStore = inject(BooksStore);
  private readonly dialog = inject(MatDialog);

  dataSource = computed(() => new MatTableDataSource<ViewModel>(this.bookStore.dataSource()));
  isLoading = computed(() => this.bookStore.isLoading());
  displayedColumns = ['title', 'author', 'publisher', 'isbn', 'actions'];

  constructor() {
    this.bookStore.loadBooks();
  }

  addBook(): void {
    this.dialog.open(BookFormComponent, {
      height: '80vh',
      width: '60vw',
    });
  }
}
