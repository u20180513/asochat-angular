import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-handlename-regist',
  templateUrl: './handlename-regist.component.html',
  styleUrls: ['./handlename-regist.component.css']
})
export class HandlenameRegistComponent implements OnInit {
  handlename: string;

  constructor(
    private service: UserService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const user: User = JSON.parse(localStorage.getItem('signed_user'));

    user.name = this.handlename;

    this.service.regist_name(this.handlename);
  }

  checkData() {
    return localStorage.getItem('signed_user');
  }
}
