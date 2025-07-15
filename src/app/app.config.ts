import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, ValueProvider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // <-- IMPORTANTE!

import { routes } from './app.routes';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';

const SNACK_BAR_CONFIG: ValueProvider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  } as MatSnackBarConfig,
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()), // <-- ESSENCIAL
    SNACK_BAR_CONFIG,
  ]
};