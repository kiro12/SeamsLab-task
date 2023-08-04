import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'login',     loadComponent: () => import('src/app/components/login/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule),
  } ,
  {
    path: 'product/:id',
    loadComponent: () => import('src/app/modules/product-details/product-details.component').then(m => m.ProductDetailsComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
