import { Request, Response } from 'express';
import { Property } from '../model/properties';

interface PropertyDetails {
    uid: string;
    selleremail:string;
    location: string;
    description: string;
    type: string;
    price: number;
    photoPath: string;
    sell: boolean;
    rent: boolean;
}

const addProperty = async (req: Request, res: Response) => {
    const {uid,selleremail, location, description, type, price, photoPath, sell, rent }: PropertyDetails = req.body;

    try {
        const newProperty = new Property({
            uid,
            selleremail,
            location,
            description,
            type,
            price,
            photoPath,
            sell,
            rent,
        });

        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).send('Error adding property');
    }
};

export { addProperty };

