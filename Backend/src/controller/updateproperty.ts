import { Request, Response } from 'express';
import { Property } from '../model/properties';

const updateProperty = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { Location, description, Type, Price, PhotoPath, sell, rent, imageUrl } = req.body;

    try {
        const property = await Property.findByIdAndUpdate(id, {
            Location,
            description,
            Type,
            Price,
            PhotoPath,
            sell,
            rent,
            imageUrl
        }, { new: true });

        if (!property) {
            return res.status(404).send('Property not found');
        }

        res.status(200).json(property);
    } catch (error) {
        console.error('Error updating property:', error);
        res.status(500).send('Internal Server Error');
    }
};

export { updateProperty };
