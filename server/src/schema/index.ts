import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { AddCategory, DeleteCategory, EditCategory } from "./category/mutation";
import { GetCategories, GetCategory } from "./category/query";
import {
  AddManufacturer,
  DeleteManufacturer,
  EditManufacturer,
} from "./manufacturer/mutation";
import { GetManufacturer, GetManufacturers } from "./manufacturer/query";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    category: GetCategory,
    categories: GetCategories,
    manufacturer: GetManufacturer,
    manufacturers: GetManufacturers,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCategory: AddCategory,
    editCategory: EditCategory,
    deleteCategory: DeleteCategory,
    addManufacturer: AddManufacturer,
    editManufacturer: EditManufacturer,
    deleteManufacturer: DeleteManufacturer,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
