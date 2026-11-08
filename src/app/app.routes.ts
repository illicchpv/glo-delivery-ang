import { Routes } from '@angular/router';
import { Main } from './pages/main/main';

export const routes: Routes = [
  {
    path: '',
    // component: Main, // можно так
    loadComponent: () => import('./pages/main/main').then(c => c.Main), // эффективнее так
  },
  {
    path: 'goods/:id',
    loadComponent: () => import('./pages/goods/goods').then(c => c.Goods),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
