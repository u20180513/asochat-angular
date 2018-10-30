import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  public getList() {
    // GET
    const events: Array<Event> = test_events;
    return events;
  }
}

export const test_events: Array<Event> = [
  new Event(10, 'java勉強会', '', '', 5, ''),
];
