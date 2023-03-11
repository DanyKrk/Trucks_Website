import { Truck } from "./Truck";

export interface TrucksAPIRespose {
    data: Truck[];
    success: boolean;
    message: string;
  }
