import { bootstrapApplication } from '@angular/platform-browser';
import { worker } from './mocks/handlers';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

worker.start();
