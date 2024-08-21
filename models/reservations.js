const mongoose = require('mongoose');

const User = require('./users');
const Cars = require('./cars');

const reservationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cars',
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    totalAmount: {
        type: Number,
        default: function() { 
            return this.carId.pricePerDay * ((this.endDate - this.startDate) / 86400000); // create a function to calculate total amount
        },
        transform: function() {
            return this.totalAmount.toFixed(2); // round the total amount to 2 decimal places
        }
    },
    isPaid: {
        type: Boolean,
        default: false,
    }
}, {
    collection: 'reservations',
    timestamps: true,
});

module.exports = mongoose.model('Reservations', reservationSchema);


// create schema for reservations for postman
// {
//     "userId": "60b5e3d3f4b7c20015e5e3b0",
//     "carId": "60b5e3d3f4b7c20015e5e3b0",
//     "startDate": "2021-06-01",
//     "endDate": "2021-06-05",
//     "totalAmount": 4000,

// }