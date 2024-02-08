"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesByPincodeAndType = void 0;
const properties_1 = require("../model/properties");
const getPropertiesByPincodeAndType = async (req, res) => {
    const { pincode, type } = req.body;
    try {
        const properties = await properties_1.Property.find({ pincode, type });
        res.status(200).json(properties);
    }
    catch (error) {
        res.status(500).send('Error fetching properties');
    }
};
exports.getPropertiesByPincodeAndType = getPropertiesByPincodeAndType;
