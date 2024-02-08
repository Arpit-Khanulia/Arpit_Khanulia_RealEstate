import { Request, Response } from 'express';
import { Property } from '../model/properties';

const getPropertiesByPincodeAndType = async (req: Request, res: Response) => {
    const { pincode, type } = req.body;

    try {
        const properties = await Property.find({ pincode, type });
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).send('Error fetching properties');
    }
};

export { getPropertiesByPincodeAndType };
