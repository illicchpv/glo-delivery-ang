import { Component, inject, signal } from '@angular/core';
import { REST_CARDS } from './constants';
import { CartService } from '../../core/services/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-main',
  styleUrl: './main.scss',
  templateUrl: './main.html',
  // providers: [CartService],
})
export class Main {
  protected readonly rests = REST_CARDS;

  protected readonly cartService = inject(CartService);
  protected onCloseModal(): void {

  }
}
