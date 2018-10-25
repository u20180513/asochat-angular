import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';
// https://qiita.com/ksh-fthr/items/e43dd37bff2e51e95a59
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['input { width: 100%; } ']
})
export class LoginComponent implements OnInit, OnDestroy {
  submitted = false;
  user: User = new User(0, 0, '', '', false);

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('signed_user'));
    if (user.getState()) {
      this.router.navigate(['rooms']);
      console.log('is logined.');
    }
  }

  ngOnDestroy() {
  }

  onSubmit() {
    this.service.login(this.user);
  }
}
