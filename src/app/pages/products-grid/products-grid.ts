import { Component, effect, inject, input, signal ,computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ProductCard } from '../../component/product-card/product-card';
import { Product } from '../../models/products';
import { EcommerceStore } from '../../ecommerce-store';
import { ToggleWishlistButton } from '../../component/toggle-wishlist-button/toggle-wishlist-button';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ProductCard,
    ToggleWishlistButton,
  ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export default  class ProductsGrid {
  readonly store = inject(EcommerceStore);

  // از پارامتر route (/products/:category) پر می‌شه
  // نیاز به withComponentInputBinding() در provideRouter داره
  readonly category = input<string>('');

  readonly categories = computed<string[]>(() => {
  const unique = new Set(this.store.products().map((p) => p.category));
  return ['all', ...unique];
});

  constructor() {
    effect(() => {
      this.store.setCategory(this.category());
    });
  }

  isInWishList(product: Product): boolean {
    return this.store.wishlistItem().some((p) => p.id === product.id);
  }

  toggleWishList(product: Product): void {
    if (this.isInWishList(product)) {
      this.store.removeFromWishList(product.id);
    } else {
      this.store.addToWishList(product);
    }
  }
}