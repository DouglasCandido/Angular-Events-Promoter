import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPastPromotedEventsComponent } from './my-past-promoted-events.component';

describe('MyPastPromotedEventsComponent', () => {
  let component: MyPastPromotedEventsComponent;
  let fixture: ComponentFixture<MyPastPromotedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPastPromotedEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPastPromotedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
