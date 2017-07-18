import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteSingleComponent } from './admin-site-single.component';

describe('AdminSiteSingleComponent', () => {
  let component: AdminSiteSingleComponent;
  let fixture: ComponentFixture<AdminSiteSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
