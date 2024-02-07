import { Request, Response } from 'express';
import { Property } from '../model/properties';

const deleteProperty = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const property = await Property.findByIdAndDelete(id);
        if (!property) {
            return res.status(404).send('Property not found');
        }

        res.status(200).send('Property deleted successfully');
    } catch (error) {
        console.error('Error deleting property:', error);
        res.status(500).send('Internal Server Error');
    }
};

export { deleteProperty };
