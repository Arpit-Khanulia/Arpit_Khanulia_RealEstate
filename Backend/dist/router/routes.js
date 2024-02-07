"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const register_1 = require("../controller/register");
const login_1 = require("../controller/login");
const addproperty_1 = require("../controller/addproperty");
const allproperty_1 = require("../controller/allproperty");
const userproperty_1 = require("../controller/userproperty");
const deleteProperty_1 = require("../controller/deleteProperty");
const updateproperty_1 = require("../controller/updateproperty");
const email_1 = require("../controller/email");
const router = express_1.default.Router();
exports.router = router;
router
    .post('/login', login_1.login)
    .post('/register', register_1.register)
    .post('/addproperty', addproperty_1.addProperty)
    .delete('/deleteproperty/:id', deleteProperty_1.deleteProperty)
    .put('/updateproperty', updateproperty_1.updateProperty)
    .get('/allproperty', allproperty_1.allProperty)
    .get('/userproperty', userproperty_1.userProperty)
    .post('/email', email_1.sendEmail);
