const mongoose = require('mongoose');
const User = require('./users');

const carSchema = new mongoose.Schema({
    plateNumber: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    isAutomatic: {
        type: Boolean,
        default: true,
    },
    pricePerDay: {
        type: Number,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    updatedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    collection: 'cars',
    timestamps: true
});

module.exports = mongoose.model('Cars', carSchema);
