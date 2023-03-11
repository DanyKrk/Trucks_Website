import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-trucks-header',
  templateUrl: './trucks-header.component.html',
  styleUrls: ['./trucks-header.component.css']
})
export class TrucksHeaderComponent {
  title: string = 'Trucks Manager';
  showCreateTruck: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onTruckToggle().subscribe(value => this.showCreateTruck = value)
  }
  toggleCreateTruck(){
    this.uiService.toggleAddTruck();
  }
}
