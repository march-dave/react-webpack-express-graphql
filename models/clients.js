import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: { type: String }
});

const Clients = mongoose.model('Client', clientSchema);

export default Clients;