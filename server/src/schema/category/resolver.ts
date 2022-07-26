import { categories } from "../../sampleData";
import { Category } from "./type";

export function getCategory(id: Category["id"]): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getCategories(): Category[] {
  return categories;
}

export function addCategory(args: {
  name: Category["name"];
  description: Category["description"];
}): Category {
  const category = {
    id: String(categories.length),
    name: args.name,
    description: args.description,
  };

  categories.push(category);
  return category;
}

export function editCategory(args: {
  id: Category["id"];
  name: Category["name"];
  description: Category["description"];
}): Category {
  const category = {
    id: args.id,
    name: args.name,
    description: args.description,
  };

  categories[Number(args.id)] = category;
  return category;
}

export function deleteCategory(args: { id: Category["id"] }): Category {
  const category = categories[Number(args.id)];
  categories.splice(Number(args.id), 1);
  return category;
}
