import Vehicle, { VehicleTypes } from './vehicle.js';

export type LandVehicleTypes = {
  tires: string[]
};
class LandVehicle extends Vehicle {
  private tires: string[];

  constructor({ tires }: LandVehicleTypes, vehicleTypes: VehicleTypes) {
    super(vehicleTypes);

    this.tires = tires;
  }

  public override toString = (): string => `${this.getString()}\tpadangos: ${this.tires.join(', ')}`;
}

export default LandVehicle;
