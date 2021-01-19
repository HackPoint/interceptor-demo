import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestsHanderService } from './shared/http-requests-hander.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestsHanderService, multi: true }
  ],
})
export class AppModule { }
