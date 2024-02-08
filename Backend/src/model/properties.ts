import mongoose from 'mongoose'


const propertiesSchema = new mongoose.Schema({

    uid:{
        type:String,
        required:true
    },
    location: {
        type: String,
        required: true
    },
    sellerEmail:{
        type:String,
        required:true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    photoPath: {
        type: String
    },
    sell: {
        type: Boolean,
        required: true
    },
    rent: {
        type: Boolean,
        required: true
    },
    pincode:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
});



// model
const Property = mongoose.model('Property', propertiesSchema);


export {Property};




