import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';

@Component({
  selector: 'app-event-list-admin',
  templateUrl: './event-list-admin.component.html',
  styles: ['p{font-size:22px;}',
          'th,td{border:1px solid #000;}'
]
})
export class EventListAdminComponent implements OnInit {

  constructor() { }

  Event:Event[]=[
    { id: 10,
      name: '勉強会',
      image_path: '',
      description: '',
      max_user: 20,
      date: '12/1',
      auth_flg:1
    },
    { id: 11000,
      name: '勉強会２',
      image_path: '',
      description: '○○○○○',
      max_user: 20,
      date: '12/20',
      auth_flg:1
    }
  ];

  ngOnInit() {
  }

}
