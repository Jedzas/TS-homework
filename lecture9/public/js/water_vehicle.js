import Vehicle from './vehicle.js';
class WaterVehicle extends Vehicle {
    maxDepth;
    constructor({ maxDepth }, vehicleTypes) {
        super(vehicleTypes);
        this.maxDepth = maxDepth;
    }
    toString = () => `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
}
export default WaterVehicle;
//# sourceMappingURL=water_vehicle.js.map