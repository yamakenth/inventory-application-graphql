import { Schema, model } from "mongoose";

interface IProduct {
  name: string;
  description: string[];
  price: number;
  stock: number;
  manufacturerId: Schema.Types.ObjectId;
  categoryId: Schema.Types.ObjectId;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true, maxLength: 100 },
  description: [{ type: String, required: true }],
  price: { type: Number, min: 0, required: true },
  stock: { type: Number, min: 0, required: true },
  manufacturerId: { type: Schema.Types.ObjectId, ref: "Manufacturer" },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

const Product = model<IProduct>("Product", ProductSchema);

export default Product;
