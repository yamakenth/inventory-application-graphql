import { products } from "../../sampleData";
import { Product } from "./type";

export function getProduct(id: Product["id"]): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProducts(): Product[] {
  return products;
}
