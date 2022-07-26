import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import {
  addManufacturer,
  deleteManufacturer,
  editManufacturer,
} from "./resolver";
import { ManufacturerType } from "./type";

export const AddManufacturer = {
  type: ManufacturerType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_parent: any, args: any) => {
    return addManufacturer(args);
  },
};

export const EditManufacturer = {
  type: ManufacturerType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_parent: any, args: any) => {
    return editManufacturer(args);
  },
};

export const DeleteManufacturer = {
  type: ManufacturerType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: (_parent: any, args: any) => {
    return deleteManufacturer(args);
  },
};
