import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [
    {id: 1, created: new Date(), name: 'Event', status: 'new'},
    {id: 2, created: new Date(), name: 'Event 2', status: 'new'},
    {id: 3, created: new Date(), name: 'Event 3', status: 'new'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
