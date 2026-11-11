import { Component ,inject } from '@angular/core';
import { BackButton } from '../../component/back-button/back-button';
import { EcommerceStore } from '../../ecommerce-store';
import { ProductCard } from '../../component/product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [BackButton , ProductCard ,MatIcon, MatButtonModule],
  selector: 'app-my-wishlist',
  styleUrl: './my-wishlist.css',
  templateUrl: './my-wishlist.html',
})
export default class MyWishlist {
  store = inject(EcommerceStore);

}
