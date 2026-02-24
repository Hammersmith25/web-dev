import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';

export const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
];
