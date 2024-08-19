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
        required: true,
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