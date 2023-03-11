import { Component, OnInit } from '@angular/core';
import { Truck } from 'src/app/models/Truck';
import { TruckService } from 'src/app/services/truck.service';


@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})

export class TrucksComponent {
  trucks: Truck[] = [];

  constructor(private truckService: TruckService){}

  ngOnInit(): void {
    this.fetchTrucks();
  }

  deleteTruck(truck: Truck): void{
    this.truckService.deleteTruck(truck).subscribe(
      () => this.trucks = this.trucks.filter(
        (t) => t.id !== truck.id
      )
    );
  }

  addTruck(truck: Truck): void{
    console.log(truck);
    this.truckService.addTruck(truck).subscribe(() => this.fetchTrucks());
  }

  fetchTrucks(): void{
    this.truckService.getTrucks().subscribe((trucks_api_response) => this.trucks = trucks_api_response.data);
  }

  patchTruck(truck: Truck): void{
    this.truckService.patchTruck(truck).subscribe(() => this.fetchTrucks());
  }

  putTruck(truck: Truck): void{
    console.log(truck);
    this.truckService.putTruck(truck).subscribe(() => this.fetchTrucks());
  }
}
