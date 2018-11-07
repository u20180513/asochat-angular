import { Component, OnInit } from '@angular/core';
import { OpenRoomList } from '../../model/open-room-list';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-open-room-list',
  templateUrl: './open-room-list.component.html',
  styles: ['div{border:}']
})
export class OpenRoomListComponent implements OnInit {

  OpenRoomList;

  openroom:OpenRoomList[]=[
    {RoomName:'OpenRoom1',genre:'ゲーム',member:'10'},
    {RoomName:'OpenRoom2',genre:'ゲーム2',member:'10'},
    {RoomName:'OpenRoom3',genre:'Java',member:'10'},
  ]

  

  constructor(
    private service: RoomService,
    ) { 
      this.OpenRoomList=service.getOList();
    }

  ngOnInit() {
  }

}
