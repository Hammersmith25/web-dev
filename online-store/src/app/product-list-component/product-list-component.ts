import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Product } from '../product.model';
import { ProductItemComponent } from '../product-item-component/product-item-component';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products = input<Product[]>([]);
  visibleProducts = signal<Product[]>([]);

  ngOnChanges(): void {
    this.visibleProducts.set(this.products().map((product) => ({ ...product })));
  }

  onDeleteProduct(productId: number): void {
    this.visibleProducts.set(
      this.visibleProducts().filter((product) => product.id !== productId)
    );
  }
}
