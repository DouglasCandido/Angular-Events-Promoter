import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavEnthusiastComponent } from './side-nav-enthusiast.component';

describe('SideNavEnthusiastComponent', () => {
  let component: SideNavEnthusiastComponent;
  let fixture: ComponentFixture<SideNavEnthusiastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavEnthusiastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavEnthusiastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
