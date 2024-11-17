import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'books',
        loadComponent: () =>
          import('./features/books/book-catalog/book-catalog.component').then((b) => b.BookCatalogComponent),
      },
    ],
  },
];
