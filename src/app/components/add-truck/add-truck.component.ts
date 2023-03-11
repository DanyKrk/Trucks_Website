import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Truck } from 'src/app/models/Truck';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.css']
})
export class AddTruckComponent {
  @Output() onAddTruck: EventEmitter<Truck> = new EventEmitter();

  id: number | undefined;
  tare: number | undefined;
  loadCapacity: number | undefined;
  maximumBatteryCharge: number | undefined;
  autonomyWhenFullyCharged: number | undefined;
  fastChargingTime: number | undefined;
  isActive: boolean | undefined;

  showCreateTruck: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onTruckToggle().subscribe(value => this.showCreateTruck = value)
  }

  onSubmit(){
    //@todo - add data validation

    const newTruck = {
      id: this.id,
      tare: this.tare,
      loadCapacity: this.loadCapacity,
      maximumBatteryCharge: this.maximumBatteryCharge,
      autonomyWhenFullyCharged: this.autonomyWhenFullyCharged,
      fastChargingTime: this.fastChargingTime,
      isActive: this.isActive
    }

    this.onAddTruck.emit(newTruck);

    this.tare = 0;
    this.loadCapacity = 0;
    this.maximumBatteryCharge = 0;
    this.autonomyWhenFullyCharged = 0;
    this.fastChargingTime = 0;
    this.isActive = true;
  }
}
