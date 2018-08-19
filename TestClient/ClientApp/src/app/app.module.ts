import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { DataService } from './services/data.service';
import { WinAuthInterceptor } from './interceptors/win-auth-interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptor,
      multi: true
    },
    AuthenticationService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
