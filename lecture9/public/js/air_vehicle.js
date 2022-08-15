import Vehicle from './vehicle.js';
class AirVehicle extends Vehicle {
    maxAltitude;
    constructor({ maxAltitude }, vehicleTypes) {
        super(vehicleTypes);
        this.maxAltitude = maxAltitude;
    }
    toString = () => `${this.getString()}\tmaksimalus aukštis: ${this.maxAltitude}`;
}
export default AirVehicle;
//# sourceMappingURL=air_vehicle.js.map