import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['']
})
export class LoginComponent implements OnInit {
  submitted = false;
  user = new User(10, 'test');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    alert(this.diagnostic);
  }

  get diagnostic() { return JSON.stringify(this.user); }
}
