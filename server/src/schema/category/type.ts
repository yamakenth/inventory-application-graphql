import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
