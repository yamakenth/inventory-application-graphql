import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { AddCategory, DeleteCategory, EditCategory } from "./category/mutation";
import { GetCategories, GetCategory } from "./category/query";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    category: GetCategory,
    categories: GetCategories,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCategory: AddCategory,
    editCategory: EditCategory,
    deleteCategory: DeleteCategory,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
