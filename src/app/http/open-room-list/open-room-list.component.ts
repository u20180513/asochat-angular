import { Component, OnInit } from '@angular/core';
import { OPENROOMLIST } from'./mock-openroomlist';

@Component({
  selector: 'app-open-room-list',
  templateUrl: './open-room-list.component.html',
  styles: ['']
})
export class OpenRoomListComponent implements OnInit {

  openroomlist = OPENROOMLIST;

  constructor() { }

  ngOnInit() {
  }

}
