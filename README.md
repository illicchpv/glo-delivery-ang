# интенсив - Сервис доставки еды


- copy figma 
https://www.figma.com/design/mTDniLKKWSVnSsUNAtyNlF/Delivery-Food--Copy---Copy-?node-id=230-22216&p=f&t=nf1GbtHTNMN635In-0
- github
https://github.com/illicchpv/glo-delivery-ang


## День 1. Вёрстка шапки и подвала

### На уроке
- Познакомимся с основами HTML и CSS
- Рассмотрим основные принципы верстки страниц
- Сверстаем скелет страницы


### Материалы
- 📎 Исходники проекта (GitHub) [Открыть](https://github.com/shelser/delivery)
- 📎Макет FIGMA [Открыть](https://www.figma.com/file/jvdXKoLWJcJOX3nwiSyfCo/Delivery-Food)
- 📎HTML справочник [Открыть](https://webref.ru/html)
- 📎CSS справочник [Открыть](https://webref.ru/css)
- 📎Шпаргалка по Flexbox CSS [Открыть](https://tpverstak.ru/flex-cheatsheet/)

### ★ Домашнее задание
#### ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ
- Скачать исходники по ссылке под видео
- Повторить код за уроком
- Результат необходимо залить на github или прикрепить архивом

#### УСЛОЖНЕННОЕ ЗАДАНИЕ
- Пройти игру по ссылке и прикрепить скрин результата
- Результат необходимо залить на github или прикрепить архивом



## День 2. Вёрстка главной страницы

### На уроке
- Закончим верстку шапки и подвала
- Сверстаем основной блок контента с карточками

### ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ
- Повторить код за уроком

### УСЛОЖНЕННОЕ ЗАДАНИЕ
- Вырезать все картинки ресторанов в папку rests внутри папки images в формате jpg
- Вырезать все картинки товаров в папку goods внутри папки images в формате jpg


## День 3. Вторая страница и модальное окно

### На уроке
- Сверстаем вторую страницу
- Сверстаем модальное окно

### ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ
- Повторить код за уроком

### УСЛОЖНЕННОЕ ЗАДАНИЕ
- Закончить перенос информации из Figma в карточки ресторанов и товаров
- Сделать пункты списка в футере (подвале) ссылками на goods.html


## День 4. JavaScript

### На уроке
- Получим элементы со страницы
- Открытие/закрытие модального окна
- Динамический вывод элементов

### Материалы
📎Fetch: запросы к серверу [Открыть](https://learn.javascript.ru/fetch)
📎Переменные [Открыть](https://learn.javascript.ru/variables)
📎Var, let или const? [Открыть](https://habr.com/ru/company/ruvds/blog/420359/)
📎Функции [Открыть](https://learn.javascript.ru/function-basics)
📎Условия [Открыть](https://learn.javascript.ru/ifelse)
📎Браузерные события [Открыть](https://learn.javascript.ru/introduction-browser-events)
📎Поиск: getElement*, querySelector* [Открыть](https://learn.javascript.ru/searching-elements-dom)
📎JSONPlaceholder: тестовые данные [Открыть](https://jsonplaceholder.typicode.com/posts)


### ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ
- Повторить код за уроком 

### УСЛОЖНЕННОЕ ЗАДАНИЕ
- Реализовать логический блок goodsFunc в котором повторить логику из restsFunc, но для страницы goods.html
- Карточки товаров на странице goods.html должны выводиться из одного и того же массива для каждого ресторана
- Проверить на наличие ошибок в консоли на обеих страничках


## лайвкодинг angular.dev - https://www.youtube.com/live/xgALDrrft6o

### github результатов проекта с vue-2  [github](https://github.com/Velmoren/delivery-vue-2) 

https://angular.dev/installation

Install Angular CLI
```npm install -g @angular/cli```

Create a new project
```ng new <project-name>```

переместил всё что было в директорию .old

из директории d:\MyLearn\glo-academy\delivery-ang
>ng new delivery-ang

из корня проекта D:\MyLearn\glo-academy\delivery-ang\delivery-ang
> npm install

до переноса верстки https://youtu.be/xgALDrrft6o?t=1485

создаём компонент  https://angular.dev/cli/generate/component
>ng generate component <имя_компонента>

>ng generate component pages/main


закончил тут - https://youtu.be/xgALDrrft6o?t=2123

установил \Angular Language Service\

созданы компоненты -
> ng generate component core/components/header
> ng generate component core/components/footer

вывод карточек ресторанов их массива rests до https://youtu.be/xgALDrrft6o?t=3663 

создаём сервис
>ng generate service core/services/cart-service

создаём компонент cart-modal и переносим туда html из main
> ng generate component core/components/cart-modal


закончил тут - https://youtu.be/xgALDrrft6o?t=4931

подключили cart-modal. открывается закрывается.

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

## недоделки которые придётся делать самому.
- закрытие Корзины по клику на .cart-modal__overlay
- на стр. goods.html - реализовать кнопку "Корзина"
- в "Корзина" реализовать управление содержимым (
    - удаление товара, 
    - увеличение/уменьшение количества, 
    - обновление общей цены
    - отправка заказа
    )
- на стр. main реализовать "поиск блюд и ресторанов"
- реализовать кнопку [войти]
  - для авторизованных пользователей
      - позволять лайкать товары
      - ? страница "избранное"

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

# DeliveryAng

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
