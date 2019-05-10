import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInboxComponent } from './doctor-inbox.component';

describe('DoctorInboxComponent', () => {
  let component: DoctorInboxComponent;
  let fixture: ComponentFixture<DoctorInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
