"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const propertiesSchema = new mongoose_1.default.Schema({
    uid: {
        type: String,
        required: true
    },
    selleremail: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    sell: {
        type: Boolean,
        required: true
    },
    rent: {
        type: Boolean,
        required: true
    },
    photoPath: {
        type: String,
        required: true
    }
});
// model
const Property = mongoose_1.default.model('Property', propertiesSchema);
exports.Property = Property;
