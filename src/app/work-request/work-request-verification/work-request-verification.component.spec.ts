import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestVerificationComponent } from './work-request-verification.component';

describe('WorkRequestVerificationComponent', () => {
  let component: WorkRequestVerificationComponent;
  let fixture: ComponentFixture<WorkRequestVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRequestVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
