import { Component, computed, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Category } from './category.model';
import { CATEGORY } from './category.data';
import { Product } from './product.model';
import { PRODUCTS } from './products.data';
import { ProductListComponent } from './product-list-component/product-list-component';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = CATEGORY;
  products: Product[] = PRODUCTS.map((product) => ({ ...product }));
  selectedCategoryId = signal<number | null>(null);

  constructor(private router: Router) {}

  selectedProducts = computed(() => {
    const selectedId = this.selectedCategoryId();
    if (selectedId === null) {
      return [];
    }

    return this.products.filter((product) => product.categoryID === selectedId);
  });

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }

  isProductRoute(): boolean {
    return this.router.url.startsWith('/product/');
  }
}
