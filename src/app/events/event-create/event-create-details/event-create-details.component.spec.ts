import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateDetailsComponent } from './event-create-details.component';

describe('EventCreateDetailsComponent', () => {
  let component: EventCreateDetailsComponent;
  let fixture: ComponentFixture<EventCreateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
