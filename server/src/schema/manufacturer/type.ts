import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export interface Manufacturer {
  id: string;
  name: string;
}

export const ManufacturerType = new GraphQLObjectType({
  name: "Manufacturer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});
