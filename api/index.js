import express from 'express';
import Client from './clients';

let router = express.Router();

router.use('/clients', Client);

// router.get('/', (req, res) => {
//     res.send({ data: [] });  
//     return;
// });

export default router;