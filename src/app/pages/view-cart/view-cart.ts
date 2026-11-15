import { Component } from '@angular/core';
import { BackButton } from '../../component/back-button/back-button';
import { ListCartItems } from '../../pages/view-cart/list-cart-items/list-cart-items';
import { TeaseWishlist } from './tease-wishlist/tease-wishlist';
import { SummarizeOrder } from '../../component/summarize-order/summarize-order';

@Component({
  imports: [ BackButton, ListCartItems ,TeaseWishlist , SummarizeOrder],
  selector: 'app-view-cart',
  styleUrl: './view-cart.css',
  templateUrl: './view-cart.html',
})
export  default class ViewCart {}
