import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {

  constructor(private eventsService: EventsService) {
    this.eventsService.statusUpdated.subscribe(
      (statusId: number) => alert('New Status: ' + statusId)
    );
  }

  onCreateEvent(eventName: string) {
    this.eventsService.addEvent(1, new Date, 'Testing event', eventName, 1);
  }

}
