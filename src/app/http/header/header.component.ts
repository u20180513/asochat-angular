import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from '../../services/user.service';
import { isNull } from 'util';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private service: UserService,
    private router: Router,
  ) {
    if (!isNull(localStorage.getItem('signed_user'))) {
      this.user = JSON.parse(localStorage.getItem('signed_user'));
    } else {
      this.user = new User(0, 0, '', '', false);
    }
  }

  ngOnInit() {
  }

  logout() {
    // this.user.state = false;
    console.log('logout');
    /*
    if (this.service.logout()) {
      this.router.navigate(['top']);
    } else {
      console.log('can not logout');
    }
    */
  }
}
