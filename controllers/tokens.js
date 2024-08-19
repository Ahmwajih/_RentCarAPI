const Tokens = require('../models/tokens');
const Users = require('../models/users');

module.exports = {
    list : async (req, res) => {
        const tokens = await Tokens.find();
        res.status(200).send({
            error: false,
            data: tokens,
            message: "List of tokens",
            details: "List of tokens",
        });
    },

    create : async (req, res) => {
        const token = await Tokens.create(req.body);
        res.status(201).send({
            error: false,
            data: token,
            message: "Token created",
            details: "Token created",
        });
    },

    read : async (req, res) => {
        const token = await Tokens.findById(req.params.id);
        res.status(200).send({
            error: false,
            data: token,
            message: "Token found",
            details: "Token found",
        });
    },

    update : async (req, res) => {
        const token = await Tokens.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        res.status(200).send({
            error: false,
            data: token,
            message: "Token updated",
            details: "Token updated",
        });
    },

    delete : async (req, res) => {
        const token = await Tokens.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            data: token,
            message: "Token deleted",
            details: "Token deleted",
        });
    }
};

