"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProperty = void 0;
const properties_1 = require("../model/properties");
const updateProperty = async (req, res) => {
    const { id } = req.params;
    const { Location, description, Type, Price, PhotoPath, sell, rent, imageUrl } = req.body;
    try {
        const property = await properties_1.Property.findByIdAndUpdate(id, {
            Location,
            description,
            Type,
            Price,
            PhotoPath,
            sell,
            rent,
            imageUrl
        }, { new: true });
        if (!property) {
            return res.status(404).send('Property not found');
        }
        res.status(200).json(property);
    }
    catch (error) {
        console.error('Error updating property:', error);
        res.status(500).send('Internal Server Error');
    }
};
exports.updateProperty = updateProperty;
