import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { addCategory, deleteCategory, editCategory } from "./resolver";
import { CategoryType } from "./type";

export const AddCategory = {
  type: CategoryType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_parent: any, args: any) => {
    return addCategory(args);
  },
};

export const EditCategory = {
  type: CategoryType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_parent: any, args: any) => {
    return editCategory(args);
  },
};

export const DeleteCategory = {
  type: CategoryType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: (_parent: any, args: any) => {
    return deleteCategory(args);
  },
};
