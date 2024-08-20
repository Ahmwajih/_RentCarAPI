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



// create schema for cars for postman 
// {
//     "plateNumber": "ABC-123",
//     "brand": "Toyota",
//     "model": "Corolla",
//     "year": 2021,
//     "isAutomatic": true,
//     "pricePerDay": 1000,
//     "isPublished": true,
//     "createdId": "60b5e3d3f4b7c20015e5e3b0",
//     "updatedId": "60b5e3d3f4b7c20015e5e3b0"
// }