import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-http-user-list',
  templateUrl: './user-list.component.html',
  styles: ['th,td{border:1px solid }']
})
export class UserListComponent implements OnInit {

  userlist;


  constructor(
    private service: UserService, 
  ) {
    this.userlist = service.getUserList();
   }

  ngOnInit() {
  }

}
