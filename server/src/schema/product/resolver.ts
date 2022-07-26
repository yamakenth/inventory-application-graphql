import { products } from "../../sampleData";
import { Product } from "./type";

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProducts(): Product[] {
  return products;
}

export function addProduct(args: {
  name: string;
  description: string[];
  price: number;
  stock: number;
  manufacturerId: string;
  categoryId: string;
}): Product {
  const product = {
    id: String(products.length),
    name: args.name,
    description: args.description,
    price: args.price,
    stock: args.stock,
    manufacturerId: args.manufacturerId,
    categoryId: args.categoryId,
  };

  products.push(product);
  return product;
}

export function editProduct(args: {
  id: string;
  name: string;
  description: string[];
  price: number;
  stock: number;
  manufacturerId: string;
  categoryId: string;
}): Product {
  const product = {
    id: args.id,
    name: args.name,
    description: args.description,
    price: args.price,
    stock: args.stock,
    manufacturerId: args.manufacturerId,
    categoryId: args.categoryId,
  };

  products[Number(args.id)] = product;
  return product;
}

export function deleteProduct(args: { id: string }): Product {
  const product = products[Number(args.id)];
  products.splice(Number(args.id), 1);
  return product;
}
