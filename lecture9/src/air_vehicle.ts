import Vehicle, { VehicleTypes } from './vehicle.js';

export type AirVehicleTypes = {
  maxAltitude: number
};

class AirVehicle extends Vehicle {
  private maxAltitude: number;

  constructor({ maxAltitude }: AirVehicleTypes, vehicleTypes: VehicleTypes) {
    super(vehicleTypes);

    this.maxAltitude = maxAltitude;
  }

  public override toString = (): string => `${this.getString()}\tmaksimalus aukštis: ${this.maxAltitude}`;
}

export default AirVehicle;
