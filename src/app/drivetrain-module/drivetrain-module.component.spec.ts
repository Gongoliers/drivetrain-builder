import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivetrainModuleComponent } from './drivetrain-module.component';

describe('DrivetrainModuleComponent', () => {
  let component: DrivetrainModuleComponent;
  let fixture: ComponentFixture<DrivetrainModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivetrainModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivetrainModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
