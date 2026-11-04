import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-main',
  styleUrl: './main.scss',
  templateUrl: './main.html',
})
export class Main {
  protected readonly rests = [
    {
      id: 1,
      title: 'Пицца плюс',
      time: '50',
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      img: 'image1.jpg',
    },
    {
      id: 2,
      title: 'Тануки',
      time: '51',
      rating: 4.6,
      price: 900,
      type: 'Пицца',
      img: 'image2.jpg',
    },
    {
      id: 3,
      title: 'FoodBand',
      time: '52',
      rating: 4.7,
      price: 902,
      type: 'Пицца',
      img: 'image3.jpg',
    },
    {
      id: 4,
      title: 'Жадина-пицца',
      time: '53',
      rating: 4.8,
      price: 904,
      type: 'Пицца',
      img: 'image4.jpg',
    },
    {
      id: 5,
      title: 'Точка еды',
      time: '50',
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      img: 'image5.jpg',
    },
    {
      id: 6,
      title: 'PizzaBurger',
      time: '50',
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      img: 'image6.jpg',
    },
  ]


}
