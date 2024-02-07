"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = void 0;
const properties_1 = require("../model/properties");
const deleteProperty = async (req, res) => {
    const { id } = req.params;
    try {
        const property = await properties_1.Property.findByIdAndDelete(id);
        if (!property) {
            return res.status(404).send('Property not found');
        }
        res.status(200).send('Property deleted successfully');
    }
    catch (error) {
        console.error('Error deleting property:', error);
        res.status(500).send('Internal Server Error');
    }
};
exports.deleteProperty = deleteProperty;
