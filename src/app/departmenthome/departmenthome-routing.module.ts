import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmenthomeComponent } from './departmenthome.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { OilComponent } from './component/oil/oil.component';
import { ProductComponent } from './product/product.component';
import { MasalaComponent } from './component/masala/masala.component';
import { RiceComponent } from './component/rice/rice.component';
import { MilletComponent } from './component/millet/millet.component';

import { PersonalCareComponent } from './personal-care/personal-care.component';
import { HomeHygieneComponent } from './home-hygiene/home-hygiene.component';
import { DevotionalComponent } from './devotional/devotional.component';

const routes: Routes = [{ path: '', component: DepartmenthomeComponent ,children:[
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'about',component:AboutComponent},
  {path: 'oil',component:OilComponent},
  {path:'products',component:ProductComponent},
  {path:'masala',component:MasalaComponent},
  {path:'rice', component:RiceComponent},
  {path:'millet', component:MilletComponent},
  {path: 'personalCare', component:PersonalCareComponent},
  {path:'homeHygiene', component:HomeHygieneComponent},
  {path:'devotional', component:DevotionalComponent},
  



  {path:'',redirectTo:'/departmenthome/home',pathMatch:'full'}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DepartmenthomeRoutingModule { }
