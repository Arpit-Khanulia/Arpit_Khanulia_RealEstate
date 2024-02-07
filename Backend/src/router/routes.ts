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



const router = express.Router();


router
.post('/login',login)
.post('/register',register)
.post('/addproperty',addProperty)
.delete('/deleteproperty/:id',deleteProperty)
.put('/updateproperty',updateProperty)
.get('/allproperty',allProperty)
.get('/userproperty',userProperty)
.post('/email',sendEmail)



export {router}