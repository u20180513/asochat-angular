import { Routes } from '@angular/router';
import { LoginComponent } from '../http/login/login.component';
import { TopComponent } from '../http/top/top.component';
import { Error404Component } from '../http/errors/error404';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
    data: { title: 'top' },
  },
  {
    path: 'top',
    component: TopComponent,
    data: { title: 'top' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' },
  }
];
