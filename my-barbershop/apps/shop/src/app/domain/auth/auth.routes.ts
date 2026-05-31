import { Route } from '@angular/router';


export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    canActivate: [],
  }
];
