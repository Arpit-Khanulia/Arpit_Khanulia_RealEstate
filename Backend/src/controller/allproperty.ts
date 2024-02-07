import { Request, Response } from 'express';
import { Property } from '../model/properties';

const allProperty = async (req: Request, res: Response) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).send('Error fetching properties');
    }
};

export { allProperty };
