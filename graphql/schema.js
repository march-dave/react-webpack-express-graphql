import { express_graphql } from 'express-graphql';
import { buildSchema } from 'graphql';
import express from 'express';

let router = express.Router();

// GraphQL schema
let schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Create an express server and a GraphQL endpoint
// var app = express();
// app.use('/graphql', express_graphql({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }));

// app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));