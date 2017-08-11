import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event.model';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  // events: {id: number, createDate: Date, description: string, name: string, statusId: number}[] = [];
  events: Event[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

}
