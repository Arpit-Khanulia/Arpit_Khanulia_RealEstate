"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProperty = void 0;
const properties_1 = require("../model/properties");
const userProperty = async (req, res) => {
    const userId = req.id;
    try {
        const properties = await properties_1.Property.find({ uid: userId });
        res.status(200).json(properties);
    }
    catch (error) {
        res.status(500).send('Error fetching user properties');
    }
};
exports.userProperty = userProperty;
