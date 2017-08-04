import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateNameComponent } from './event-create-name.component';

describe('EventCreateNameComponent', () => {
  let component: EventCreateNameComponent;
  let fixture: ComponentFixture<EventCreateNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
