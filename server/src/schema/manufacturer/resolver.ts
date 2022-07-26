import { manufactureres } from "../../sampleData";
import { Manufacturer } from "./type";

export function getManufacturer(id: string): Manufacturer | undefined {
  return manufactureres.find((manufacturer) => manufacturer.id === id);
}

export function getManufacturers(): Manufacturer[] {
  return manufactureres;
}
