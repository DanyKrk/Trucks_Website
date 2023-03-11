import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Truck } from 'src/app/models/Truck';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-truck-item',
  templateUrl: './truck-item.component.html',
  styleUrls: ['./truck-item.component.css']
})
export class TruckItemComponent {
  @Input() truck: Truck | undefined;
  @Output() onDeleteTruck: EventEmitter<Truck> = new EventEmitter();
  @Output() onInhibitTruck: EventEmitter<Truck> = new EventEmitter();

  //faTimes = faTimes;

  onDelete(truck: any){
    this.onDeleteTruck.emit(truck);
  }

  onInhibit(){
    const newTruck: Truck = {
      id: this.truck?.id,
      tare: this.truck?.tare,
      loadCapacity: this.truck?.loadCapacity,
      maximumBatteryCharge: this.truck?.maximumBatteryCharge,
      autonomyWhenFullyCharged: this.truck?.autonomyWhenFullyCharged,
      fastChargingTime: this.truck?.fastChargingTime,
      isActive: !this.truck?.isActive
    };
    this.onInhibitTruck.emit(newTruck);
  }
}
