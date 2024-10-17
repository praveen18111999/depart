import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmenthomeRoutingModule } from './departmenthome-routing.module';
import { DepartmenthomeComponent } from './departmenthome.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OilComponent } from './component/oil/oil.component';
import { HttpClientModule } from '@angular/common/http';



import { MilletComponent } from './component/millet/millet.component';
import { RiceComponent } from './component/rice/rice.component';
import { MasalaComponent } from './component/masala/masala.component';

import { ProductComponent } from './product/product.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { HomeHygieneComponent } from './home-hygiene/home-hygiene.component';
import { DevotionalComponent } from './devotional/devotional.component';



@NgModule({
  declarations: [
    DepartmenthomeComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    OilComponent,
    MilletComponent,
    RiceComponent,
    MasalaComponent,
    ProductComponent,
    PersonalCareComponent,
    HomeHygieneComponent,
    DevotionalComponent
  ],

  imports: [
    CommonModule,
    DepartmenthomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})

export class DepartmenthomeModule { }
