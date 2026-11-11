import { Component, computed, inject, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../models/products';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  templateUrl: './toggle-wishlist-button.html',
  styleUrl: './toggle-wishlist-button.css',
})
export class ToggleWishlistButton {
  constructor() {
  console.log('wishlist button created');
}
  store = inject(EcommerceStore);
  product = input.required<Product>();

  isActive = computed(() =>
    this.store.wishlistItem().some(p => p.id === this.product().id)
  );

  toggle() {
   
    if (this.isActive()) {
      this.store.removeFromWishList(this.product().id);
    } else {
      this.store.addToWishList(this.product());
    }
  }
}