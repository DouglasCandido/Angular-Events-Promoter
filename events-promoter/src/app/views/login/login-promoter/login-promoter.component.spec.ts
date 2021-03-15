import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPromoterComponent } from './login-promoter.component';

describe('LoginPromoterComponent', () => {
  let component: LoginPromoterComponent;
  let fixture: ComponentFixture<LoginPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
