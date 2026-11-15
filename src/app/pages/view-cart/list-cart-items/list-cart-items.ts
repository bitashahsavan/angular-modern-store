import { Component , inject} from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';
import { EcommerceStore } from '../../../ecommerce-store';
import { ShowCartItem } from '../../show-cart-item/show-cart-item';

@Component({
  imports: [ViewPanel, ShowCartItem],
  selector: 'app-list-cart-items',
  styleUrl: './list-cart-items.css',
  templateUrl: './list-cart-items.html',
})
export class ListCartItems {
  store = inject(EcommerceStore);
}
