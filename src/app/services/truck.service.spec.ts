import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TRUCKS_API_URL } from '../interfaces/constants';
import { TruckService } from './truck.service';

describe('TruckService', () => {
  let service: TruckService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TruckService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a truck result', () => {
    service.getTrucks().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.trucks).toBeTruthy();
    });
    const req = httpMock.expectOne(TRUCKS_API_URL);
    expect(req.request.method).toBe('GET')
  })
});