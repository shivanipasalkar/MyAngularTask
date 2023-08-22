import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './modules/home/layout/layout.component';
import { LoginComponent } from './modules/home/login/login.component';
import { AuthService } from './services/auth.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
