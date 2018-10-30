import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import { User } from '../model/user';

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
