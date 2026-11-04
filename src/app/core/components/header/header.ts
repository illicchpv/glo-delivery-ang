import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly cartService = inject(CartService);
  protected onOpenModal(): void {
    console.log('onOpenModal: ');
    this.cartService.onOpenModal();
  }
}
