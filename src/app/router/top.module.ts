import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from '../http/top/top.component';


export const routes: Routes = [
  {
    path: 'top',
    component: TopComponent,
    data: { title: 'Top' },
  }
];

@NgModule({
  declarations: [
    TopComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [TopComponent]
})
export class AppModule { }
