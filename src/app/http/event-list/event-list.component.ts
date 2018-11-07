import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: ['']
})
export class EventListComponent implements OnInit {
  events;
  Event:Event[]=[
    { id: 10,
      name: '勉強会',
      image_path: '',
      description: '',
      max_user: 20,
      date: '12/1',
      auth_flg:1
    },
    { id: 11,
      name: '勉強会',
      image_path: '',
      description: '',
      max_user: 20,
      date: '12/20',
      auth_flg:1
    }
  ]

  constructor(
    service: EventService,
  ) {
    this.events = service.getList();
  }

  ngOnInit() {
  }

}
