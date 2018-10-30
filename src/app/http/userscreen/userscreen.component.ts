import { Component, OnInit } from '@angular/core';
import { OpenRoom } from './openroom';
/**
 * import { OPENROOMS } from './mock-OpenRooms';
 */
/**
 * not push
 */
@Component({
  selector: 'app-http-userscreen',
  templateUrl: './userscreen.component.html',
  styles: ['']
})

export class UserScreenComponent implements OnInit {

  openroom: OpenRoom = {
    RoomName: '雑談',
    genre: 'アニメ',
    member: 3,
    host: 'kohei'
  };

  // openrooms = OPENROOMS;

  constructor() { }

  ngOnInit() {
  }
}
