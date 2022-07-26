import { products } from "../../sampleData";
import { Product } from "./type";

export function getProduct(id: Product["id"]): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProducts(): Product[] {
  return products;
}

export function addProduct(args: {
  name: Product["name"];
  description: Product["description"];
  price: Product["price"];
  stock: Product["stock"];
  manufacturerId: Product["manufacturerId"];
  categoryId: Product["categoryId"];
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
  id: Product["id"];
  name: Product["name"];
  description: Product["description"];
  price: Product["price"];
  stock: Product["stock"];
  manufacturerId: Product["manufacturerId"];
  categoryId: Product["categoryId"];
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

export function deleteProduct(args: { id: Product["id"] }): Product {
  const product = products[Number(args.id)];
  products.splice(Number(args.id), 1);
  return product;
}
