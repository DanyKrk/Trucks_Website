import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTruckComponent } from './components/add-truck/add-truck.component';
import { ButtonComponent } from './components/button/button.component';
import { TruckItemComponent } from './components/truck-item/truck-item.component';
import { TrucksBoxComponent } from './components/trucks-box/trucks-box.component';
import { TrucksHeaderComponent } from './components/trucks-header/trucks-header.component';
import { TrucksComponent } from './components/trucks/trucks.component';

@NgModule({
  declarations: [
    AppComponent,
    TrucksBoxComponent,
    TrucksHeaderComponent,
    TrucksComponent,
    AddTruckComponent,
    TruckItemComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
