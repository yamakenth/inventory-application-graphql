import { manufacturers } from "../../sampleData";
import { Manufacturer } from "./type";

export function getManufacturer(id: string): Manufacturer | undefined {
  return manufacturers.find((manufacturer) => manufacturer.id === id);
}

export function getManufacturers(): Manufacturer[] {
  return manufacturers;
}

export function addManufacturer(args: { name: string }): Manufacturer {
  const manufacturer = {
    id: String(manufacturers.length),
    name: args.name,
  };

  manufacturers.push(manufacturer);
  return manufacturer;
}

export function editManufacturer(args: {
  id: string;
  name: string;
}): Manufacturer {
  const manufacturer = {
    id: args.id,
    name: args.name,
  };

  manufacturers[Number(args.id)] = manufacturer;
  return manufacturer;
}

export function deleteManufacturer(args: { id: string }): Manufacturer {
  const manufacturer = manufacturers[Number(args.id)];
  manufacturers.splice(Number(args.id), 1);
  return manufacturer;
}
