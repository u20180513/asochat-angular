import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './http/login/login.component';
import { routes } from './router/map';
import { RouterModule } from '@angular/router';
import { TopComponent } from './http/top/top.component';
import { Error404Component } from './http/errors/error404';
import { AdminComponent } from './http/admin/admin.component';
import { RoomManagementComponent } from './http/room-management/room-management.component';
import { UserListComponent } from './http/user-list/user-list.component';
import { EventListAdminComponent } from './http/event-list-admin/event-list-admin.component';
import { from } from 'rxjs';
import { OpenRoomListComponent } from './http/open-room-list/open-room-list.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    TopComponent,
    Error404Component,
    AdminComponent,
    EventListAdminComponent,
    RoomManagementComponent,
    UserListComponent,
    OpenRoomListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
