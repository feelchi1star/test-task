import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { APIInterceptorService } from './form/APIInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptorService,
      multi: true,
    },
  ],
};
