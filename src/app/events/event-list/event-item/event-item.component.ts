import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Event } from '../../event.model';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
  // Custom property
  // @Input() event: {id: number, description: string, imagePath: string, name: string};
  // Custom property alias
  // @Input('ev') event: {id: number, description: string, imagePath: string, name: string};
  // Custom property using Event model
  @Input() event: Event;
  @Input() id: number;

  constructor(private eventsService: EventsService) { }

  onSetTo(statusId: number) {
    this.eventsService.updateStatus(this.id, statusId);
    this.eventsService.statusUpdated.emit(statusId);
  }

  onSelected() {
    this.eventsService.eventSelected.emit(this.event);
  }

}
