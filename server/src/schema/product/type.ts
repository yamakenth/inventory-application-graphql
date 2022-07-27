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

export const ProductType: GraphQLObjectType<any, any> = new GraphQLObjectType({
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
