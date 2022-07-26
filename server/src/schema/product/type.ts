import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { getCategory } from "../category/resolver";
import { CategoryType } from "../category/type";
import { getManufacturer } from "../manufacturer/resolver";
import { ManufacturerType } from "../manufacturer/type";

export interface Product {
  id: string;
  name: string;
  description: string[];
  price: number;
  stock: number;
  manufacturerId: string;
  categoryId: string;
}

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLList(GraphQLString) },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLInt },
    manufacturer: {
      type: ManufacturerType,
      resolve: (parent: any, _args: any) => {
        return getManufacturer(parent.manufacturerId);
      },
    },
    category: {
      type: CategoryType,
      resolve: (parent: any, _args: any) => {
        return getCategory(parent.categoryId);
      },
    },
  }),
});
