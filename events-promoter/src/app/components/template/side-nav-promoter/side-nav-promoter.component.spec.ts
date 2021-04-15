import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavPromoterComponent } from './side-nav-promoter.component';

describe('SideNavPromoterComponent', () => {
  let component: SideNavPromoterComponent;
  let fixture: ComponentFixture<SideNavPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
