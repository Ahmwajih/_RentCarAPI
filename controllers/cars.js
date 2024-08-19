const Cars = require('../models/cars');
const { list } = require('./users');


module.exports = {
    list: async (req, res) => {
        const cars = await Cars.find();
        res.status(200).send({
            error: false,
            data: cars,
            message: "List of cars",
            details: "List of cars",
        });
    },

    create: async (req, res) => {
        const car = Cars.create(req.body);
        res.status(201).send({
            error: false,
            data: car,
            message: "Car created",
            details: "Car created",
        });
    },

    read: async (req, res) => {
        const car = await Cars.findById(req.params.id);
        res.status(200).send({
            error: false,
            data: car,
            message: "Car found",
            details: "Car found",
        });
    },

    update: async (req, res) => {
        const car = await Cars.findByIdAndUpdate(req.params.id);
        res.status(200).send({
            error: false,
            data: car,
            message: "Car updated",
            details: "Car updated",
        });
    },

    delete: async (req, res) => {
        const car = await Cars.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            data: car,
            message: "Car deleted",
            details: "Car deleted",
        });
    }

}

