import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateGuestsComponent } from './event-create-guests.component';

describe('EventCreateGuestsComponent', () => {
  let component: EventCreateGuestsComponent;
  let fixture: ComponentFixture<EventCreateGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
