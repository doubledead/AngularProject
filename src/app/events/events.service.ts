import { EventEmitter, Injectable } from '@angular/core';
import { Event } from './event.model';

import { LoggingService } from '../shared/services/logging.service';

@Injectable()
export class EventsService {

  eventsList: Event[] = [
    {id: 1, createDate: new Date(), description: 'Event1', name: 'Event', statusId: 1},
    {id: 2, createDate: new Date(), description: 'Event2', name: 'Event 2', statusId: 1},
    {id: 3, createDate: new Date(), description: 'Event3', name: 'Event 3', statusId: 1}
  ];

  constructor(private loggingService: LoggingService) { }

  statusUpdated = new EventEmitter<number>();

  addEvent(id: number, createDate: Date, description: string, name: string, statusId: number) {
    this.eventsList.push({
      id: id,
      createDate: createDate,
      description: description,
      name: name,
      statusId: statusId
    });
    this.loggingService.logStatusChange(statusId);
  }

}
