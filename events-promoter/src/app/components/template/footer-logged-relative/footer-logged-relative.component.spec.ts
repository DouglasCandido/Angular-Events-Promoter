import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoggedRelativeComponent } from './footer-logged-relative.component';

describe('FooterLoggedRelativeComponent', () => {
  let component: FooterLoggedRelativeComponent;
  let fixture: ComponentFixture<FooterLoggedRelativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLoggedRelativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLoggedRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
