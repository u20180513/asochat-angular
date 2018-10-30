import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top',
  templateUrl: 'top.component.html',
})
export class TopComponent implements OnInit {
  constructor(
    userService: UserService,
  ) {
    console.log(localStorage.getItem('signed_user'));
  }

  ngOnInit() {
  }
}
