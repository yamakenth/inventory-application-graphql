import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: [{ type: String, required: true }],
  manufacturer: { type: Schema.Types.ObjectId, ref: "Manufacturer" },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, min: 0, required: true },
  stock: { type: Number, min: 0, required: true },
});

export default model("Product", ProductSchema);
