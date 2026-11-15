import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../../ecommerce-store';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [ViewPanel, MatIcon, MatAnchor, RouterLink ,MatButtonModule],
  selector: 'app-tease-wishlist',
  styleUrl: './tease-wishlist.css',
  templateUrl: './tease-wishlist.html',
})
export class TeaseWishlist {
  store = inject(EcommerceStore);
}
