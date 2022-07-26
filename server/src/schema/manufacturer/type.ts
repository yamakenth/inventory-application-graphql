import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const ManufacturerType = new GraphQLObjectType({
  name: "Manufacturer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});
