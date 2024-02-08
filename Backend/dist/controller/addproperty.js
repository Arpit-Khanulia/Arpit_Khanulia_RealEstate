"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProperty = void 0;
const properties_1 = require("../model/properties");
const addProperty = async (req, res) => {
    const data = req.body;
    // const {uid,selleremail, location, description, type, price, photoPath, sell, rent,pincode }: PropertyDetails = req.body;
    console.log('yaha tak to aa gaya data');
    console.log(req.body);
    try {
        const newProperty = new properties_1.Property(data);
        console.log('this is new property', newProperty);
        console.log('property added');
        await newProperty.save();
        res.status(201).json(newProperty);
    }
    catch (error) {
        res.status(500).send('Error adding property');
    }
};
exports.addProperty = addProperty;
