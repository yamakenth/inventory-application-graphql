import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { getProductsByCategoryId } from "../product/resolver";
import { ProductType } from "../product/type";

export const CategoryType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    products: {
      type: GraphQLList(ProductType),
      resolve: (parent: any, _args: any) => {
        return getProductsByCategoryId(parent.id);
      },
    },
  }),
});
