import { Component, input ,inject, computed} from '@angular/core';
import type { CartItem } from '../../models/cart';
import { QtySelector } from '../../component/qty-selector/qty-selector';
import { EcommerceStore } from '../../ecommerce-store';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelector , MatButtonModule ,MatIcon],
  templateUrl: './show-cart-item.html',
  styleUrl: './show-cart-item.css',
})
export class ShowCartItem {
  item = input.required<CartItem>();
  
  store = inject(EcommerceStore);

  total = computed(() => (this.item().product.price * this.item().quantity).toFixed(2))
}