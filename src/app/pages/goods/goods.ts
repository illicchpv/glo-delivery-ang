import { Component, computed, inject } from '@angular/core';
import { Product, PRODUCT_CARDS } from '../main/constants';
import { ActivatedRoute } from '@angular/router';

// примерно так было в трансляции
// import { toSignal } from '@angular/core/rxjs-interop';
// import { map } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-goods',
  styleUrl: './goods.scss',
  templateUrl: './goods.html',
})
export class Goods {
  protected readonly products: Product[] = PRODUCT_CARDS;

  private route = inject(ActivatedRoute)

  // примерно так было в трансляции
  // // получаем id из параметров url
  // protected readonly restId = toSignal(
  //   this.route.paramMap.pipe(map(params => params.get('id'))),
  //   { initialValue: this.route.snapshot.paramMap.get('id') }
  // );
  // // товары выбранной категории
  // protected readonly categoryProducts = computed<Product[]>(() => {
  //   const id = Number(this.restId());
  //   const products = this.products.filter((product) => product.categories.includes(id));
  //   return products;
  // });

  // так короче, проще и вроде правильно
  // товары выбранной категории
  protected readonly categoryProducts = computed<Product[]>(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const products = this.products.filter((product) => product.categories.includes(id));
    return products;
  });
}
