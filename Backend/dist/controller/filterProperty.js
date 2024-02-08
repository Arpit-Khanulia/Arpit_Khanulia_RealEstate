"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesByPincodeAndType = void 0;
const properties_1 = require("../model/properties");
const getPropertiesByPincodeAndType = async (req, res) => {
    const { pincode, type } = req.body;
    console.log('fetching searched property');
    console.log(pincode, type);
    try {
        const properties = await properties_1.Property.find({ pincode, type });
        console.log("these are properties ", properties);
        res.status(200).json(properties);
    }
    catch (error) {
        res.status(500).send('Error fetching properties');
    }
};
exports.getPropertiesByPincodeAndType = getPropertiesByPincodeAndType;
