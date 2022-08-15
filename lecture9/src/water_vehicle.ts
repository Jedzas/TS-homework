import Vehicle, { VehicleTypes } from './vehicle.js';

export type WaterVehicleTypes = {
  maxDepth: number
};

class WaterVehicle extends Vehicle {
  private maxDepth: number;

  constructor({ maxDepth }: WaterVehicleTypes, vehicleTypes: VehicleTypes) {
    super(vehicleTypes);

    this.maxDepth = maxDepth;
  }

  public override toString = (): string => `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
}

export default WaterVehicle;
