import { TestBed } from '@angular/core/testing';

import { FrontendLibraryService } from './frontend-library.service';

describe('FrontendLibraryService', () => {
  let service: FrontendLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
