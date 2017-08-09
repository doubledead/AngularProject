import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  onCreateEvent(eventName: string) {
    this.eventsService.addEvent(1, new Date, 'Testing event', eventName, 1);
  }

}
