import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { getProduct, getProducts } from "./resolver";
import { ProductType } from "./type";

export const GetProduct = {
  type: ProductType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve: (_parent: any, args: any) => {
    return getProduct(args.id);
  },
};

export const GetProducts = {
  type: GraphQLList(ProductType),
  resolve: () => {
    return getProducts();
  },
};
