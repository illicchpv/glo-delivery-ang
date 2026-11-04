import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CartModal } from '../cart-modal/cart-modal';

@Component({
  imports: [RouterOutlet, Header, Footer, CartModal],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('delivery-ang');
}
