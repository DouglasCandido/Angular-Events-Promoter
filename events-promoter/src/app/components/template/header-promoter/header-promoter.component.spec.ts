import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPromoterComponent } from './header-promoter.component';

describe('HeaderPromoterComponent', () => {
  let component: HeaderPromoterComponent;
  let fixture: ComponentFixture<HeaderPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
