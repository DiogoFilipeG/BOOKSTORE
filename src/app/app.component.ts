import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from './core/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavigationComponent],
})
export class AppComponent {}
