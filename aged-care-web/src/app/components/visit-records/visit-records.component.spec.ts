import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRecordsComponent } from './visit-records.component';

describe('VisitRecordsComponent', () => {
  let component: VisitRecordsComponent;
  let fixture: ComponentFixture<VisitRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
