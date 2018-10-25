import { Component, OnInit, Inject } from '@angular/core';
import { Room } from '../../model/room';
import { User } from '../../model/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export const participants: Array<User> = [
  new User(10, 100500, 'test', ''),
  new User(10, 100500, 'test02', ''),
  new User(10, 100500, 'test03', ''),
  new User(10, 100500, 'test04', ''),
  new User(10, 100500, 'test05', ''),
];

export const rooms: Array<Room> = [
  new Room(10,
    new User(10, 100500, 'creator', ''),
    'test0',
    'testing0',
    '',
    participants
  ),
  new Room(10,
    new User(10, 100500, 'creator', ''),
    'test1',
    'testing1',
    'password1',
    participants
  ),
  new Room(10,
    new User(10, 100500, 'creator', ''),
    'test',
    'testing',
    'password',
    participants
  ),
  new Room(10,
    new User(10, 100500, 'creator', ''),
    'test',
    'testing',
    '',
    participants
  ),
];

export interface Data {
  room: Room;
}

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styles: [
      '.room {border: 2px double black;}',
      '.room-name { padding-left: 5px; }',
      '.room-body { padding: 10px; border: 1px solid gray;}',
      '',
    ],
})
export class RoomListComponent implements OnInit {

  public rooms = rooms;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onClick(chose_room: Room): void {
    if (chose_room.getPass() === '') { return; }
    this.dialog.open(RoomDialogComponent, {
      data: {
        room: chose_room,
      }
    });
  }
}

@Component({
  selector: 'app-room-dialog',
  templateUrl: './room-dialog.component.html',
  styles: [
    '.room-dialog { height: 100%; ',
                  ' width: 100%; ',
                  ' padding: 10px; }',
    'input {  width: 100%; ',
                  ' }',
  ],
})
export class RoomDialogComponent {

  public input_char: string;

  constructor(
    public dialogRef: MatDialogRef<RoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Data,
  ) { }

  check() {
    if (this.input_char === this.data.room.getPass()) {
      alert('success');
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
