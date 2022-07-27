import "dotenv/config";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import connectDB from "./config/db";
import { schema } from "./schema";

const app = express();

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Sever running on port 4000"));
