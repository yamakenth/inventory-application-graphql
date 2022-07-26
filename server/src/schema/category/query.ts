import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { getCategories, getCategory } from "./resolver";
import { Category, CategoryType } from "./type";

export const GetCategory = {
  type: CategoryType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve: (_source: any, args: any) => {
    return getCategory(args.id);
  },
};

export const GetCategories = {
  type: GraphQLList(CategoryType),
  resolve: () => {
    return getCategories();
  },
};
