import { Component } from '@angular/core';
import { Product, PRODUCT_CARDS } from '../main/constants';

@Component({
  imports: [],
  selector: 'app-goods',
  styleUrl: './goods.scss',
  templateUrl: './goods.html',
})
export class Goods {
  protected readonly products: Product[] = PRODUCT_CARDS;
}
