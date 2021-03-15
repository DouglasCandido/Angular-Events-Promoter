import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnthusiastComponent } from './home-enthusiast.component';

describe('HomeEnthusiastComponent', () => {
  let component: HomeEnthusiastComponent;
  let fixture: ComponentFixture<HomeEnthusiastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEnthusiastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnthusiastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
