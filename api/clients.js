import express from 'express';
const router = express.Router();

import Client from '../models/clients';

router.route('/')
    .get((req, res) => {
        Client.find({})
            .populate('propertyref')
            .exec((err, clients) => {

                console.log('client', clients);

                res.status(err ? 400 : 200).send(err || clients);
            });
    })
    .post((req, res) => {
        var client = new Client(req.body);
        client.save((err, savedClient) => {
            res.status(err ? 400 : 200).send(err || savedClient);
        });
    });

export default router;