import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  // Custom property
  // @Input() event: {id: number, description: string, imagePath: string, name: string};
  // Custom property alias
  // @Input('ev') event: {id: number, description: string, imagePath: string, name: string};
  @Input('ev') event: Event;

  constructor() { }

  ngOnInit() {
  }

}
