import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top',
  template: '<app-login></app-login>',
})
export class TopComponent implements OnInit {
  constructor(
    userService: UserService,
  ) { }

  ngOnInit() {
  }
}
