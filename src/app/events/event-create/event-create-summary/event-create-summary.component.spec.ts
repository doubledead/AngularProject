import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateSummaryComponent } from './event-create-summary.component';

describe('EventCreateSummaryComponent', () => {
  let component: EventCreateSummaryComponent;
  let fixture: ComponentFixture<EventCreateSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
