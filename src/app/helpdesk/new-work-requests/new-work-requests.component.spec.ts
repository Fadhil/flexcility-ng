import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkRequestsComponent } from './new-work-requests.component';

describe('NewWorkRequestsComponent', () => {
  let component: NewWorkRequestsComponent;
  let fixture: ComponentFixture<NewWorkRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWorkRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
