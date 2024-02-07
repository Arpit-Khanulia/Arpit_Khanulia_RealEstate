"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allProperty = void 0;
const properties_1 = require("../model/properties");
const allProperty = async (req, res) => {
    try {
        const properties = await properties_1.Property.find();
        res.status(200).json(properties);
    }
    catch (error) {
        res.status(500).send('Error fetching properties');
    }
};
exports.allProperty = allProperty;
