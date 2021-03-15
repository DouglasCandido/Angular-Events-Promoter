import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEnthusiastComponent } from './registration-enthusiast.component';

describe('RegistrationEnthusiastComponent', () => {
  let component: RegistrationEnthusiastComponent;
  let fixture: ComponentFixture<RegistrationEnthusiastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationEnthusiastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationEnthusiastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
