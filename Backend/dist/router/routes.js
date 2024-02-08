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
const filterProperty_1 = require("../controller/filterProperty");
const passport_1 = __importDefault(require("passport"));
const passportConfig_1 = __importDefault(require("../middleware/passportConfig"));
(0, passportConfig_1.default)(passport_1.default);
const router = express_1.default.Router();
exports.router = router;
router
    .post('/login', login_1.login)
    .post('/register', register_1.register)
    .post('/addproperty', passport_1.default.authenticate('jwt', { session: false }), addproperty_1.addProperty)
    .post('/filterproperty', passport_1.default.authenticate('jwt', { session: false }), filterProperty_1.getPropertiesByPincodeAndType)
    .delete('/deleteproperty/:id', passport_1.default.authenticate('jwt', { session: false }), deleteProperty_1.deleteProperty)
    .put('/updateproperty', passport_1.default.authenticate('jwt', { session: false }), updateproperty_1.updateProperty)
    .get('/allproperty', allproperty_1.allProperty)
    .get('/userproperty', passport_1.default.authenticate('jwt', { session: false }), userproperty_1.userProperty)
    .post('/email', passport_1.default.authenticate('jwt', { session: false }), email_1.sendEmail);
