import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { SignupComponent } from './departmenthome/component/signup/signup.component';
// import { LoginComponent } from './departmenthome/component/login/login.component';
//import { authGuard } from './auth.guard';
//import { authGuard} from './auth.guard';
import { HomeComponent } from './departmenthome/component/home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';








const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  
  
  
  { path: 'home', component: HomeComponent },
  { path: 'mainpage', component: MainpageComponent},

 
  

  {path:'',redirectTo:'/mainpage',pathMatch:'full'},
  {path:'app',component:AppComponent},
 
  
 




  // { path: 'departmenthome', loadChildren: () => import('./departmenthome/departmenthome.module').then(m => m.DepartmenthomeModule) },



 

  { path: 'departmenthome', loadChildren: () => import('./departmenthome/departmenthome.module').then(m => m.DepartmenthomeModule) },

];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
