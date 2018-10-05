import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './http/login/login.component';
import { routes } from './router/map';
import { RouterModule } from '@angular/router';
import { TopComponent } from './http/top/top.component';
import { Error404Component } from './http/errors/error404';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
