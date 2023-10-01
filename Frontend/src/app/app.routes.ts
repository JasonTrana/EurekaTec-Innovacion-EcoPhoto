import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full',
  },
  {
    path: 'loanding',
    loadComponent: () => import('./loanding/loanding.page').then( m => m.LoandingPage)
  },
  {
    path: 'camara',
    loadComponent: () => import('./camara/camara.page').then( m => m.CamaraPage)
  },
  {
    path: 'resultado',
    loadComponent: () => import('./resultado/resultado.page').then( m => m.ResultadoPage)
  },
  {
    path: 'info',
    loadComponent: () => import('./info/info.page').then( m => m.InfoPage)
  },
];
