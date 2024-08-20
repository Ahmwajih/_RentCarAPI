const Reservations = require('../models/Reservations');
const Cars = require('../models/cars');

module.exports = {
    list : async (req, res) => {
        const reservations = await Reservations.find();
        res.status(200).send({
            error: false,
            data: reservations,
            message: "List of reservations",
            details: "List of reservations",
        });
    },

    create : async (req, res) => {
        const { carId, startDate, endDate } = req.body;
        const existingReservation = await Reservations.findOne({
            carId,
            $or: [
                { startDate: { $lte: endDate, $gte: startDate } },
                { endDate: { $lte: endDate, $gte: startDate } },
                { startDate: { $lte: startDate }, endDate: { $gte: endDate } }
            ]
        });

        if (existingReservation) {
            return res.status(400).send({
                error: true,
                message: "Car is already reserved for the requested date range",
                details: "Car is already reserved for the requested date range",
            });
        }

        // Create the reservation if the car is available
        const reservation = await Reservations.create(req.body);
        res.status(201).send({
            error: false,
            data: reservation,
            message: "Reservation created",
            details: "Reservation created",
        });
    },

    read : async (req, res) => {
        const reservation = await Reservations.findById(req.params.id);
        res.status(200).send({
            error: false,
            data: reservation,
            message: "Reservation found",
            details: "Reservation found",
        });
    },

    update : async (req, res) => {
        const reservation = await Reservations.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({
            error: false,
            data: reservation,
            message: "Reservation updated",
            details: "Reservation updated",
        });
    },

    delete : async (req, res) => {
        const reservation = await Reservations.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            data: reservation,
            message: "Reservation deleted",
            details: "Reservation deleted",
        });
    }
};