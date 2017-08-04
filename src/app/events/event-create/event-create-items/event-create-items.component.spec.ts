import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateItemsComponent } from './event-create-items.component';

describe('EventCreateItemsComponent', () => {
  let component: EventCreateItemsComponent;
  let fixture: ComponentFixture<EventCreateItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
