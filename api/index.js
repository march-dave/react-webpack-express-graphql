import express from 'express';
import Client from './clients';
// import Graphql from '../graphql/schema';

let router = express.Router();

router.use('/clients', Client);
// router.use('/grphaql', Graphql);

// router.get('/', (req, res) => {
//     res.send({ data: [] });  
//     return;
// });

export default router;