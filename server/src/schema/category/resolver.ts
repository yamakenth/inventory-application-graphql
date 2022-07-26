import Category from "../../models/category";

export function getCategory(id: string) {
  return Category.findById(id);
}

export function getCategories() {
  return Category.find();
}

export function addCategory(args: { name: string; description: string }) {
  const category = new Category({
    name: args.name,
    description: args.description,
  });

  return category.save();
}

export function editCategory(args: {
  id: string;
  name: string;
  description: string;
}) {
  return Category.findByIdAndUpdate(
    args.id,
    {
      $set: {
        id: args.id,
        name: args.name,
        description: args.description,
      },
    },
    { new: true }
  );
}

export function deleteCategory(args: { id: string }) {
  return Category.findByIdAndRemove(args.id);
}
