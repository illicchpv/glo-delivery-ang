import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  imports: [],
  selector: 'app-cart-modal',
  styleUrl: './cart-modal.scss',
  templateUrl: './cart-modal.html',
})
export class CartModal {
  protected readonly cartService = inject(CartService);
  protected onCloseModal(): void {
    this.cartService.onCloseModal()
  }
}
