
import { Request, Response } from 'express';
import { Property } from '../model/properties';

const userProperty = async (req: Request, res: Response) => {
    const userId = req.id;

    try {
        const properties = await Property.find({ uid: userId });
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).send('Error fetching user properties');
    }
};

export { userProperty };
