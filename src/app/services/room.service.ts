import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import { User } from '../model/user';
import { OpenRoom } from '../http/userscreen/openroom';
import { OpenRoomList } from '../model/open-room-list';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
  ) { }

  public getList() {
    // GET
    const rooms: Array<Room> = test_rooms;
    return rooms;
  }

  public getOList(){
    const orooms:Array<OpenRoomList>=testopenroom;
    return orooms;
  }
}


export const participants: Array<User> = [
  new User(10, 100500, 'test', ''),
  new User(10, 100500, 'test02', ''),
  new User(10, 100500, 'test03', ''),
  new User(10, 100500, 'test04', ''),
  new User(10, 100500, 'test05', ''),
];

export const test_rooms: Array<Room> = [
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


export const testopenroom: Array<OpenRoomList>=[
  new OpenRoomList(
    'room1',
    'ゲーム',
    10
  ),
  new OpenRoomList(
    'room2',
    'ゲーム2',
    10
  ),
  new OpenRoomList(
    'room3',
    'ゲーム',
    10
  ),
];