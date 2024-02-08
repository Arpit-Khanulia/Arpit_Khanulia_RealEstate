"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProperty = void 0;
const properties_1 = require("../model/properties");
// unique pid
// uid
// seller email
// Location
// Type
// Price
// Photo path
// sell
// rent
// pincode
// description
const addProperty = async (req, res) => {
    const { uid, selleremail, location, description, type, price, photoPath, sell, rent, pincode } = req.body;
    try {
        const newProperty = new properties_1.Property({
            uid,
            selleremail,
            location,
            type,
            price,
            photoPath,
            sell,
            rent,
            description,
            pincode
        });
        await newProperty.save();
        res.status(201).json(newProperty);
    }
    catch (error) {
        res.status(500).send('Error adding property');
    }
};
exports.addProperty = addProperty;
