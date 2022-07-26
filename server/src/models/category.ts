import { model, Schema } from "mongoose";

export interface ICategory {
  name: string;
  description: string;
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
});

const Category = model<ICategory>("Category", CategorySchema);

export default Category;
