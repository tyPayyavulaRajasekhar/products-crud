import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';

const routes: Routes = [
  { component: ViewProductsComponent, path: '' },
  { component: AddProductsComponent, path: 'add-products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
