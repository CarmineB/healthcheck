import { TestBed } from '@angular/core/testing';

import { ChangeMachineService } from './change-machine.service';

describe('ChangeMachineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeMachineService = TestBed.get(ChangeMachineService);
    expect(service).toBeTruthy();
  });
});
