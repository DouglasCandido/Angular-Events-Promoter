import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurrentPromotingEventsComponent } from './my-current-promoting-events.component';

describe('MyCurrentPromotingEventsComponent', () => {
  let component: MyCurrentPromotingEventsComponent;
  let fixture: ComponentFixture<MyCurrentPromotingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCurrentPromotingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCurrentPromotingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
