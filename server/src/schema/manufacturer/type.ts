import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { getProductsByManufacturerId } from "../product/resolver";
import { ProductType } from "../product/type";

export const ManufacturerType: GraphQLObjectType<any, any> =
  new GraphQLObjectType({
    name: "Manufacturer",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      products: {
        type: GraphQLList(ProductType),
        resolve: (parent: any, _args: any) => {
          return getProductsByManufacturerId(parent.id);
        },
      },
    }),
  });
