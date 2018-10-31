import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router,
  ) {
    this.service.logout();
  }

  ngOnInit() {
  }

}
