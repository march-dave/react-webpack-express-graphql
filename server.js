import express from 'express';
import apiRouter from './api';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import mongoose from 'mongoose';

const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost:/react-webpack-express';
mongoose.connect(MONGOURL, err => {
    console.log(err || `Connected to MongoDB at ${MONGOURL}`);
});

const server = express();
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.port || 8080;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});


import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
// GraphQL schema
let schema = buildSchema(`
    type Query {
        message: String
    }
`);

let root = {
    message: () => 'Hello World!'
};
server.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

server.use('/api', apiRouter);
server.use(express.static('public'));
server.listen(port, () => {
    console.info(`Express listening on port: ${port}`);
});