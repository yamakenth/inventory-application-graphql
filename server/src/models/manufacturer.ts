import { Schema, model } from "mongoose";

const ManufacturerSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
});

export default model("Manufacturer", ManufacturerSchema);
