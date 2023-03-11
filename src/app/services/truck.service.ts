import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrucksAPIRespose } from '../models/TrucksAPIResponse';
import { Truck } from '../models/Truck';
import { PatchTruck } from '../models/PatchTruck';
import { PutTruck } from'../models/PutTruck';
import { TRUCKS_API_URL } from '../interfaces/constants';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  private apiUrl = TRUCKS_API_URL

  constructor(private http:HttpClient) { }

  getTrucks():  Observable<TrucksAPIRespose>{
    return this.http.get<TrucksAPIRespose>(this.apiUrl)
  }

  deleteTruck(truck: Truck): Observable<Truck>{
      const url =  `${this.apiUrl}/${truck.id}`;
      return this.http.delete<Truck>(url);
  }

  addTruck(truck: Truck): Observable<Truck>{
    const url =  `${this.apiUrl}/post`;
    return this.http.post<Truck>(url, truck, httpOptions);
  }

  patchTruck(truck: Truck): Observable<PatchTruck>{
    const url =  `${this.apiUrl}/update/${truck.id}`;
    const patchTruck: PatchTruck = {
      tare: truck?.tare,
      load_capacity: truck?.loadCapacity,
      maximum_battery_charge: truck?.maximumBatteryCharge,
      autonomy_when_fully_charged: truck?.autonomyWhenFullyCharged,
      fast_charging_time: truck?.fastChargingTime,
      is_active: truck?.isActive
    };
    return this.http.patch<PatchTruck>(url, patchTruck, httpOptions);
  }

  putTruck(truck: Truck): Observable<PatchTruck>{
    const url =  `${this.apiUrl}`;
    const patchTruck: PatchTruck = {
      tare: truck?.tare,
      load_capacity: truck?.loadCapacity,
      maximum_battery_charge: truck?.maximumBatteryCharge,
      autonomy_when_fully_charged: truck?.autonomyWhenFullyCharged,
      fast_charging_time: truck?.fastChargingTime,
      is_active: truck?.isActive
    };
    return this.http.put<PutTruck>(url, patchTruck, httpOptions);
  }
}
