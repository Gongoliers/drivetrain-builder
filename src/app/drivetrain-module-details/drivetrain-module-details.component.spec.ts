import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivetrainModuleDetailsComponent } from './drivetrain-module-details.component';

describe('DrivetrainModuleDetailsComponent', () => {
  let component: DrivetrainModuleDetailsComponent;
  let fixture: ComponentFixture<DrivetrainModuleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivetrainModuleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivetrainModuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
