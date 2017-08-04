import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateErrorComponent } from './event-create-error.component';

describe('EventCreateErrorComponent', () => {
  let component: EventCreateErrorComponent;
  let fixture: ComponentFixture<EventCreateErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
