import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { EcommerceStore } from '../../ecommerce-store';


@Component({
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBadge, MatBadge],
  selector: 'app-header-actions',
  styleUrl: './header-actions.css',
  templateUrl: './header-actions.html',
})
export class HeaderActions {
  private readonly router = inject(Router);

  store = inject(EcommerceStore);

  favorite() {
    this.router.navigate(['/wishlist']);
  }

  cart() {
    console.log('Cart clicked');
  }

  signIn() {
    console.log('Sign In clicked');
  }

  signUp() {
    console.log('Sign Up clicked');
  }
}
