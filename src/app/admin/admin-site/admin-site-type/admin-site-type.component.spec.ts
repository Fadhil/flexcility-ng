import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteTypeComponent } from './admin-site-type.component';

describe('AdminSiteTypeComponent', () => {
  let component: AdminSiteTypeComponent;
  let fixture: ComponentFixture<AdminSiteTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
