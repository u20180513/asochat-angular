import { Component, OnInit } from '@angular/core';
import { OpenRoom } from './openroom';

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


  constructor() { }

  ngOnInit() {
  }
}
