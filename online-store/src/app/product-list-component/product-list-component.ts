import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';
import { PRODUCTS } from '../products.data';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;
  telegramIcon = 'icons/telegram.png';
  whatsappIcon = 'icons/whatsapp.png';

  shareOnWhatsApp(product: Product): void {
    const text = encodeURIComponent(`Check out this product: ${product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const encodedUrl = encodeURIComponent(product.link);
    const encodedName = encodeURIComponent(product.name);
    window.open(
      `https://t.me/share/url?url=${encodedUrl}&text=${encodedName}`,
      '_blank'
    );
  }
}
