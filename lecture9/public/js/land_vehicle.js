import Vehicle from './vehicle.js';
class LandVehicle extends Vehicle {
    tires;
    constructor({ tires }, vehicleTypes) {
        super(vehicleTypes);
        this.tires = tires;
    }
    toString = () => `${this.getString()}\tpadangos: ${this.tires.join(', ')}`;
}
export default LandVehicle;
//# sourceMappingURL=land_vehicle.js.map