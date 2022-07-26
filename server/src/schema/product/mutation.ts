import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { addProduct, deleteProduct, editProduct } from "./resolver";
import { ProductType } from "./type";

export const AddProduct = {
  type: ProductType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    stock: { type: GraphQLNonNull(GraphQLInt) },
    manufacturerId: { type: GraphQLNonNull(GraphQLString) },
    categoryId: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_parent: any, args: any) => {
    return addProduct(args);
  },
};

export const EditProduct = {
  type: ProductType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    stock: { type: GraphQLNonNull(GraphQLInt) },
    manufacturerId: { type: GraphQLNonNull(GraphQLString) },
    categoryId: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_parent: any, args: any) => {
    return editProduct(args);
  },
};

export const DeleteProduct = {
  type: ProductType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: (_parent: any, args: any) => {
    return deleteProduct(args);
  },
};
