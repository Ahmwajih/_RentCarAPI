const Cars = require('../models/cars');
const getModelListDetails = require('../middleware/queryHandler');

module.exports = {
    list: async (req, res) => {
        const cars = await Cars.find();
        const details = await res.getModelListDetails(Cars);
        res.status(200).send({
            error: false,
            data: cars,
            message: "List of cars",
            details: details,
        });
    },

    create: async (req, res) => {
        const car = await Cars.create(req.body);
        const details = await res.getModelListDetails(Cars);
        res.status(201).send({
            error: false,
            data: car,
            message: "Car created",
            details: details
        });
    },

    read: async (req, res) => {
        const car = await Cars.findById(req.params.id);
        const details = await res.getModelListDetails(Cars);
        res.status(200).send({
            error: false,
            data: car,
            message: "Car found",
            details: details
        });
    },

    update: async (req, res) => {
        const car = await Cars.findByIdAndUpdate(req.params.id, req.body, { new: true });
        const details = await res.getModelListDetails(Cars);
        res.status(200).send({
            error: false,
            data: car,
            message: "Car updated",
            details: details
        });
    },

    delete: async (req, res) => {
        const car = await Cars.findByIdAndDelete(req.params.id);
        const details = await res.getModelListDetails(Cars);
        res.status(200).send({
            error: false,
            data: car,
            message: "Car deleted",
            details: details
        });
    }
}