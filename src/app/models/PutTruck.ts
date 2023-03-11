export interface PutTruck{
    id: number | undefined,
    tare: number | undefined;
    loadCapacity: number | undefined;
    maximumBatteryCharge: number | undefined;
    autonomyWhenFullyCharged: number | undefined;
    fastChargingTime: number | undefined;
    isActive: boolean | undefined;
  }
  
