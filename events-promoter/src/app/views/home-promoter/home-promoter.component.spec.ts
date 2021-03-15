import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromoterComponent } from './home-promoter.component';

describe('HomePromoterComponent', () => {
  let component: HomePromoterComponent;
  let fixture: ComponentFixture<HomePromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
