import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { NavigationComponent } from './navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver } from '@angular/cdk/layout';
import { of } from 'rxjs';

describe('NavigationComponent', () => {
  beforeEach(async () => {
    await MockBuilder(NavigationComponent)
      .mock(MatToolbarModule)
      .mock(MatButtonModule)
      .mock(MatSidenavModule)
      .mock(MatListModule)
      .mock(MatIconModule)
      .provide({
        provide: BreakpointObserver,
        useValue: {
          observe: jest.fn().mockReturnValue(of({ matches: true })),
        },
      });
  });

  it('should create', () => {
    const fixture = MockRender(NavigationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render toolbar', () => {
    const fixture = MockRender(NavigationComponent);
    const toolbar = ngMocks.reveal(fixture, 'mat-toolbar');
    expect(toolbar).toBeTruthy();
  });
  it('should render sidenav', () => {
    const fixture = MockRender(NavigationComponent);
    const sidenav = ngMocks.reveal(fixture, 'mat-sidenav');
    expect(sidenav).toBeTruthy();
  });

  it('should emit true when handset breakpoint is matched', () => {
    const fixture = MockRender(NavigationComponent);
    const component = fixture.componentInstance;
    component.isHandset$.subscribe((matches) => {
      expect(matches).toBe(true);
    });
  });
});
