import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-item-component.html',
  styleUrl: './product-item-component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  deleteProduct = output<number>();

  telegramIcon = 'icons/telegram.png';
  whatsappIcon = 'icons/whatsapp.png';

  likeProduct(): void {
    this.product().likes += 1;
  }

  removeProduct(): void {
    this.deleteProduct.emit(this.product().id);
  }

  shareOnWhatsApp(): void {
    const product = this.product();
    const text = encodeURIComponent(`Check out this product: ${product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const product = this.product();
    const encodedUrl = encodeURIComponent(product.link);
    const encodedName = encodeURIComponent(product.name);
    window.open(
      `https://t.me/share/url?url=${encodedUrl}&text=${encodedName}`,
      '_blank'
    );
  }
}
