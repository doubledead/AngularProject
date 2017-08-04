import { Component, Input, OnInit } from '@angular/core';

import { Event } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // @Input() events;
  events: Event[] = [
    new Event(
      1,
      'A test event',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      'Test 1'
    ),
    new Event(
      2,
      'A test event',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      'Test 2'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
