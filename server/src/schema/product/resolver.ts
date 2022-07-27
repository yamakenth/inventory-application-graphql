import Product from "../../models/product";

export function getProduct(id: string) {
  return Product.findById(id);
}

export function getProducts() {
  return Product.find();
}

export function getProductsByCategoryId(categoryId: string) {
  return Product.find({ categoryId: categoryId });
}

export function getProductsByManufacturerId(manufacturerId: string) {
  return Product.find({ manufacturerId: manufacturerId });
}

export function addProduct(args: {
  name: string;
  description: string[];
  price: number;
  stock: number;
  manufacturerId: string;
  categoryId: string;
}) {
  const product = new Product({
    name: args.name,
    description: args.description,
    price: args.price,
    stock: args.stock,
    manufacturerId: args.manufacturerId,
    categoryId: args.categoryId,
  });

  return product.save();
}

export function editProduct(args: {
  id: string;
  name: string;
  description: string[];
  price: number;
  stock: number;
  manufacturerId: string;
  categoryId: string;
}) {
  return Product.findByIdAndUpdate(
    args.id,
    {
      $set: {
        id: args.id,
        name: args.name,
        description: args.description,
        price: args.price,
        stock: args.stock,
        manufacturerId: args.manufacturerId,
        categoryId: args.categoryId,
      },
    },
    { new: true }
  );
}

export function deleteProduct(args: { id: string }) {
  return Product.findByIdAndRemove(args.id);
}
