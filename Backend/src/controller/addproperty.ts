import { Request, Response } from 'express';
import { Property } from '../model/properties';

interface PropertyDetails {
    uid: string;
    sellerEmail:string;
    location: string;
    type: string;
    price: number;
    photoPath: string;
    sell: boolean;
    rent: boolean;
    pincode:string;
    description: string;
}


const addProperty = async (req: Request, res: Response) => {
    const data: PropertyDetails = req.body;
    // const {uid,selleremail, location, description, type, price, photoPath, sell, rent,pincode }: PropertyDetails = req.body;

    console.log('yaha tak to aa gaya data');
    
    console.log(req.body);
    
    try {
        const newProperty = new Property(data);

        console.log('this is new property',newProperty);
        

        console.log('property added');
        await newProperty.save();
        
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).send('Error adding property');
    }
};

export { addProperty };

