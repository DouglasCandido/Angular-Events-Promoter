import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteNewEventComponent } from './promote-new-event.component';

describe('PromoteNewEventComponent', () => {
  let component: PromoteNewEventComponent;
  let fixture: ComponentFixture<PromoteNewEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteNewEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
