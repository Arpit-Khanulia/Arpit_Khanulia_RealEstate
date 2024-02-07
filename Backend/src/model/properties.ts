import mongoose from 'mongoose'


const propertiesSchema = new mongoose.Schema({

    uid:{
        type:String,
        required:true
    },
    selleremail:{
        type:String,
        required:true
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
const Property = mongoose.model('Property', propertiesSchema);


export {Property};




