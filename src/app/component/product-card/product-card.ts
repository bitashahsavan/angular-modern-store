import { Component, input ,output ,inject ,computed} from '@angular/core';
import { Product } from '../../models/products';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();

  addToCardCliked = output<Product>();

  store = inject(EcommerceStore);

  isInWishList = computed(() => {
    this.store.wishlistItem().find(p => p.id === this.product().id);
  })
  toggleWishList(product: Product) {}

//   toggleWishList(product: Product) {
//     if(this.isInWishList()) {
// //remove from wishlist
//   }else {
//     this.store.addToWishList(product);
//   }
// }
}
