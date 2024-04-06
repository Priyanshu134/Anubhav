import mongoose from 'mongoose';
import User from './user.model.js';

const requestSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
});

const Request = mongoose.model('Request', requestSchema);

export default Request;