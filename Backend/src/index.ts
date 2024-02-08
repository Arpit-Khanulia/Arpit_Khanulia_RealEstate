import express from 'express';
import { router } from './router/routes';
import dotenv from 'dotenv';
import { connectToDatabase } from './model/database_connection';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport'



declare global {
    namespace Express {
        interface Request {
            id:any
        }
    }
}

dotenv.config();
const app = express();

app.use(cors({
    credentials:true
}));


app.use(passport.initialize());
app.use(cookieParser());
app.use(express.json());
app.use('/',router);

connectToDatabase();


app.listen(3000,()=>console.log('app listening at port 3000'));