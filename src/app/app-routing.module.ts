import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard/home/home.component';
import { ProductComponent } from './dashboard/product/product.component';


const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'product/:id', component: ProductComponent },
  { path: '**' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
