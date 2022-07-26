import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { getManufacturer, getManufacturers } from "./resolver";
import { ManufacturerType } from "./type";

export const GetManufacturer = {
  type: ManufacturerType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve: (_parent: any, args: any) => {
    return getManufacturer(args.id);
  },
};

export const GetManufacturers = {
  type: GraphQLList(ManufacturerType),
  resolve: () => {
    return getManufacturers();
  },
};
