import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phoneno:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
});



// model
const User = mongoose.model('User', userSchema);


export {User};


