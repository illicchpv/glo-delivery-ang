import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
