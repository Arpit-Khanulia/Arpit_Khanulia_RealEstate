"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const passportConfig = (passport) => {
    passport.use(new passport_jwt_1.Strategy({
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: "your_access_secret_value_here"
    }, (jwt_payload, done) => {
        if (jwt_payload) {
            return done(null, jwt_payload);
        }
        else {
            return done(null, false);
        }
    }));
};
exports.default = passportConfig;
