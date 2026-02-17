import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../product.model';
import { PRODUCTS } from '../products.data';

@Component({
  selector: 'app-product-detail-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css',
})
export class ProductDetailComponent {
  product: Product | undefined;
  selectedImage = '';
  telegramIcon = 'icons/telegram.png';
  whatsappIcon = 'icons/whatsapp.png';

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find((item) => item.id === id);
    this.selectedImage = this.product?.image ?? '';
  }

  setImage(image: string): void {
    this.selectedImage = image;
  }

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
