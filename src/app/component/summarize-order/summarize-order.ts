import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from '../../directives/view-panel';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  imports: [ViewPanel],
  selector: 'app-summarize-order',
  styleUrl: './summarize-order.css',
  templateUrl: './summarize-order.html',
})
export class SummarizeOrder {
  store = inject(EcommerceStore)

  subtotal = computed(() => Math.round(this.store.cartItem().reduce((acc , item) => acc + (item.product.price * item.quantity) , 0)));

  tax = computed(() =>  Math.round(0.05 * this.subtotal()));

  total = computed(() =>  Math.round(this.subtotal() - this.tax()))

}
