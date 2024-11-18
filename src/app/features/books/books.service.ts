import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BookList } from 'src/app/models/book.model';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly http = inject(HttpClient);

  private apiUrl = '/api/v1/books';

  getBooks(): Observable<BookList> {
    return this.http.get<BookList>(this.apiUrl);
  }
}
