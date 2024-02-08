
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const passportConfig = (passport:any)=>{

    passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: "your_access_secret_value_here"
    }, (jwt_payload, done) => {
        if (jwt_payload) {
            return done(null, jwt_payload);
        } else {
            return done(null, false);
        }
    })
    )


}

export default passportConfig;