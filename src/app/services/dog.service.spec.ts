import { TestBed } from '@angular/core/testing';

import { DogService } from 'src/app/services/dog.service';

describe('PostService', () => {
  let service: DogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
