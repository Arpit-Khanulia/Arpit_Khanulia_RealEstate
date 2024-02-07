"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProperty = void 0;
const properties_1 = require("../model/properties");
const addProperty = async (req, res) => {
    const { uid, selleremail, location, description, type, price, photoPath, sell, rent } = req.body;
    try {
        const newProperty = new properties_1.Property({
            uid,
            selleremail,
            location,
            description,
            type,
            price,
            photoPath,
            sell,
            rent,
        });
        await newProperty.save();
        res.status(201).json(newProperty);
    }
    catch (error) {
        res.status(500).send('Error adding property');
    }
};
exports.addProperty = addProperty;
