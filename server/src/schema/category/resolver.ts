import { categories } from "../../sampleData";
import { Category } from "./type";

export function getCategory(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getCategories(): Category[] {
  return categories;
}
