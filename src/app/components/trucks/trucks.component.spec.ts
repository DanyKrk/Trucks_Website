import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TruckService } from '../../../../services/Trucks/truck.service';
import { Truck } from "../../../../models/Truck";
import { TrucksComponent } from './trucks.component';
import { TrucksAPIRespose } from '../../../../models/TrucksAPIResponse';

const truck1: Truck = {
  _id: 0,
  domainId: "a1",
  tare: 1,
  load_capacity: 2,
  maximum_battery_charge: 3,
  autonomy_when_fully_charged: 4,
  fast_charging_time: 5,
  is_active: true
};

const truck2: Truck = {
  _id: 1,
  domainId: "b2",
  tare: 3,
  load_capacity: 4,
  maximum_battery_charge: 5,
  autonomy_when_fully_charged: 6,
  fast_charging_time: 7,
  is_active: false
};

const truck3: Truck = {
  _id: 2,
  domainId: "c3",
  tare: 3,
  load_capacity: 4,
  maximum_battery_charge: 7,
  autonomy_when_fully_charged: 10,
  fast_charging_time: 7,
  is_active: false

}

const TEST_TRUCKS: TrucksAPIRespose = {trucks: [
truck1, truck2, truck3]};

describe('TrucksComponent', () => {
  let component: TrucksComponent;
  let fixture: ComponentFixture<TrucksComponent>;

  beforeEach(async () => {
    const truckServiceSpy = jasmine.createSpyObj<TruckService>(['getTrucks']);
    truckServiceSpy.getTrucks.and.returnValue(of(TEST_TRUCKS))

    await TestBed.configureTestingModule({
      declarations: [ TrucksComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{provide: TruckService, useValue: truckServiceSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have trucks', () => {
    expect(component.trucks.length).toBe(3);
  })
});