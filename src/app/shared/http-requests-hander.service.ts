import { Injectable, NgZone } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsHanderService implements HttpInterceptor {

  constructor(private readonly spinnerService: SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();
    return this.handler(next, req);
  }

  handler(next: HttpHandler, req: HttpRequest<any>) {
    return next.handle(req)
    .pipe(
      tap(
        (ev) => {
          if(ev instanceof HttpResponse) {
              this.spinnerService.requesEnded();
          }
        },
        (err: HttpErrorResponse) => {
          this.spinnerService.resetSpinner();
          throw err;
        }
      )
    )
  }
}
