import { Routes } from '@angular/router';
import { LoginComponent } from '../http/login/login.component';
import { TopComponent } from '../http/top/top.component';
import { Error404Component } from '../http/errors/error404';
import { RoomListComponent } from '../http/room-list/room-list.component';
import { AuthGuard } from '../security/auth.guard';
import { componentFactoryName } from '@angular/compiler';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' },
  },
  {
    path: 'logout',
    component: TopComponent,
    data: { title: 'logout' },
    canActivate: [AuthGuard],
  },
  {
    path: 'rooms',
    component: RoomListComponent,
    data: { title: 'rooms' },
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: Error404Component,
    data: { title: '404' },
  }
];
