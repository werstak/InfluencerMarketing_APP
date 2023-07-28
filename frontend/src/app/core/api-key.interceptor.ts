import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiKey = 'hWuFhhPVij';
    const clonedRequest = request.clone({
      setHeaders: {
        'authkey': `${apiKey}`
      }
    });
    return next.handle(clonedRequest);
  }
}
