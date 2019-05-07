import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseVisitingComponent } from './nurse-visiting.component';

describe('NurseVisitingComponent', () => {
  let component: NurseVisitingComponent;
  let fixture: ComponentFixture<NurseVisitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseVisitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseVisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
