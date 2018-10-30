import { Routes } from '@angular/router';
import { LoginComponent } from '../http/login/login.component';
import { TopComponent } from '../http/top/top.component';
import { Error404Component } from '../http/errors/error404';
import { RoomListComponent } from '../http/room-list/room-list.component';
import { AuthGuard } from '../security/auth.guard';
import { OpenRoomListComponent } from '../http/open-room-list/open-room-list.component';
import { EventListComponent } from '../http/event-list/event-list.component';
import { UserScreenComponent } from '../http/userscreen/userscreen.component';
import { QuestionListComponent } from '../http/question-list/question-list.component';
import { LogoutComponent } from '../http/logout/logout.component';
import { HandlenameRegistComponent } from '../http/handlename-regist/handlename-regist.component';
import { FirstLoginGuard } from '../security/first-login.guard';

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
  },
  {
    path: 'logout',
    component: LogoutComponent,
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
    path: 'new-name',
    component: HandlenameRegistComponent,
    data: { title: 'rooms' },
    canActivate: [AuthGuard, FirstLoginGuard],
  },
  /*
  {
    path: 'rooms/open',
    component: OpenRoomListComponent,
    data: { title: 'Open rooms' },
    canActivate: [AuthGuard],
  },
  {
    path: 'events',
    component: EventListComponent,
    data: { title: 'event list' },
    canActivate: [AuthGuard],
  },
  {
    path: 'questions',
    component: QuestionListComponent,
    data: { title: 'question list' },
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: UserScreenComponent,
    data: { title: 'my page' },
    canActivate: [AuthGuard],
  },
  */
  {
    path: '**',
    component: Error404Component,
    data: { title: '404' },
  }
];
