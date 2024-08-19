const mongoose = require('mongoose');

const User = require('./users');

const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
    }, {
    collection: 'tokens',
    timestamps: true,
});

module.exports = mongoose.model('Tokens', tokenSchema);

