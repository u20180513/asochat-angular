import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-top',
  templateUrl: 'top.component.html',
})
export class TopComponent implements OnInit {
  constructor(
    userService: UserService,
  ) { }

  ngOnInit() {
  }
}
