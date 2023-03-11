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
    this.truckService.addTruck(truck).subscribe(() => this.fetchTrucks());
  }

  fetchTrucks(): void{
    this.truckService.getTrucks().subscribe((trucks_api_response) => this.trucks = trucks_api_response.data);
    // this.truckService.getTrucks().subscribe((trucks_api_response) => console.log(trucks_api_response));
  }

  patchTruck(truck: Truck): void{
    this.truckService.patchTruck(truck).subscribe(() => this.fetchTrucks());
  }
}
