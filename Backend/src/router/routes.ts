import express from 'express';
import { register } from '../controller/register';
import { login } from '../controller/login';
import { authenticator } from '../middleware/auth';

import { addProperty } from '../controller/addproperty';
import { allProperty } from '../controller/allproperty';
import { userProperty } from '../controller/userproperty';
import { deleteProperty } from '../controller/deleteProperty';
import { updateProperty } from '../controller/updateproperty';
import { sendEmail } from '../controller/email';
import { getPropertiesByPincodeAndType } from '../controller/filterProperty';
import passport from 'passport';


import passportConfig from '../middleware/passportConfig';
passportConfig(passport);





const router = express.Router();


router
.post('/login',login)
.post('/register',register)
.post('/addproperty',passport.authenticate('jwt', { session: false }),addProperty)
.post('/filterproperty',passport.authenticate('jwt', { session: false }),getPropertiesByPincodeAndType)
.delete('/deleteproperty/:id',passport.authenticate('jwt', { session: false }),deleteProperty)
.put('/updateproperty',passport.authenticate('jwt', { session: false }),updateProperty)
.get('/allproperty',passport.authenticate('jwt', { session: false }),allProperty)
.get('/userproperty',passport.authenticate('jwt', { session: false }),userProperty)
.post('/email',passport.authenticate('jwt', { session: false }),sendEmail)



export {router}