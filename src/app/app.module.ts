import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';






// import { MenuComponent } from './menu/menu.component';

@NgModule({

  declarations: [
    AppComponent,
    MainpageComponent,

    




  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    CommonModule
   
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]

})

export class AppModule { }
