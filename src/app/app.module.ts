import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './http/login/login.component';
import { routes } from './router/map';
import { RouterModule } from '@angular/router';
import { TopComponent } from './http/top/top.component';
import { Error404Component } from './http/errors/error404';
import { RoomListComponent, RoomDialogComponent } from './http/room-list/room-list.component';
import { HeaderComponent } from './http/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HandlenameRegistComponent } from './http/handlename-regist/handlename-regist.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './http/footer/footer.component';
import { LogoutComponent } from './http/logout/logout.component';
import { UserListComponent } from './http/user-list/user-list.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    TopComponent,
    RoomListComponent,
    Error404Component,
    HeaderComponent,
    RoomDialogComponent,
    HandlenameRegistComponent,
    FooterComponent,
    LogoutComponent,
    UserListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RoomDialogComponent,
  ]
})
export class AppModule { }
