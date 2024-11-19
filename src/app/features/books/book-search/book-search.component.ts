import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
})
export class BookSearchComponent {
  searchEvent = output<{ nameOrAuthor: string; genre: string }>();

  readonly tags = signal(['Computer', 'Literature & Fiction', 'Accounting & Finance', 'Science']);

  constructor() {
    this.searchForm.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((values) => {
      this.searchEvent.emit({
        nameOrAuthor: values.nameOrAuthor ?? '',
        genre: values.genre?.map((tag) => tag).join(', ') ?? '',
      });
    });
  }

  searchForm = new FormGroup({
    nameOrAuthor: new FormControl(''),
    genre: new FormControl<string[]>([]),
  });
}
