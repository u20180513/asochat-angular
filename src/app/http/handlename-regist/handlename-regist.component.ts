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
    this.service.regist_name(this.handlename);
  }
}
