import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { LocalStorageService } from '@app/shared/local-storage.service';
import { map, Observable } from 'rxjs';
import { BookList } from 'src/app/models/book.model';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly http = inject(HttpClient);
  private readonly localStorageService = inject(LocalStorageService);

  private apiUrl = '/api/v1/books';

  getBooks(): Observable<BookList> {
    return this.http.get<BookList>(this.apiUrl).pipe(
      map((books: BookList) => {
        const storedBooks = this.localStorageService.getFromLocalStorage();
        const allBooks = [...storedBooks, ...books.data];
        return { ...books, data: allBooks };
      })
    );
  }
}
