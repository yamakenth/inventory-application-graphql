import { model, Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
});

export default model("Category", CategorySchema);
