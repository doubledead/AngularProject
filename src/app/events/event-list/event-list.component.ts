import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [
    new Event(
      1,
      new Date(),
      'Event1 Test',
      'Test 1',
      1
    ),
    new Event(
      2,
      new Date(),
      'Event2 Test',
      'Test 2',
      1
    )
  ];


  constructor() { }

  ngOnInit() {
  }

}
