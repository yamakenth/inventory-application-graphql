import { manufacturers } from "../../sampleData";
import { Manufacturer } from "./type";

export function getManufacturer(
  id: Manufacturer["id"]
): Manufacturer | undefined {
  return manufacturers.find((manufacturer) => manufacturer.id === id);
}

export function getManufacturers(): Manufacturer[] {
  return manufacturers;
}

export function addManufacturer(args: {
  name: Manufacturer["name"];
}): Manufacturer {
  const manufacturer = {
    id: String(manufacturers.length),
    name: args.name,
  };

  manufacturers.push(manufacturer);
  return manufacturer;
}

export function editManufacturer(args: {
  id: Manufacturer["id"];
  name: Manufacturer["name"];
}): Manufacturer {
  const manufacturer = {
    id: args.id,
    name: args.name,
  };

  manufacturers[Number(args.id)] = manufacturer;
  return manufacturer;
}

export function deleteManufacturer(args: {
  id: Manufacturer["id"];
}): Manufacturer {
  const manufacturer = manufacturers[Number(args.id)];
  manufacturers.splice(Number(args.id), 1);
  return manufacturer;
}
