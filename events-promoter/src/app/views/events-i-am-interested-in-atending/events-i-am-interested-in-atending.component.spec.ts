import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsIAmInterestedInAtendingComponent } from './events-i-am-interested-in-atending.component';

describe('EventsIAmInterestedInAtendingComponent', () => {
  let component: EventsIAmInterestedInAtendingComponent;
  let fixture: ComponentFixture<EventsIAmInterestedInAtendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsIAmInterestedInAtendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsIAmInterestedInAtendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
