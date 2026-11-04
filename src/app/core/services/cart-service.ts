import { Injectable, Service, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class CartService {
  public isOpenModal = signal<boolean>(false);
  public onOpenModal(): void {
    this.isOpenModal.set(true);
  }
  public onCloseModal(): void {
    this.isOpenModal.set(false);
  }
}
