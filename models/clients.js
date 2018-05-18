import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    clientID: { type: Number },
    name: { type: String }
});

const Clients = mongoose.model('Client', clientSchema);

export default Clients;