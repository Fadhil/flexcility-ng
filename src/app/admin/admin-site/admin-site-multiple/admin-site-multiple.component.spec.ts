import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteMultipleComponent } from './admin-site-multiple.component';

describe('AdminSiteMultipleComponent', () => {
  let component: AdminSiteMultipleComponent;
  let fixture: ComponentFixture<AdminSiteMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
