import { TestBed } from '@angular/core/testing';

import { DrivetrainModuleService } from './drivetrain-module.service';

describe('DrivetrainModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrivetrainModuleService = TestBed.get(DrivetrainModuleService);
    expect(service).toBeTruthy();
  });
});
