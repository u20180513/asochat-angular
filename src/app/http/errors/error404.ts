import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: '<app-header></app-header><div class="container"><h1>404, page is not found...</h1></div>',
  styles: ['div { padding: 10px; } '],
})
export class Error404Component implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
