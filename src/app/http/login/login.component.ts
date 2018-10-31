import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined, isNull } from 'util';
// https://qiita.com/ksh-fthr/items/e43dd37bff2e51e95a59
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['input { width: 100%; } ']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = new User();

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onSubmit() {
    // console.log(JSON.stringify(this.user));
    if (this.user.num.toString.length === 10) {
      if (this.user.password.length >= 8
          && this.user.password.length <= 200) {
          this.service.login(this.user);
      }
    }
    this.service.login(this.user);
  }
}
