import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BookList } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly http = inject(HttpClient);

  books: BookList;

  ngOnInit(): void {
    this.http.get('/api/v1/books').subscribe((response: any) => {
      this.books = response;
      console.log(this.books);
    });
  }
}
