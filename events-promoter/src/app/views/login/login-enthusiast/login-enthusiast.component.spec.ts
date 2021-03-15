import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnthusiastComponent } from './login-enthusiast.component';

describe('LoginEnthusiastComponent', () => {
  let component: LoginEnthusiastComponent;
  let fixture: ComponentFixture<LoginEnthusiastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEnthusiastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEnthusiastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
