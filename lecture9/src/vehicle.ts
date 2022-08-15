export type VehicleTypes = {
  brand: string;

  model: string;

  year: number;

};

class Vehicle {
  protected brand: string;

  protected model: string;

  protected year: number;

  public constructor({ brand, model, year }: VehicleTypes) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  protected getString = (): string => {
    const { brand, model, year } = this;

    return `${brand} ${model} ${year}\n`;
  };
}
export default Vehicle;
