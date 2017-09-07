import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderClosedEditComponent } from './admin-work-order-closed-edit.component';

describe('AdminWorkOrderClosedEditComponent', () => {
  let component: AdminWorkOrderClosedEditComponent;
  let fixture: ComponentFixture<AdminWorkOrderClosedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderClosedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderClosedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
