import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GetCategories, GetCategory } from "./category/query";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    category: GetCategory,
    categories: GetCategories,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
});
