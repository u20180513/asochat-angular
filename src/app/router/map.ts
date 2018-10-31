import { Routes } from '@angular/router';
import { LoginComponent } from '../http/login/login.component';
import { TopComponent } from '../http/top/top.component';
import { Error404Component } from '../http/errors/error404';
import { OpenRoomListComponent} from'../http/open-room-list/open-room-list.component';
import { AdminComponent} from'../http/admin/admin.component';
import { EventListAdminComponent} from'../http/event-list-admin/event-list-admin.component';
import { RoomManagementComponent} from'../http/room-management/room-management.component';
import { UserListComponent} from'../http/user-list/user-list.component';


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
    path: 'open-room-list',
    component: OpenRoomListComponent,
    data: { title: 'open-room-list' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' },
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { title: 'admin' },
  },
  {
    path: 'event-list-admin',
    component: EventListAdminComponent,
    data: { title: 'event-list-admin' },
  },
  {
    path: 'room-management',
    component: RoomManagementComponent,
    data: { title: 'room-management' },
  },
  {
    path: 'user-list',
    component: UserListComponent,
    data: { title: 'user-list' },
  }
];
