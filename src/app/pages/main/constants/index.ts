

export const REST_CARDS = [
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

export interface Product {
  id: number;
  title: string;
  info: string;
  price: number;
  img: string;
}
export const PRODUCT_CARDS: Product[] = [
  {
    id: 1,
    title: 'Ролл угорь стандарт',
    info: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
    price: 250,
    img: 'image1.jpg',
  },
  {
    id: 2,
    title: 'Калифорния лосось стандарт',
    info: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
    price: 395,
    img: 'image2.jpg',
  },
  {
    id: 3,
    title: 'Окинава стандарт',
    info: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
    price: 250,
    img: 'image3.jpg',
  },
  {
    id: 4,
    title: 'Цезарь маки хl',
    info: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
    price: 250,
    img: 'image4.jpg',
  },
  {
    id: 5,
    title: 'Ясай маки стандарт 185 г',
    info: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
    price: 250,
    img: 'image5.jpg',
  },
  {
    id: 6,
    title: 'Ролл с креветкой стандарт',
    info: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
    price: 250,
    img: 'image6.jpg',
  },
]
