import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPromoterComponent } from './registration-promoter.component';

describe('RegistrationPromoterComponent', () => {
  let component: RegistrationPromoterComponent;
  let fixture: ComponentFixture<RegistrationPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
