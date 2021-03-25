import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEnthusiastComponent } from './header-enthusiast.component';

describe('HeaderEnthusiastComponent', () => {
  let component: HeaderEnthusiastComponent;
  let fixture: ComponentFixture<HeaderEnthusiastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEnthusiastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEnthusiastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
