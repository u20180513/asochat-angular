import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: ['']
})
export class EventListComponent implements OnInit {
  events;

  constructor(
    service: EventService,
  ) {
    this.events = service.getList();
  }

  ngOnInit() {
  }

}
