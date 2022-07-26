import { model, Schema } from "mongoose";

export interface IManufacturer {
  name: string;
}

const ManufacturerSchema = new Schema<IManufacturer>({
  name: { type: String, required: true, maxLength: 100 },
});

const Manufacturer = model<IManufacturer>("Manufacturer", ManufacturerSchema);

export default Manufacturer;
