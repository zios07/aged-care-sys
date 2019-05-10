import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtRecordsComponent } from './healt-records.component';

describe('HealtRecordsComponent', () => {
  let component: HealtRecordsComponent;
  let fixture: ComponentFixture<HealtRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealtRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealtRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
