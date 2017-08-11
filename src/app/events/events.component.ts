import { Component, OnInit } from '@angular/core';

import { Event } from './event.model';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  selectedEvent: Event;

  // events: {id: number, createDate: Date, description: string, name: string, statusId: number}[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    // this.events = this.eventsService.getEvents();
    this.eventsService.eventSelected
      .subscribe(
        (event: Event) => {
          this.selectedEvent = event;
        }
      );
  }

}
