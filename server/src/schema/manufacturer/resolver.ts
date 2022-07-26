import Manufacturer from "../../models/manufacturer";

export function getManufacturer(id: string) {
  return Manufacturer.findById(id);
}

export function getManufacturers() {
  return Manufacturer.find();
}

export function addManufacturer(args: { name: string }) {
  const manufacturer = new Manufacturer({
    name: args.name,
  });

  return manufacturer.save();
}

export function editManufacturer(args: { id: string; name: string }) {
  return Manufacturer.findByIdAndUpdate(
    args.id,
    {
      $set: {
        id: args.id,
        name: args.name,
      },
    },
    { new: true }
  );
}

export function deleteManufacturer(args: { id: string }) {
  return Manufacturer.findByIdAndRemove(args.id);
}
